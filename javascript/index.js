document.addEventListener('DOMContentLoaded', function() {

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


    // accordion

    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
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