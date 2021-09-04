var tools_arr=[];
var tools_ul=document.getElementById('tools_ul');
var btn=document.getElementById('btn_tools');
tool_count=0;

function add_tools(event)
    {
        event.preventDefault();
        tool_count++;
        var tools_item = document.getElementById('tools_required').value;
        var tools_li = document.createElement('input');
        tools_li.setAttribute('name', 'tools');
        tools_li.setAttribute('value', tools_item);
        tools_ul.append(tools_li);
        tools_arr.push(tools_item);
        document.getElementById('tools_required').value="";
        document.getElementById('tools_required').focus();
    };


