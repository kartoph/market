// try to connect to tthe file script.js
console.log("script.js loaded");
// get elements by id
let itemsDiv = document.getElementById("items");

// check if the element is found
if (itemsDiv) {
    console.log(itemsDiv);
    console.log('Поле classList:', itemsDiv.classList);
    console.log('Поле id:', itemsDiv.id);
    console.log('Поле clientWidth:', itemsDiv.clientWidth);
    console.log('Поле innerHTML:', itemsDiv.innerHTML);
    itemsDiv.innerHTML = 'Hello world!';
    itemsDiv.innerHTML = '2 Hello world!';
} else {
    console.log("Element with id 'items' not found.");
}
//get founded element
console.log(itemsDiv);