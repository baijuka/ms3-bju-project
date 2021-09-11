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

$(document).ready(function() {
    var input_value;
    var counter=0;

    $(".btn_add_tools").click(function(e){
        e.preventDefault();
        counter++;
        input_value = document.getElementById("toos_required").value;
        $(".tools_div").append('<div><input type="text" name="tools" value='+input_value+'/><a href="#" class="remve_tool">Remove</a>)</div>');
        });
    $(".tools_div").on("click",".remove_tool", function(e){
        e.preventDefault();
        $(this).parent('div').remove();
        counter--;
    });
});

        
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
        var tools_item = document.getElementById('tools_required').value;
        var tools_input = document.createElement('input');
        tools_input.setAttribute('name', 'tools');
        tools_input.setAttribute('value', tools_item);
        tools_div.append(tools_input);
        document.getElementById('tools_required').value="";
        document.getElementById('tools_required').focus();
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
    