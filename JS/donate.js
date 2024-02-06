const navBar = document.getElementById('top-nav');
const navLogo = document.getElementById('logo');
const navLink = document.getElementsByClassName('nav-link');



window.onscroll = function () {
    scrollFunction();
    scrollFunction2();
}
function scrollFunction() {
    if (document.body.scrollTop > 130 || document.documentElement.scrollTop > 130) {
        navBar.classList.add('apply');


    }
    else {
        navBar.classList.remove('apply');

    }
}

$(document).ready(function () {
    $(".counter").counterUp({
        delay: 10,
        time: 1200
    })
});

const backToTopBtn = document.querySelector('.scrolltop');


function scrollFunction2() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopBtn.style.display = 'block';
    }
    else {
        backToTopBtn.style.display = 'none';
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

const preLoad = document.getElementById('preload');
function preloadFunction() {
    preLoad.style.display = 'none';
}
setTimeout(preloadFunction, 5000);

function addStyle(input) {
    input.classList.add('style');
}



const month = document.getElementById('month');
const year = document.getElementById('year');
const cvv = document.getElementById('cvv');
const cardNo = document.getElementById('Card-no');
const cardNoError = document.getElementById('cardError');
const dateError = document.getElementById('DateError');
const cvvError = document.getElementById('cvvError');

const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    if (cardNo.value.trim().length !== 16) {
        e.preventDefault();
        cardNoError.innerHTML = `<p class="error d-flex mt-2 align-items-center"><i class="fa-solid fa-triangle-exclamation"></i><span>wrong card number</span></p>`;

    }
    else {
        cardNoError.innerHTML = '';

    }
    if (month.value === '' || month.value > 12 || year.value === '' || year.value > 2024 || year.value < 2015) {
        e.preventDefault();
        dateError.innerHTML = `<p class="error d-flex mt-2 align-items-center"><i class="fa-solid fa-triangle-exclamation"></i><span>Date must be in the correct format</span></p>`;
    }

    else {
        dateError.innerHTML = '';
    }
    if (cvv.value === '' || cvv.value.trim().length !== 3) {
        e.preventDefault();
        cvvError.innerHTML = `<p class="error d-flex mt-2 align-items-center"><i class="fa-solid fa-triangle-exclamation"></i><span>Wrong card verificaton value</span></p>`;
    }
    else {
        cvvError.innerHTML = "";

    }
    if (cardNo.value.trim().length == 16 && month.value !== '' && month.value <= 12 && year.value !== '' && year.value <= 2024 && year.value > 2015 && cvv.value !== '' && cvv.value.trim().length == 3) {
        e.preventDefault();
        setTimeout(function delayed() {
            document.getElementById('startup').classList.add('display');
        }, 2000)

        setTimeout(function reload() {
            location.reload();
        }, 10000)
    }

})