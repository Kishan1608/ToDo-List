let addButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

addButton.addEventListener('click', () => {
    var paragaph = document.createElement('p');
    paragaph.innerText = inputField.value;
    paragaph.classList.add('paragraph-styling');
    toDoContainer.appendChild(paragaph);
    inputField.value = '';
    paragaph.addEventListener('click', () => {
        paragaph.style.textDecoration = "line-through";
    })

    paragaph.addEventListener('dblclick', () => {
        toDoContainer.removeChild(paragaph);
    })
})