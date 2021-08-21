function cart() {
    var smallqty = 0;
    var mediumqty = 0;
    var largeqty = 0;
    function qtyIncrement(choice) {
        if (choice == 'small') {
            smallqty++;
        }
        else if (choice == 'medium') {
            mediumqty++;
        }
        else if (choice == 'large') {
            largeqty++;
        }
    }
    function qtydecrement(choice) {
        if (choice == 'small' && smallValue() > 0) {
            smallqty--;
        }
        else if (choice == 'medium' && mediumValue() > 0) {
            mediumqty--;
        }
        else if (choice == 'large' && largeValue() > 0) {
            largeqty--;
        }
    }
    function hide() {
        display.classList.add("hidden");
        cash.classList.add("hidden");
        amountLabel.classList.add("hidden");
        paymBtn.classList.add("hidden");
    }
    function unhide() {
        cash.classList.remove("hidden");
        amountLabel.classList.remove("hidden");
        paymBtn.classList.remove("hidden");
    }
    function smallValue() {
        return smallqty;
    }
    function mediumValue() {
        return mediumqty;
    }
    function largeValue() {
        return largeqty;
    }
    function totalPrice(){
      var num=smallValue() * 22.99+mediumValue() * 60.50 + largeValue() * 120.75;
      return num;

    }

    return {
        qtyIncrement,
        smallValue,
        mediumValue,
        largeValue,
        qtydecrement,
        hide,
        unhide,
        totalPrice
    }
}



