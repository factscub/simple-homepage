(async function () {
    const container = document.querySelector('#baked-hero-section-container');

    try {
        const templatePath = 'src/components/bakeryHeroSection/template.html';
        const templateResponse = await fetch(templatePath);
        const templateHTML = await templateResponse.text();
        const tempContainer = document.createElement('div');
        tempContainer.innerHTML = templateHTML;
        const template = tempContainer.querySelector('#baked-hero-section-template');
        const clone = document.importNode(template.content, true);
        container.appendChild(clone)
    } catch (error) {
        console.error(error);
    }
})();