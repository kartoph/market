// try to connect to the file script.js
console.log("script.js loaded");

let itemsArray = [
    'Газоноскосарка 43',
    'Електричний тример 110',
    'Акамуляторна газонокосарка 32',
    'Акумуляторний оприскувач 12 N',
];

let itemsDiv = document.getElementById("items");
// check if the element is found
if (itemsDiv) {
    itemsArray.forEach((item, index) => {
        itemsDiv.innerHTML += `<div class="item">
        <h2>Товар №${index + 1} з ${itemsArray.length}</h2>
        <p>${item}</p>
        </div>`; 
    });
} else {
    console.log("Element with id 'items' not found.");
}

itemsArray = itemsArray.sort();
itemsArray.forEach((item, index) => {
    console.log(item);
});