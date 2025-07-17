// search bar
const search = document.querySelector('.search');
const input = document.querySelector('.input');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    search.classList.toggle('active');
    input.focus()
    
})

// turn solid on scroll

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

// header dropdown
document.getElementById('dropdown').addEventListener('click', function(e) {
    e.preventDefault();
    const dropdown = document.getElementById('header-dropdown');
    dropdown.classList.toggle('show');
});

document.addEventListener('click', function(e) {
    const dropdown = document.getElementById('header-dropdown');
    const dropdownBtn = document.getElementById('dropdown');
    
    if (!dropdownBtn.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.classList.remove('show');
    }
});




// footer logo links 

document.getElementById("tbc").addEventListener("click", function() {
    window.location.href = "https://tbcbank.ge/ka";
});

document.getElementById("geolab").addEventListener("click", function() {
    window.location.href = "https://geolab.edu.ge/";
});