window.addEventListener("load", () => {
    document.getElementsByClassName('piano-article-blocker')[0].remove()

    setInterval(() => {
        const articleBody = document.getElementsByClassName('article-body-wrapper')[0];
        articleBody.style.maxHeight = '';
        articleBody.style.overflow = '';

        const blocks = articleBody.getElementsByClassName('article-block block-quote');
        for (let i = 0; i < blocks.length; i++) {
            blocks[i].style.opacity = '1 !important';
            blocks[i].style.visibility = 'visible !important';
        }

        const bodies = document.getElementsByClassName('article-body fbg-container');
        for (let i = 0; i < bodies.length; i++) {
            bodies[i].style.opacity = '1 !important';
            bodies[i].style.visibility = 'visible !important';
        }
    }, 2500);
});