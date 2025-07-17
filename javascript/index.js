document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        const header = document.getElementById('header');
        const hero = document.querySelector('.landing-page');
        
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


    // accordion

    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");

        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
        panel.style.display = "none";
        } else {
        panel.style.display = "block";
        }
    });
    }
    
    // animation
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
    }
});