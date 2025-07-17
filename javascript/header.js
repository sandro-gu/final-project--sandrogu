// search bar
const search = document.querySelector('.search');
const input = document.querySelector('.input');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    search.classList.toggle('active');
    input.focus()
    
})

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