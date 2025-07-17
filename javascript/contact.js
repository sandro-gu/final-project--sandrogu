document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        const header = document.getElementById('header');
        const hero = document.querySelector('.aboutusimage');
        
        if (!header || !hero) return;
        
        const heroHeight = hero.offsetHeight;
        const scrollPosition = window.scrollY;

        const scrollProgress = Math.min(scrollPosition / (heroHeight * 0.8), 1);

        if (scrollProgress > 0.1) {
            header.classList.remove('transparent');
            header.classList.add('solid');
        } else {
            header.classList.remove('solid');
            header.classList.add('transparent');
        }
    });

});