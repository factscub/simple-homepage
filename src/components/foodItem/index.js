(async function () {
    const container = document.querySelector('#food-item-container');

    try {
        const templatePath = 'src/components/foodItem/template.html';
        const templateResponse = await fetch(templatePath);
        const templateHTML = await templateResponse.text();
        const tempContainer = document.createElement('div');
        tempContainer.innerHTML = templateHTML;
        const template = tempContainer.querySelector('#food-item-template');
        const fooItemsPath = 'src/assets/data/foodItems.json';
        const fooItemsResponse = await fetch(fooItemsPath);
        const fooItems = await fooItemsResponse.json()

        fooItems.forEach(function (item) {
            const clone = document.importNode(template.content, true);
            clone.querySelector('.food-item-image img').src = item.image;
            clone.querySelector('.food-item-title').textContent = item.title;
            clone.querySelector('.food-item-description').textContent = item.description;
            clone.querySelector('.food-item-price').textContent = item.price;
            const packElement = clone.querySelector('.food-item-pack');
            const selectOptions = item.packOptions.map(function (val) {
                const selectOption = document.createElement('option')
                selectOption.value = val;
                selectOption.innerText = val;
                return selectOption
            });
            selectOptions.forEach(function (option) { return packElement.appendChild(option) });

            const quantity = clone.querySelector('.quantity');
            clone.querySelector('.quantity-decrease').addEventListener('click', function () {
                if (parseInt(quantity.textContent) > 1) {
                    quantity.textContent = parseInt(quantity.textContent) - 1;
                }
            });
            clone.querySelector('.quantity-increase').addEventListener('click', function () {
                quantity.textContent = parseInt(quantity.textContent) + 1;
            });

            container.appendChild(clone);
        });

    } catch (error) {
        console.error(error);
    }
})();
