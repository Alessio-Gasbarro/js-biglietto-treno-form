//ALL VARIABLES LIST
const form = document.querySelector("form");
const button = document.getElementById("button");
const price = 0.21;

form.addEventListener("submit", function(event) {  
    event.preventDefault();   
    //AGE&DISTANCE-PRICE CALCULATOR
    const distance = document.getElementById("distance").value;
    const age = document.getElementById("age").value;
    const total = (distance * price).toFixed(2);
    let finalPrice;
    if (age < 18) {
        finalPrice = (total * 0.8).toFixed(2);
    } else if (age > 65) {
        finalPrice = (total * 0.6).toFixed(2);
    } else {
        finalPrice = total;
    }
    alert("L'importo da pagare è di: " + finalPrice + "€");
});