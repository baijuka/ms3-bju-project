    
function add_tools(event)
    {
        event.preventDefault();
        var tools_item = document.getElementById('tools_required').value;
        var tools_input = document.createElement('input');
        var tools_div_child = document.createElement('div');
        tools_div_child.style.marginBottom="10px";
        tools_input.setAttribute('name', 'tools');
        tools_input.setAttribute('value', tools_item);
        var tool_remove = document.createElement('a');
        tool_remove.setAttribute('class','tool_remove')
        tool_remove.href ='#';
        tool_remove.innerText='Remove';
        tool_remove.onclick= function (){ this.parentElement.remove(); };
        tools_div_child.append(tools_input);
        tools_div_child.append(tool_remove);
        document.getElementById('tools_div').append(tools_div_child);
        document.getElementById('tools_required').value="";
        document.getElementById('tools_required').focus();
    };


        
function edit_add_tools(event)
    {
        event.preventDefault();
        var tools_input = document.createElement('input');
        tools_input.setAttribute('name', 'tools');
        tools_input.setAttribute("style","width:80%");
        tools_input.setAttribute("style","margin-left:20px;");
        document.getElementById('edit_tools_div').append(tools_input);
        tools_input.focus();
    };


    
function add_ingredient(event)
    {
        event.preventDefault();
        var ingredients_item = document.getElementById('ingredients').value;
        var ingredients_input = document.createElement('input');
        var ingredient_div_child = document.createElement('div');
        ingredient_div_child.style.marginBottom="10px";
        ingredients_input.setAttribute('name', 'ingredients');
        ingredients_input.setAttribute('value', ingredients_item);
        var ingredient_remove = document.createElement('a');
        ingredient_remove.setAttribute('class','ingredient_remove')
        ingredient_remove.href ='#';
        ingredient_remove.innerText='Remove';
        ingredient_remove.onclick= function (){ this.parentElement.remove(); };
        ingredient_div_child.append(ingredients_input);
        ingredient_div_child.append(ingredient_remove);
        document.getElementById('ingredients_div').append(ingredient_div_child);
        document.getElementById('ingredients').value="";
        document.getElementById('ingredients').focus();
    };

function edit_add_ingredient(event)
{
    event.preventDefault();
    var ingredient_input = document.createElement('input');
    ingredient_input.setAttribute('name', 'ingredients');
    ingredient_input.setAttribute("style","width:80%");
    ingredient_input.setAttribute("style","margin-left:20px;");
    document.getElementById('edit_ingredient_div').append(ingredient_input);
    ingredient_input.focus();
};        
   
function add_method(event)
    {
        event.preventDefault();
        var method_item = document.getElementById('method').value;
        var method_input = document.createElement('TEXTAREA');
        var method_div_child = document.createElement('div');
        method_div_child.style.marginBottom="10px";
        method_input.setAttribute('name', 'method');
        method_input.setAttribute('value', method_item);        
        method_input.innerHTML = method_item;
        var method_remove = document.createElement('a');
        method_remove.setAttribute('class','tool_remove')
        method_remove.href ='#';
        method_remove.innerText='Remove';
        method_remove.onclick= function (){ this.parentElement.remove(); };
        method_div_child.append(method_input);
        method_div_child.append(method_remove);
        document.getElementById('method_div').append(method_div_child);
        document.getElementById('method').value="";
        document.getElementById('method').focus();
    };

function edit_add_method(event)
    {
        event.preventDefault();
        var method_input = document.createElement('TEXTAREA');
        method_input.setAttribute('name', 'method');
        method_input.setAttribute("style","max-width:70%");
        method_input.setAttribute("style","margin-left:20px;");
        method_input.setAttribute("style","padding-left:3px;");
        document.getElementById('edit_method_div').append(method_input);
        method_input.focus();
     };     


    $(".remove_tool").on("click", function(e){
        e.preventDefault();
        $(this).parent('div').remove();
      });

    $(".remove_method").on("click", function(e){
        e.preventDefault();
        $(this).parent('div').remove();
    });

    $(".remove_ingredient").on("click", function(e){
        e.preventDefault();
        $(this).parent('div').remove();
    });

function tool_remove(e){
        e.preventDefault();
        $(this).parent('div').remove();
      };
