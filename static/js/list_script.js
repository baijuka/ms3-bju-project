// var tools_arr=[];
// var tools_ul=document.getElementById('tools_ul');
// var btn=document.getElementById('btn_tools');
// tool_count=0;

// function add_tools(event)
//     {
//         event.preventDefault();
//         tool_count++;
//         var tools_item = document.getElementById('tools_required').value;
//         var tools_li = document.createElement('input');
//         tools_li.setAttribute('name', 'tools');
//         tools_li.setAttribute('value', tools_item);
//         tools_ul.append(tools_li);
//         tools_arr.push(tools_item);
//         document.getElementById('tools_required').value="";
//         document.getElementById('tools_required').focus();
//     };

        
function add_tools(event)
    {
        event.preventDefault();
        var tools_item = document.getElementById('tools_required').value;
        var tools_input = document.createElement('input');
        tools_input.setAttribute('name', 'tools');
        tools_input.setAttribute('value', tools_item);
        document.getElementById('tools_div').append(tools_input);
        document.getElementById('tools_required').value="";
        document.getElementById('tools_required').focus();
    };


        
function edit_add_tools(event)
    {
        event.preventDefault();
        var tools_input = document.createElement('input');
        tools_input.setAttribute('name', 'tools');
        document.getElementById('edit_tools_div').append(tools_input);
    };


    
function add_ingredient(event)
    {
        event.preventDefault();
        var ingredients_div = document.getElementById('ingredients_div');
        var ingredients_item = document.getElementById('ingredients').value;
        var ingredients_input = document.createElement('input');
        ingredients_input.setAttribute('name', 'ingredients');
        ingredients_input.setAttribute('value', ingredients_item);
        ingredients_div.append(ingredients_input);
        document.getElementById('ingredients').value="";
        document.getElementById('ingredients').focus();
    };

function edit_add_ingredient(event)
{
    event.preventDefault();
    var ingredient_input = document.createElement('input');
    ingredient_input.setAttribute('name', 'ingredients');
    document.getElementById('edit_ingredient_div').append(ingredient_input);
};        
   
function add_method(event)
    {
        event.preventDefault();
        var method_item = document.getElementById('method').value;
        var method_input = document.createElement('TEXTAREA');
        method_input.setAttribute('name', 'method');
        method_input.setAttribute('value', method_item);
        method_input.innerHTML = method_item;
        document.getElementById('method_div').append(method_input);
        document.getElementById('method').value="";
        document.getElementById('method').focus();
    };

function edit_add_method(event)
    {
        event.preventDefault();
        var method_input = document.createElement('TEXTAREA');
        method_input.setAttribute('name', 'method');
        document.getElementById('edit_method_div').append(method_input);
    };     