# [Recipe Nation](https://ms3-bju-project.herokuapp.com/)

## Contents
1. [Summary](#summary)
1. [UX](#ux)
    1. [Strategy](#strategy)
    1. [Scope](#scope)
    1. [Structure](#structure)
    1. [Skeleton](#skeleton)
    1. [Surface](#surface)
1. [Features](#features)
    1. [Existing Features](#existing-features)
    1. [Features left to implement](#left-to)
1. [Bugs](#bugs)
1. [Technologies used](#tech)
1. [Testing](#testing)
1. [Deployment](#deployment)
    1. [Github Pages](#github)
    1. [heroku](#heroku)
1. [Credits](#credits)
    1. [Content](#content)
    1. [Acknowledgements](#acks)

# <a name="summary"></a> Summary
People are passionate about their food.  They never miss an opportunity to try different varieties of food.
There is a plethora of cooking resources available online as well as printed materials.  However, people's appetite
about food never stops. Cookerish has developed its website to provide its users an opportunity to post their
reciepes and, at the same time, try recipes posted by others.  Here they can search, view, add, edit and delete
recipes.

# <a name="ux"></a> UX
The primary objective of Cookerish is to provide its users a user-friendly, intuitive website capable of providing 
all required information about how to use the website within a user-friendly platform.
## <a name="Strategy"></a> Strategy
### **New site user's goals:**
* As a new site user, I want to be able to browse and search for recipes 
* As a new site user, I want to get inspiration for a recipe to make
* As a new site user, I want to be able to understand the intent of the page
* As a new site user, I want to understand easily how to navigate the page and access the facilities provided
### **Returning user's goals**
* As a returning site user, I want to be able to log in
* As a returning site user, I want to be able to view my recipes
* As a returning site user, I want to be able to edit and delete my recipes
* As a returning site user, I want to be able to add new recipes
### **Site owner'as goals:**
* As a site owner, I want recipes added via the site to be stored in the correct format in the database
* As a site owner, I want to be able to see who has added each recipe
* As a site owner, I want to know how many reciepes were added


## <a name="scope"></a> Scope
**Functional requirements:**
#### For ease of use:
* Navigation bar which is simple and easy to navigate
* A search Function to search for recipes
#### To ensure the database is up to date and editable:
* Function to add a recipe
* Function to edit a recipe
* Function to delete a recipe
* For the recipes to be only editable by the creator
* User with admin status is able to add, delete and edit recipe categories

**Content requirements:**
#### To ensure the site is visually appealing and to draw the user's eye:
* Images of recipes
* Color scheme was chosen to make the site attractive, memorable and trustworthy. 

## <a name="structure"></a> Structure
**Interaction design:**
* User friendly interface to ensure usability and to encourage the user to return
* Responsive and visible links which change on hover to provide user feedback as they navigate the site
* Ability to exit pop ups so a user is not forced to use the browser navigation tools

**Information Architecture:**
* Navigation bar at the top of the page
* Footer at the bottom of the page - sticky to the bottom so it is only visible when the bottom of the page is reached
* Responsive navigation bar - adjusting for mobile for ease of use
* Responsive images to ensure they fit within the designated spaces, no matter what device is being used or the size of the screen
* All features appropriate size and responsive for mobile and desktop viewing
* All information is appropriate and relative to the subject and not misleading or hard to find

## <a name="skeleton"></a> Skeleton
Wireframes for desktop, tablet and mobile deiveces were created using Balsamiq Desktop App.  
-   Home Page Wireframe -<a href="./static/wireframes/recipes.pdf" target="_blank" >Recipies</a>
-   Profile Page - <a href="./static/wireframes/profile.pdf" target="_blank" >Profile</a>
-   Add Recipe Page - <a href="./static/wireframes/add_recipe.pdf" target="_blank" >Add Recipe</a>
-   User Registration Page - <a href="./static/wireframes/register.pdf" target="_blank" >Register</a>


## <a name="surface"></a> Surface
The intention of the website is to be clean, crisp and clear

* The font family chosen is 'Roboto' which is simple and allowing letters to be settled into their natural width.
* The colour scheme selected is shades of Materialze blue-grey and off-white with black font. Shades of blue, orange and red were used for buttons to match the context.
* Color scheme was chosen considering users from all aspects of life. Too bright and vibrant colors were avoided to accommodate users with different visual capacities.

# <a name="features"></a> Features
## <a name="existing-features"></a> Existing Features
Feature | Details
--------|--------
Log in | The user can register and log into their own account with personalised features
Log out | There is a log out functionality on the page which helps prevent other users from accessing the system
Add recipe | Users can contribute to the site via the add recipe form
Edit recipe form | Users are able to edit their own recipes. 
Delete a recipe | Users are abel to delete their own recipes. 
Search function | Every user of the website is able to search the recipe database by ingredient or recipe name without being logged in.

## <a name="left-to"></a> Features left to implement
Feature | Details
--------|--------

# <a name="tech"></a> Technologies Used

* GitHub
* Gitpod
* Python
* Flask
* MongoDb
* Heroku
* Jinja
* Materialize - https://materializecss.com/
* JavaScript
* Balsamiq
* Bootstrap [https://getbootstrap.com/]
* Google fonts - https://fonts.google.com/
* www.validator.w3.org
* W3C Validator[http://www.css-validator.org/]
* Google Chrome
* Microsoft Edge
* FireFox
* Responsinator[http://www.responsinator.com/]
* Chrome Dev Tools



# <a name="testing"></a> Testing
### **New site user testing:**
* As a new site user, I want to be able to browse and search for recipes 
    1. Upon entering the site, users are automatically greeted with the page title, carousal image slide and sub heading
    1. There is a clear call to action to browse the recipes
* As a new site user, I want to get inspiration for a recipe to make
    1. The images and cook/prep times within the page provide inspiration to the site user
* As a new site user, I want to be able to understand the intent of the page
    1. Upon entering the page, it is clear the site is designed around food and cooking. The carousel image point the user to this
* As a new site user, I want I want to understand easily how to navigate the page and access the facilities provided
    1. The navigation bar has clear and easy to understand links. These links are also dynamic to whether the user is signed in or not so they are only seeing the relevant options
### **Returning user testing**
* As a returning site user, I want to be able to log in
    1. Upon entering the site, there is the option in the nav bar to register and log in
* As a returning site user, I want to be able to view my recipes
    1. The user's profile page provides all of the recipes the user has submitted
* As a returning site user, I want to be able to edit and delete my recipes
    1. The recipes the user has submitted show buttons to edit and delete the recipes. This is not visible to other users
* As a returning site user, I want to be able to add new recipes
    1. The form to enter a new recipe allows the user to instantly add a recipe to the site in the required format
* As a returning site user, I want to be able to add new ingredients to an existing recipe
    1. The form to edit an existing recipe allows the user to instantly add a new ingredients
* As a returning site user, I want to be able to delete unwanted ingredients from an existing recipe
    1. The form to edit an existing recipe allows the user to instantly delete unwanted ingredients from the recipe
* As a returning site user, I want to be able to add new tools to an existing recipe
    1. The form to edit an existing recipe allows the user to instantly add a new tools
* As a returning site user, I want to be able to delete unwanted tools from an existing recipe
    1. The form to edit an existing recipe allows the user to instantly delete unwanted tools from the recipe
* As a returning site user, I want to be able to add new steps to the methos of an existing recipe
    1. The form to edit an existing recipe allows the user to instantly add a new steps to the method of an existig recipe
* As a returning site user, I want to be able to delete unwanted steps from the methods of an existing recipe
    1. The form to edit an existing recipe allows the user to instantly delete unwanted steps from the method of an existing recipe


### **Site owner testing:**
* As a site owner, I want recipes added via the site to be stored in the correct format in the database
    1. The form to add or edit a recipe validates the content to ensure all essential fields are complete and are in the correct format
    2. Some fields do not require values, for it is upto the user to determine whether it is required or not. For example, Recipe Tip. When there is nothing to mention in the Tip field, user is able to leave this field blank.
* As a site owner, I want to be able to see who has added each recipe
    1. When a recipe is submitted, the user's username is stored in the database. This username is shown on the site below each recipe

### **Performance testing:**
1. Tested website responsiveness using http://www.responsinator.com/
    1. Results: The website is responsive to all device sizes without any unnecessary x-scroll. 
1. Tested the image size to ensure no image is to large and impacting the website loading times. I used the Google Dev Tools - Network
    1. Results: The site loading time is sub optimal. The total website loading time is 1.20s which can be improved
1. Tested the images on the all recipes page using Google Dev Tools - Lighthouse
    1. Results: It has found that JPEG and PNG files take more time to load.
1. All HTML pages were tested using https://jigsaw.w3.org/css-validator/validator
    1. No errors were found
    1. All HTML pages resulted in errors where the Jinja template language was used
        1. None of these are actual errors within the code
1. Tested the CSS using http://www.css-validator.org/
    1. No errors were found
1. Tested the website on the Google Chrome browser Version 93.0.4577.63(Official Build) (64-bit)
    1. Results: The website was responsive and the elements performed in the way they were intended to
1. Tested the website on the Microsoft Edge browser Version Version 93.0.961.47  (Official build) (64-bit)
    1. Results: The website was responsive and the elements performed in the way they were intended to
1. Tested the website on the Firefox browser Version 92.0 (64-bit)
    1. Results: The website was responsive and the elements performed in the way they were intended to

# <a name="deployment"></a> Deployment
## <a name="github"></a> Github Pages
1. Create a new repository or access an existing repository
1. Click the green Gitpod button to launch the project in Gitpod
1. Create an index.html file
1. Add the file to the staging area using the git add Functional
1. Commit the file using the git commit function, adding an appropriate commentary
1. Push the file to GitHub using the git commit and git push functions
1. Refresh your GitHub repository and click the 'Settings' tab
1. Scroll to the GitHub Pages section and select a publishing source
1. Click 'Save'
1. Click the URL created within the Settings - GitHub Pages section

**To clone the repository for local deployment:** 
1. On the main page of the repository, click the down arrow Code button
1. Click the download icon under the relevant section to clone with either HTTPS, SSH or GitHub CLI 
1. In Git Bash, change the current directory to the location you want the directory to be stored
1. Type git clone and then paste the URL you copied in step 2
    1. An example for HTTPS: `git clone https://github.com/baijuka/ms3-bju-project`
1. Press enter - that's it, your clone has been completed! 

**To fork the repository:**
1. Navigate to the main page of the repository you wish to fork
1. Click the Fork button on the top right hand side of the page
## <a name="heroku"></a> Heroku
### How to deploy to Heroku

To deploy the app to Heroku from its [GitHub repository](https://github.com/baijuka/ms3-bju-project), the following steps were taken:

1. From the GitPod terminal, create **requirements.txt** and **Procfile** using these commands:

```console
pip3 freeze --local > requirements.txt
echo web: python app.py > Procfile
```

2. **Push** these files to GitHub
3. **Log In** to [Heroku](https://id.heroku.com/login)
4. Select **Create new app** from the dropdown in the Heroku dashboard
5. Choose a unique name ('ms3-bju-project') for the app and the location nearest to you
6. Go to the **Deploy** tab and under **Deployment method** choose GitHub
7. In **Connect to GitHub** enter your GitHub repository details and once found, click **Connect**
8. Go to the **Settings** tab and under **Config Vars** choose **Reveal Config Vars**
9. Enter the following keys and values, which must match those in the env.py file created earlier:

|**Key**|**Value**|
|:-----|:-----|
|IP|`0.0.0.0`|
|PORT|`5000`|
|SECRET_KEY|`<app secret key>`|
|MONGO_URI|mongodb+srv://root:userpassword@cluster0.szqmk.mongodb.net/recipe_manager?retryWrites=true&w=majority
|MONGO_DBNAME|`recipe_manager`|


10. Go back to the **Deploy** tab and under **Automatic deploys** choose **Enable Automatic Deploys**
11. Under **Manual deploy**, select **master** and click **Deploy Branch**
12. Once the app has finished building, click **Open app** from the header row of the dashboard

# <a name="credits"></a> Credits
## <a name="content"></a> Content
Recipes added were taken from the following sites:
- https://www.bbc.co.uk/food
- https://www.pachakam.com/

## <a name="media"></a> Media
Images used in this website were taken from the following sites:
- https://www.bbc.co.uk/food
- https://www.pachakam.com/
- https://www.simplyrecipes.com/
- https://lorempixel.com
- https://www.procook.co.uk/

## Layout & Style

Following site/s were consulted to design the layout of the site pages:
- [BBC Food](https://www.bbc.co.uk/food)

## Coding

Following sites were consulted to develop coding strategy for the site:
- [Code Institute Course Module](https://codeinstitute.net/)
- [W3Schools](https://www.w3schools.com/)
- [Materialize](https://materializecss.com/)
- [Traversy Media](https://www.youtube.com/watch?v=pWbMrx5rVBE)
- [The Pallets Projects](https://palletsprojects.com/p/flask/)
- [MongoDB Manual](https://docs.mongodb.com/manual/)


## <a name="acks"></a> Acknowledgements

* Code Institute Tutors

* Slack Community Members

* My mentor Antonio Rodriguez who has provided me with guidance and support throughout the project

* All my family and friends who helped to test the site and to post recipes on the site.
