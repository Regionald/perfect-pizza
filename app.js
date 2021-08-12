//*HTML Elements for smalll pizza/////////////
const smallButbtn = document.querySelector(".sButbtn");
const shoppingCart = document.querySelector(".ref1");
const smallTotalelem = document.querySelector(".smallTotal");//total cost of small pizza
const smallAddbtn = document.querySelector(".smallAddbtn");
const smallSubbtn = document.querySelector(".smallSubbtn");
const totalElem = document.querySelector(".total"); //total everything
const smallQty = document.querySelector(".smallQty");

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

var smalltotalCost = 0;
var mediumtotalCost = 0;
var largetotalCost = 0;
var totalAmount = 0;


function smallcostadd() {
    smalltotalCost = 22.99;
    totalAmount = 22.99;
    shoppingCart.classList.remove("hidden");

    var number = smalltotalCost.toFixed(2);
    smallTotalelem.innerHTML = "R" + number;

    smallQty.innerHTML = smalltotalCost / 22.99;
    totalElem.innerHTML = "R" + totalAmount;

}
function smalladd() {
    smalltotalCost += 22.99;
    var number = smalltotalCost.toFixed(2);
    smallTotalelem.innerHTML = "R" + number;

    totalAmount += 22.99;
    var tnumber = totalAmount.toFixed(2);
    totalElem.innerHTML = "R" + tnumber;

    var qtynumber = (smalltotalCost / 22.99).toFixed(0);
    smallQty.innerHTML = qtynumber;

};
smallAddbtn.addEventListener('click', smalladd);
function smallsub() {
    smalltotalCost -= 22.99;
    if (smalltotalCost<0){
        smalltotalCost+=22.99;
        return;
    }
    var number = smalltotalCost.toFixed(2);
    smallTotalelem.innerHTML = "R" + number;

     totalAmount-=22.99;
    var tnumber = totalAmount.toFixed(2);
    totalElem.innerHTML = "R" + tnumber;

    var qtynumber = (smalltotalCost / 22.99).toFixed(0);
    smallQty.innerHTML = qtynumber;
    totalAmount =qtynumber*22.99;
};
smallSubbtn.addEventListener('click', smallsub);

smallButbtn.addEventListener('click', smallcostadd);

///////////////////////////////////medium pizzaaaa//////////////////////////////////////////

function mediumcostadd() {
    mediumtotalCost = 60.50;
    totalAmount = 60.50;
    shoppingCart.classList.remove("hidden");

    var number = mediumtotalCost.toFixed(2);
    mediumTotalelem.innerHTML = "R" + number;

    mediumQty.innerHTML = mediumtotalCost / 60.50;
    totalElem.innerHTML = "R" + totalAmount;

}
function mediumsub() {
    mediumtotalCost -= 60.50;
    if (mediumtotalCost<0){
        mediumtotalCost+=60.50;
        return;
    }
    var number = mediumtotalCost.toFixed(2);
    mediumTotalelem.innerHTML = "R" + number;

    totalAmount -= 60.50;
    var tnumber = totalAmount.toFixed(2);
    totalElem.innerHTML = "R" + tnumber;

    var qtynumber = (mediumtotalCost / 60.50).toFixed(0);
    mediumQty.innerHTML = qtynumber;
};
mediumSubbtn.addEventListener('click', mediumsub);
function mediumadd() {
    mediumtotalCost += 60.50;
    var number = mediumtotalCost.toFixed(2);
    mediumTotalelem.innerHTML = "R" + number;

    totalAmount += 60.50;
    var tnumber = totalAmount.toFixed(2);
    totalElem.innerHTML = "R" + tnumber;

    var qtynumber = (mediumtotalCost / 60.50).toFixed(0);
    mediumQty.innerHTML = qtynumber;

};
mediumAddbtn.addEventListener('click', mediumadd);

mediumButbtn.addEventListener('click', mediumcostadd);

//////////////////////////large pizaa/////////////////////////////
function largecostadd() {
    largetotalCost = 120.75;
    totalAmount = 120.75;
    shoppingCart.classList.remove("hidden");

    var number = largetotalCost.toFixed(2);
    largeTotalelem.innerHTML = "R" + number;

    largeQty.innerHTML = largetotalCost / 120.75;
    totalElem.innerHTML = "R" + totalAmount;

}
function largesub() {
    largetotalCost -= 120.75;
    if (largetotalCost<0){
        largetotalCost+=120.75;
        return;
    }
    var number = largetotalCost.toFixed(2);
    largeTotalelem.innerHTML = "R" + number;

    totalAmount -= 120.75;
    var tnumber = totalAmount.toFixed(2);
    totalElem.innerHTML = "R" + tnumber;

    var qtynumber = (largetotalCost / 120.75).toFixed(0);
    largeQty.innerHTML = qtynumber;
};
largeSubbtn.addEventListener('click', largesub);

function largeadd() {
    largetotalCost += 120.75;
    var number = largetotalCost.toFixed(2);
    largeTotalelem.innerHTML = "R" + number;

    totalAmount += 120.75;
    var tnumber = totalAmount.toFixed(2);
    totalElem.innerHTML = "R" + tnumber;

    var qtynumber = (largetotalCost / 120.75).toFixed(0);
    largeQty.innerHTML = qtynumber;

};

largeAddbtn.addEventListener('click', largeadd);
largeButbtn.addEventListener('click', largecostadd);




