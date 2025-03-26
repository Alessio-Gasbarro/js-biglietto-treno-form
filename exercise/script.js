//LISTA VARIABILI
var name, km, age, rate, basePrice, discount1, discount2, finalPrice, offerName;

//CLICK FUNCTIONS
var generateButton = document.getElementById("generate");

generateButton.addEventListener("click", function() {

    //REQUIRED VALUES
    name = document.getElementById('name').value;
    km = document.getElementById('km').value;
    age = document.getElementById('age').value;

    //PRICE*KM
    rate = 0.21;

    //PRICE*NO-DISCOUNT
    basePrice = km * rate;

    //COUPON UNDER 18
    discount1 = basePrice - (basePrice * 0.2);
    //COUPON OVER 65
    discount2 = basePrice - (basePrice * 0.4);

    offerName = 'Tariffa Standard';

    //DISCOUNT CALCULATOR
    if (age == 'under18') {
        finalPrice = discount1;
        offerName = 'Sconto Junior';
    } else if (age == 'over65') {
        finalPrice = discount2;
        offerName = 'Sconto Senior';
    } else {
        finalPrice = basePrice;
    }

    //RANDOM VAR CALC
    var carriageNumber = Math.floor((Math.random() * 10) + 1);
    var min = 90000;
    var max = 100000;
    var discountCode = Math.floor(Math.random() * (max - min) ) + min;

    //PRINT-TO-TICKET
    document.getElementById('passenger_name').innerHTML = name;
    document.getElementById('discount_name').innerHTML = offerName;
    document.getElementById('carriage').innerHTML = carriageNumber;
    document.getElementById('discount_code').innerHTML = discountCode;
    document.getElementById('final_price').innerHTML = finalPrice.toFixed(2) + ' €';
    //SHOW-TO-TICKET FUNCTION
    document.getElementById('detail_box').className = 'show';
});

//ERASE-TO-TICKET FUNCTION
var eraseButton = document.getElementById("erase");

eraseButton.addEventListener("click", function() {
    document.getElementById('name').value = '';
    document.getElementById('km').value = '';
    document.getElementById('age').value = '';
    document.getElementById('passenger_name').innerHTML = '';
    document.getElementById('discount_name').innerHTML = '';
    document.getElementById('carriage').innerHTML = '';
    document.getElementById('discount_code').innerHTML = '';
    document.getElementById('final_price').innerHTML = '';
    //HIDDEN-TO-TICKET FUNCTION
    document.getElementById('detail_box').className = 'hidden';
});

