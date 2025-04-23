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

async function buildMarket() {
    const arrayOfMarket = await getObjectsFromFile('js/Market.json')
    console.log(arrayOfMarket)

    if (!arrayOfMarket) {
        console.error('Відсутні дані з JSON-файлу!');
        return;
    }

    arrayOfMarket.forEach((item, index) => {
        //console.log("елемент №", index, item)
        let divMarket = document.createElement('div')
        divMarket.classList.add('market')

        divMarket.innerHTML = `
            <p>${item.id}</p>
            <h3>${item.title}</h3>
            <hr>
            <div class="img_container">
                <img src="img/${item.photo}" alt="Картинка для ${item.title}" onerror="this.onerror = null;">
            </div>

            <p>${item.description}</p>

            <div>
                <img src="img/${item.schema}" alt="" onerror="this.onerror = null;">
                <p>${'🟢'.repeat(item.rating) + '♡'.repeat(5 - item.rating)}</p>
                <p>${item.type}</p>
            </div>
        `

        document.getElementById("p-vitamins").appendChild(divVitamin)
    })
}