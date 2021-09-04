var tool_arr=[];
var tools_ul=document.getElementById('tools_ul');
var btn=document.getElementById('btn_tools');
tool_count=0;

function add_tools()
    {
        tool_count++;
        var tools_li = document.createElement('li');
        var tools_item = document.getElementById('tools_required').value;
        tools_li.innerText = tools_item;
        tools_ul.append(tools_li);
        tools_arr.push(item);
        document.getElementById('tools_required').focus();
        document.getElementById('tools_required').value="";
    };

