console.log('Підключено файл скриптів market.js');


fetch('js/items.json') 
    .then(response => {
        if (!response.ok) {
            throw new Error('Помилка завантаження JSON');
        }
        return response.json();
    })
    .then(data => {
        data.forEach(item => {
       
            let itemElement = document.getElementById(item.id);
            if (itemElement) {
               
                let titleElement = itemElement.querySelector(".item-title");
                if (titleElement) {
                    titleElement.textContent = item.name;
                }

                
                let imgElement = itemElement.querySelector("img");
                if (imgElement) {
                    imgElement.src = item.image; 
                    imgElement.alt = item.name; 
                }
            }
        });
    })
    .catch(error => {
        console.error('Помилка:', error);
    });
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