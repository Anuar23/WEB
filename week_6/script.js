let buttons = document.getElementsByTagName('button');
for(let i=0; i<buttons.length;i++){
    buttons[i].addEventListener("click",function(){
        buttons[i].parentNode.childNodes[1].style.textDecoration = "line-through";
    });
}
