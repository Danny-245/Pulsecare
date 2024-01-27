const navBar = document.getElementById('top-nav');
const navLogo = document.getElementById('logo');
const navLink = document.getElementsByClassName('nav-link');
window.onscroll = function() {
    scrollFunction();
    scrollFunction2();
}
function scrollFunction() {
    if(document.body.scrollTop > 130 || document.documentElement.scrollTop > 130 ) {
        navBar.classList.add('apply');
        // navLink.classList.add('apply2');
        // navLogo.classList.add('apply');

    }
    else {
        navBar.classList.remove('apply');
        // navLink.classList.remove('apply2');
        // navLogo.classList.remove('apply');
    }
}

$(document).ready(function() {
$(".counter").counterUp({
    delay: 10,
    time: 1200
})
});

const backToTopBtn = document.querySelector('.scrolltop');


function scrollFunction2() {
    if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopBtn.style.display = 'block';
    }
    else{
        backToTopBtn.style.display = 'none';
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// backToTopBtn.addEventListener('click', scrollTop);