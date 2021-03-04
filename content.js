setInterval(() => {
    document.getElementsByClassName('piano-article-blocker')[0].remove()

    const articleBody = document.getElementsByClassName('article-body-wrapper')[0];
    articleBody.style.maxHeight = '';
    articleBody.style.overflow = '';

    document.body.classList.remove('premium-article');
}, 2500);