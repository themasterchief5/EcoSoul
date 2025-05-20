window.addEventListener('load', () => {
    setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }, 50);
});
document.querySelectorAll('.read-more').forEach(button => {
    button.addEventListener('click', () => {
        const text = button.previousElementSibling;
        text.classList.toggle('expanded');
        button.classList.toggle('active');
        button.textContent = text.classList.contains('expanded') ? 'Read Less' : 'Read More';
    });
});

function isInWidzenie(element) {
    const rect = element.getBoundingClientRect();
    return rect.top < window.innerHeight;
}

window.addEventListener('scroll', () => {
    const articles = document.querySelectorAll('article');
    articles.forEach((article, i) => {
        if (isInWidzenie(article) && !article.classList.contains('alr-visible')) {
            article.classList.add('alr-visible');
            article.classList.add(i % 2 === 0 ? 'slide-in-left' : 'slide-in-right');
        }
    });
});