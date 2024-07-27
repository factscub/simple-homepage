(async function () {
    const container = document.querySelector('#social-media-info-container');

    try {
        const templatePath = 'src/components/socialMediaInfo/template.html';
        const templateResponse = await fetch(templatePath);
        const templateHTML = await templateResponse.text();
        const tempContainer = document.createElement('div');
        tempContainer.innerHTML = templateHTML;
        const template = tempContainer.querySelector('#social-media-info-template');
        const clone = document.importNode(template.content, true);
        container.appendChild(clone)
    } catch (error) {
        console.error(error);
    }
})();