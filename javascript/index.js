// search bar
const search = document.querySelector('.search');
const input = document.querySelector('.input');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    search.classList.toggle('active');
    input.focus()
    
})


// header
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    const heroHeight = document.querySelector('.landing-page').offsetHeight;
    const scrollPosition = window.scrollY;
    
    // scroll progress
    const scrollProgress = Math.min(scrollPosition / (heroHeight * 0.8), 1);
    
    if (scrollProgress > 0.1) {
        header.classList.remove('transparent');
        header.classList.add('solid');
    } else {
        header.classList.remove('solid');
        header.classList.add('transparent');
    }
});