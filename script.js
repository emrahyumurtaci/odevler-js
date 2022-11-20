const buttonAdd=document.getElementById('buttonAdd');
const buttonClear=document.getElementById('buttonClear');
const ToDoContainer=document.getElementById('ToDoContainer');




buttonAdd.addEventListener('click',function(){
    let paragraf=document.createElement('p');
    ToDoContainer.appendChild(paragraf);
    paragraf.classList.add("paragraf");
    paragraf.innerHTML=inputText.value;
    inputText.value="";

    paragraf.addEventListener('click',function(){
        paragraf.style.textDecoration='line-through';
    });

    paragraf.addEventListener('dblclick',function(){
        ToDoContainer.removeChild(paragraf);

    });
    buttonClear.addEventListener('click',function(){
        paragraf.style.display='none'
    });
    
})




