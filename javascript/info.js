document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    const landing = document.querySelector('.fullimage');

    const headerRect = header.getBoundingClientRect();
    const landingRect = landing.getBoundingClientRect();

    const isOverlapping = !(
        headerRect.bottom < landingRect.top ||
        headerRect.top > landingRect.bottom
    );

    if (isOverlapping) {
        header.classList.add('transparent');
        header.classList.remove('solid');
    } else {
        header.classList.remove('transparent');
        header.classList.add('solid');
    }
    });

});