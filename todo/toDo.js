let addToDoButton = document.getElementById('addTD');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputF');

addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputF.value;
    toDoContainer.appendChild(paragraph);
    inputF.value = '';
    paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick',function(){
        toDoContainer.removeChild(paragraph);
    })
})

