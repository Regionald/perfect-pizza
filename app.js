//*HTML Elements for smalll pizza/////////////
const smallButbtn = document.querySelector(".sButbtn");
const shoppingCart = document.querySelector(".ref1");
const smallTotalelem = document.querySelector(".smallTotal");//total cost of small pizza
const smallAddbtn = document.querySelector(".smallAddbtn");
const smallSubbtn = document.querySelector(".smallSubbtn");
const totalElem = document.querySelector(".total"); //total everything
const smallQty = document.querySelector(".smallQty");
const paymBtn = document.querySelector(".paymBtn");
const display = document.querySelector(".message");
const cash = document.querySelector(".cash");
const amountLabel = document.querySelector(".labeler");

//////////////////////////medium elements///////////////////////////////

const mediumButbtn = document.querySelector(".mButbtn");
const mediumTotalelem = document.querySelector(".mediumTotal");//total cost of small pizza
const mediumAddbtn = document.querySelector(".mediumAddbtn");
const mediumSubbtn = document.querySelector(".mediumSubbtn");
const mediumQty = document.querySelector(".mediumQty");

////////////////////////////large elements//////////////////////////////////
const largeButbtn = document.querySelector(".lButbtn");
const largeTotalelem = document.querySelector(".largeTotal");//total cost of small pizza
const largeAddbtn = document.querySelector(".largeAddbtn");
const largeSubbtn = document.querySelector(".largeSubbtn");
const largeQty = document.querySelector(".largeQty");

var totalAmount = 0;
const carter = cart();

function smallcostadd() {

    shoppingCart.classList.remove("hidden");
    carter.qtyIncrement('small');
    smallQty.innerHTML = carter.smallValue();
    totalAmount = (carter.totalPrice()).toFixed(2);

    smallTotalelem.innerHTML = "R" + (carter.smallValue() * 22.99).toFixed(2);
    totalElem.innerHTML = "R" + totalAmount;

};
function smalladd() {
    carter.unhide();
    carter.qtyIncrement('small');
    smallQty.innerHTML = carter.smallValue();
    totalAmount = (carter.totalPrice()).toFixed(2);

    smallTotalelem.innerHTML = "R" + (carter.smallValue() * 22.99).toFixed(2);
    totalElem.innerHTML = "R" + totalAmount;

};
function smallsub() {

    carter.qtydecrement('small');
    smallQty.innerHTML = carter.smallValue();
    totalAmount = (carter.totalPrice()).toFixed(2);

    if (totalAmount == 0) {
        carter.hide();
    }

    smallTotalelem.innerHTML = "R" + (carter.smallValue() * 22.99).toFixed(2);
    totalElem.innerHTML = "R" + totalAmount;

};
smallAddbtn.addEventListener('click', smalladd);
smallSubbtn.addEventListener('click', smallsub);
smallButbtn.addEventListener('click', smallcostadd);


function mediumcostadd() {

    shoppingCart.classList.remove("hidden");
    carter.qtyIncrement('medium');
    mediumQty.innerHTML = carter.mediumValue();
    totalAmount = (carter.totalPrice()).toFixed(2);

    mediumTotalelem.innerHTML = "R" + carter.mediumValue() * 60.50;
    totalElem.innerHTML = "R" + totalAmount;

}
function mediumsub() {

    carter.qtydecrement('medium');
    mediumQty.innerHTML = carter.mediumValue();
    totalAmount = (carter.totalPrice()).toFixed(2);
    if (totalAmount == 0) {
        carter.hide();
    }

    mediumTotalelem.innerHTML = "R" + (carter.mediumValue() * 60.50).toFixed(2);
    totalElem.innerHTML = "R" + totalAmount;
};

function mediumadd() {

    carter.unhide();
    carter.qtyIncrement('medium');
    mediumQty.innerHTML = carter.mediumValue();
    totalAmount = (carter.totalPrice()).toFixed(2);

    mediumTotalelem.innerHTML = (carter.mediumValue() * 60.50).toFixed(2);
    totalElem.innerHTML = totalAmount;

};
mediumAddbtn.addEventListener('click', mediumadd);
mediumSubbtn.addEventListener('click', mediumsub);
mediumButbtn.addEventListener('click', mediumcostadd);

//////////////////////////large pizaa/////////////////////////////
function largecostadd() {
    shoppingCart.classList.remove("hidden");
    carter.qtyIncrement('large');
    largeQty.innerHTML = carter.largeValue();
    totalAmount = (carter.totalPrice()).toFixed(2);

    largeTotalelem.innerHTML = "R" + carter.largeValue() * 120.75;
    totalElem.innerHTML = "R" + totalAmount;

}
function largesub() {

    carter.qtydecrement('large');
    largeQty.innerHTML = carter.largeValue();
    totalAmount = (carter.totalPrice()).toFixed(2);
    if (totalAmount == 0) {
        carter.hide();
    }

    largeTotalelem.innerHTML = "R" + (carter.largeValue() * 120).toFixed(2);
    totalElem.innerHTML = "R" + totalAmount;
};

function largeadd() {

    carter.unhide();
    carter.qtyIncrement('large');
    largeQty.innerHTML = carter.largeValue();
    totalAmount = (carter.totalPrice()).toFixed(2);

    largeTotalelem.innerHTML = "R" + (carter.largeValue() * 120).toFixed(2);
    totalElem.innerHTML = totalAmount;
};
largeAddbtn.addEventListener('click', largeadd);
largeButbtn.addEventListener('click', largecostadd);
largeSubbtn.addEventListener('click', largesub);

function payment() {

    const number = parseFloat(cash.value);
    display.classList.remove("hidden");

    if (number == totalAmount) {

        if (number == totalAmount) {
            display.classList.add("hidden");
            var time = 3000;

            setTimeout(() => {
                display.classList.remove("hidden");
                display.innerHTML = 'Enjoy" your pizzas';
                setTimeout(() => { location.reload(); }, 4000);
            }, time);
        }
        totalAmount = 0;
        shoppingCart.classList.remove("hidden");
        smallQty.innerHTML = 0;
        smallTotalelem.innerHTML = "R0.00";
        mediumQty.innerHTML = 0;
        mediumTotalelem.innerHTML = "R0.00";
        largeQty.innerHTML = 0;
        largeTotalelem.innerHTML = "R0.00";
        totalElem.innerHTML = "R" + totalAmount;
    }
    else if (number < totalAmount) {
        display.classList.add("hidden");
        setTimeout(() => {
            display.classList.remove("hidden");
            display.innerHTML = "Sorry - that is not enough money!";
            setTimeout(() => { display.classList.add("hidden"); }, 4000);
        }, 3000);
    }
    else {
        display.classList.add("hidden");
        setTimeout(() => {
            display.classList.remove("hidden");
            display.innerHTML = `please do not over pay`;
            setTimeout(() => { display.classList.add("hidden"); }, 4000);
        }, 3000);
    }
}
paymBtn.addEventListener('click', payment);







