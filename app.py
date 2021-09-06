import os
from flask import (
    Flask, flash, render_template,
    redirect, request, session, url_for)
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
from datetime import datetime
from werkzeug.security import generate_password_hash, check_password_hash
if os.path.exists("env.py"):
    import env


app = Flask(__name__)

app.config["MONGO_DBNAME"] = os.environ.get("MONGO_DBNAME")
app.config["MONGO_URI"] = os.environ.get("MONGO_URI")
app.secret_key = os.environ.get("SECRET_KEY")

mongo = PyMongo(app)


@app.route("/")
@app.route("/get_recipes")
def get_recipes():
    recipes = mongo.db.recipes.find()
    return render_template("recipes.html", recipes=recipes)


@app.route("/register", methods=["GET", "POST"])
def register():
    if request.method == "POST":
        existing_user = mongo.db.users.find_one(
            {"username": request.form.get("username").lower()})

        if existing_user:
            flash("Username already exists")
            return redirect(url_for("register"))

        register = {
            "username": request.form.get("username").lower(),
            "password": generate_password_hash(request.form.get("password"))
        }
        mongo.db.users.insert_one(register)

        session["user"] = request.form.get("username").lower()
        flash("Registration Successful!")
        return redirect(url_for("profile", username=session["user"]))
    return render_template("register.html")


@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        existing_user = mongo.db.users.find_one(
            {"username": request.form.get("username").lower()})

        if existing_user:
            if check_password_hash(
                existing_user["password"], request.form.get("password")):
                    session["user"] = request.form.get("username").lower()
                    flash("Welcome, {}".format(request.form.get("username")))
                    return redirect(url_for("profile", username=session["user"]))
            else:
                flash("Incorrect Username and/or Password")
                return redirect(url_for("login"))
        else:
            flash("Incorrect Username and/or Password")
            return redirect(url_for("login"))

    return render_template("login.html")

@app.route("/logout")
def logout():
    flash("You have been successfully logged out")
    session.pop("user")
    return redirect(url_for("login"))


@app.route("/profile/<username>", methods=["GET", "POST"])
def profile(username):
    username = mongo.db.users.find_one(
      {"username": session["user"]})
  
    user_recipe = mongo.db.recipes.find(
      {"created_by": session["user"]})

    return render_template("profile.html", user=username, user_recipe=user_recipe)



@app.route("/add_recipe", methods=["POST", "GET"])
def add_recipe():
    if request.method=="POST":
        recipe = {
            "recipe_name": request.form.get("recipe_name"),
            "category_name": request.form.get("category_name"),
            "cook_time": request.form.get("cook_time"),
            "prep_time": request.form.get("prep_time"),
            "tools_required": request.form.getlist("tools"),
            "ingredients": request.form.getlist("ingredients"),
            "method": request.form.getlist("method"),
            "serve": request.form.get("serve"),
            "cuisine": request.form.get("cuisine"),
            "date_posted": datetime.now(),
            "recipe_tip": request.form.get("recipe_tip"),
            "created_by": session["user"],
            "image_source": request.form.get("image_source")
        }
        mongo.db.recipes.insert_one(recipe)
        flash("Recipe successfully added")
        return redirect(url_for('get_recipes'))

    categories = mongo.db.categories.find().sort("category_name",1)
    return render_template("add_recipe.html", categories=categories)


@app.route("/edit_recipe/<recipe_id>", methods=["GET","POST"])
def edit_recipe(recipe_id):
    if request.method=="POST":
        submit = {
            "recipe_name": request.form.get("recipe_name"),
            "category_name": request.form.get("category_name"),
            "cook_time": request.form.get("cook_time"),
            "prep_time": request.form.get("prep_time"),
            "tools_required": request.form.getlist("tools"),
            "ingredients": request.form.getlist("ingredients"),
            "method": request.form.getlist("method"),
            "serve": request.form.get("serve"),
            "cuisine": request.form.get("cuisine"),
            "date_posted": datetime.now(),
            "recipe_tip": request.form.get("recipe_tip"),
            "created_by": session["user"],
            "image_source": request.form.get("image_source")
        }
        mongo.db.recipes.update({"_id":ObjectId(recipe_id)}, submit)
        flash("Recipe successfully updated")
        return redirect(url_for('profile', username=session['user']))

    recipe = mongo.db.recipes.find_one({"_id":ObjectId(recipe_id)})
    categories = mongo.db.categories.find().sort("category_name",1)
    return render_template("edit_recipe.html", categories=categories,recipe=recipe)


@app.route("/delete_recipe/<recipe_id>")
def delete_recipe(recipe_id):
    mongo.db.recipes.remove({"_id": ObjectId(recipe_id)})
    flash("Recipe Successfully Deleted")
    # return redirect(url_for("get_recipes"))
    return redirect(url_for('profile', username=session['user']))


if __name__ == "__main__":
    app.run(host=os.environ.get("IP"),
            port=int(os.environ.get("PORT")),
            debug=True)