(async function () {
    const container = document.querySelector('#header-options-container');

    try {
        const templatePath = 'src/components/headerOptions/template.html';
        const templateResponse = await fetch(templatePath);
        const templateHTML = await templateResponse.text();
        const tempContainer = document.createElement('div');
        tempContainer.innerHTML = templateHTML;
        const template = tempContainer.querySelector('#header-options-template');
        const clone = document.importNode(template.content, true);
        container.appendChild(clone)
    } catch (error) {
        console.error(error);
    }
})();