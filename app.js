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



var smalltotalCost = 0;
var totalAmount = smalltotalCost;


function smallcostadd() {
    smalltotalCost = 22.99;
    totalAmount = 22.99;
    shoppingCart.classList.remove("hidden");


    function smallsub() {
        smalltotalCost -= 22.99;
        var number = smalltotalCost.toFixed(2);
        smallTotalelem.innerHTML = number;

        totalAmount -= 22.99;
        var tnumber = totalAmount.toFixed(2);
        totalElem.innerHTML = tnumber;

        var qtynumber = (smalltotalCost / 22.99).toFixed(0);
        smallQty.innerHTML = qtynumber;
    };
    smallSubbtn.addEventListener('click', smallsub);



    function smalladd() {
        smalltotalCost += 22.99;
        var number = smalltotalCost.toFixed(2);
        smallTotalelem.innerHTML = number;

        totalAmount += 22.99;
        var tnumber = totalAmount.toFixed(2);
        totalElem.innerHTML = tnumber;

        var qtynumber = (smalltotalCost / 22.99).toFixed(0);
        smallQty.innerHTML = qtynumber;

    };
    smallAddbtn.addEventListener('click', smalladd);
    var number = smalltotalCost.toFixed(2);
    smallTotalelem.innerHTML = number;
    smallQty.innerHTML = smalltotalCost / 22.99;
    totalElem.innerHTML = totalAmount;

}

smallButbtn.addEventListener('click', smallcostadd);

///////////////////////////////////medium pizzaaaa//////////////////////////////////////////

function mediumcostadd() {
    mediumtotalCost = 60.50;
    totalAmount = 60.50;
    shoppingCart.classList.remove("hidden");


    function mediumsub() {
        mediumtotalCost -= 60.50;
        var number = mediumtotalCost.toFixed(2);
        mediumTotalelem.innerHTML = number;

        totalAmount -= 60.50;
        var tnumber = totalAmount.toFixed(2);
        totalElem.innerHTML = tnumber;

        var qtynumber = (mediumtotalCost / 60.50).toFixed(0);
        mediumQty.innerHTML = qtynumber;
    };
    mediumSubbtn.addEventListener('click', mediumsub);



    function mediumadd() {
        mediumtotalCost += 60.50;
        var number = mediumtotalCost.toFixed(2);
        mediumTotalelem.innerHTML = number;

        totalAmount += 60.50;
        var tnumber = totalAmount.toFixed(2);
        totalElem.innerHTML = tnumber;

        var qtynumber = (mediumtotalCost / 60.50).toFixed(0);
        mediumQty.innerHTML = qtynumber;

    };
    mediumAddbtn.addEventListener('click', mediumadd);
    var number = mediumtotalCost.toFixed(2);
    mediumTotalelem.innerHTML = number;

    mediumQty.innerHTML = mediumtotalCost / 60.50;
    totalElem.innerHTML = totalAmount;

}

mediumButbtn.addEventListener('click', mediumcostadd);




