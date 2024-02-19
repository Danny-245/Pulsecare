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


    function isValidCreditCard(number) {
        var regex = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;
        return regex.test(number);
    }

    if (cardNo.value.trim().length !== 16) {
        e.preventDefault();
        cardNoError.innerHTML = `<p class="error d-flex mt-2 align-items-center"><i class="fa-solid fa-triangle-exclamation"></i><span>wrong card number</span></p>`;

    }

    else {
        cardNoError.innerHTML = '';

    }
    if (isValidCreditCard(cardNo.value)) {
        cardNoError.innerHTML = '';
    }
    else {
        e.preventDefault();
        cardNoError.innerHTML = `<p class="error d-flex mt-2 align-items-center"><i class="fa-solid fa-triangle-exclamation"></i><span>wrong card number</span></p>`;

    }

    if (month.value === '' || month.value > 12 || year.value === '' || year.value < 2024 || year.value > 2028) {
        e.preventDefault();
        dateError.innerHTML = `<p class="error d-flex mt-2 align-items-center"><i class="fa-solid fa-triangle-exclamation"></i><span>Date must be in the correct format</span></p>`;
    }

    else {
        dateError.innerHTML = '';
    }
    // function yearr() {

    // }
    // if(year.value === 2024 && month.value < 3) {
    //     e.preventDefault();
    //     dateError.innerHTML = `<p class="error d-flex mt-2 align-items-center"><i class="fa-solid fa-triangle-exclamation"></i><span>Date must be in the correct format</span></p>`;
    // }
    // else {
    //     dateError.innerHTML = '';
    // }

    if (cvv.value === '' || cvv.value.trim().length !== 3) {
        e.preventDefault();
        cvvError.innerHTML = `<p class="error d-flex mt-2 align-items-center"><i class="fa-solid fa-triangle-exclamation"></i><span>Wrong card verificaton value</span></p>`;
    }
    else {
        cvvError.innerHTML = "";

    }

    if (cardNo.value.trim().length == 16 && month.value !== '' && month.value <= 12 && year.value !== '' && year.value >= 2024 && year.value < 2028 && cvv.value !== '' && cvv.value.trim().length == 3 && isValidCreditCard(cardNo.value)) {
        e.preventDefault();


        setTimeout(function addLoader() {
            let goNxt = document.getElementById('go-next');
            goNxt.innerHTML = `<div class="loader-spin text-center"></div>`
        }, 0
        )

        setTimeout(function addButtontext() {
            let goNxt = document.getElementById('go-next');
            goNxt.innerHTML = "Continue";
        }, 5000)
        let timeout = setTimeout(function delayed() {
            document.getElementById('startup').classList.add('display');
        }, 5000)

        // setTimeout(() => {
        //     clearTimeout(timeout);
        // }, 9000)
        setTimeout(function reload() {
            document.getElementById('startup').classList.remove('display');
            clearTimeout(timeout);
            swal({
                title: "Payment Success!",
                text: "Awaiting confirmation!",
                icon: "success",
                button: "Ok",
            }).then(() => {
                location.reload();
            });
        }, 10000)
    }

})

// addingAmount

const fp = document.getElementById('$200');
const sp = document.getElementById('$100');
const tp = document.getElementById('$75');
const ftp = document.getElementById('$50');
const custom = document.getElementById('custom');
const donAmount = document.getElementById('donation-amount');

function addtwoHundredDos() {
    "use strict";


    fp.classList.add('onchange');
    sp.classList.remove('onchange');
    tp.classList.remove('onchange');
    ftp.classList.remove('onchange');
    custom.classList.remove('onchange');

    donAmount.value = 200;
    donAmount.readOnly = true;

}
function addoneHundredDos() {
    "use strict";
    fp.classList.remove('onchange');
    sp.classList.add('onchange');
    tp.classList.remove('onchange');
    ftp.classList.remove('onchange');
    custom.classList.remove('onchange');
    donAmount.value = 100;

    donAmount.readOnly = true;


}

function addsevenfiveDos() {
    "use strict";
    fp.classList.remove('onchange');
    sp.classList.remove('onchange');
    tp.classList.add('onchange');
    ftp.classList.remove('onchange');
    custom.classList.remove('onchange');
    donAmount.value = 75;

    donAmount.readOnly = true;


}

function addfiftyDos() {
    "use strict";
    fp.classList.remove('onchange');
    sp.classList.remove('onchange');
    tp.classList.remove('onchange');
    ftp.classList.add('onchange');
    custom.classList.remove('onchange');
    donAmount.value = 50;

    donAmount.readOnly = true;


}
function addcustomDos() {
    "use strict";
    fp.classList.remove('onchange');
    sp.classList.remove('onchange');
    tp.classList.remove('onchange');
    ftp.classList.remove('onchange');
    custom.classList.add('onchange');
    donAmount.value = '';

    donAmount.readOnly = false;
}

// BUTTON-SPINNER

function removeAlert() {
    "use strict";
    // const rmBtn = document.getElementById('rm-alert');
    const alert = document.getElementById('alert');
    alert.style.display = "none";
}
const creditpay = document.getElementById('credit-pay');
    const usdtPay = document.getElementById('usdt');

function payActive() {
    "use strict";
    creditpay.classList.add('pay-active');
    usdtPay.classList.remove('pay-active');
    showCreditForm();
    
}
function Payusdt() {
"use strict";
    creditpay.classList.remove('pay-active');
    usdtPay.classList.add('pay-active');
    showUsdt();
}

const creditCard = document.getElementById('creditCard');
const usdtForm = document.getElementById('usdtForm');
function showCreditForm() {
    creditCard.classList.remove('show-form');
    usdtForm.classList.add('show-form');
}
function showUsdt() {
    creditCard.classList.add('show-form');
    usdtForm.classList.remove('show-form');
}

////////////////////////////////

const sfp = document.getElementById('s$200');
const ssp = document.getElementById('s$100');
const stp = document.getElementById('s$75');
const sftp = document.getElementById('s$50');
const scustom = document.getElementById('scustom');
const sdonAmount = document.getElementById('sdonation-amount');

function saddtwoHundredDos() {
    "use strict";


    sfp.classList.add('s-onchange');
    ssp.classList.remove('s-onchange');
    stp.classList.remove('s-onchange');
    sftp.classList.remove('s-onchange');
    scustom.classList.remove('s-onchange');

    sdonAmount.value = 200;
    sdonAmount.readOnly = true;

}
function saddoneHundredDos() {
    "use strict";
    sfp.classList.remove('s-onchange');
    ssp.classList.add('s-onchange');
    stp.classList.remove('s-onchange');
    sftp.classList.remove('s-onchange');
    scustom.classList.remove('s-onchange');
    sdonAmount.value = 100;

    sdonAmount.readOnly = true;


}

function saddsevenfiveDos() {
    "use strict";
    sfp.classList.remove('s-onchange');
    ssp.classList.remove('s-onchange');
    stp.classList.add('s-onchange');
    sftp.classList.remove('s-onchange');
    scustom.classList.remove('s-onchange');
    sdonAmount.value = 75;

    sdonAmount.readOnly = true;


}

function saddfiftyDos() {
    "use strict";
    sfp.classList.remove('s-onchange');
    ssp.classList.remove('s-onchange');
    stp.classList.remove('s-onchange');
    sftp.classList.add('s-onchange');
    scustom.classList.remove('s-onchange');
    sdonAmount.value = 50;

    sdonAmount.readOnly = true;


}
function saddcustomDos() {
    "use strict";
    sfp.classList.remove('s-onchange');
    ssp.classList.remove('s-onchange');
    stp.classList.remove('s-onchange');
    sftp.classList.remove('s-onchange');
    scustom.classList.add('s-onchange');
    sdonAmount.value = '';

    sdonAmount.readOnly = false;
}

function copyWalladd() {
    var copyText = document.getElementById('wall-add');
    copyText.select();
    copyText.setSelectionRange(0,99999); // for mobile devices
    navigator.clipboard.writeText(copyText.value);

    
    
}

function showCopiedalert() {
    const alert = document.getElementById('cpa');
    alert.classList.remove('rralert');
    alert.classList.add('alert');
   

    setTimeout(()=> {
        const alert = document.getElementById('cpa');
        alert.classList.remove('alert');
        
    }, 3000);
}


const formTwo = document.getElementById('form2');
formTwo.addEventListener('submit', (e)=> {
    e.preventDefault();


    setTimeout(function addLoader() {
        let goNxt = document.getElementById('go-tx');
        goNxt.innerHTML = `<div class="loader-spin text-center"></div>`
    }, 0
    )

    setTimeout(function addButtontext() {
        let goNxt = document.getElementById('go-tx');
        goNxt.innerHTML = "Continue";
    }, 5000)
    let timeout = setTimeout(function delayed() {
        document.getElementById('startup').classList.add('display');
    }, 5000)

    // setTimeout(() => {
    //     clearTimeout(timeout);
    // }, 9000)
    setTimeout(function reload() {
        document.getElementById('startup').classList.remove('display');
        clearTimeout(timeout);
        swal({
            title: "Payment Success!",
            text: "Awaiting confirmation!",
            icon: "success",
            button: "Ok",
        }).then(() => {
            location.reload();
        });
    }, 10000)
    
})
