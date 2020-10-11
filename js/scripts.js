///////////////Business logic

function getSizeCost() {
    var selectedSize = document.getElementById("size").value;
    return parseInt(selectedSize);
}
function getCrustCost() {
    var selectedCrust = document.getElementById("crust").value;
    return parseInt(selectedCrust);
}
function getNumber() {
    var selectedNumber = document.getElementById("numberofpizza").value;
    return parseInt(selectedNumber);
}
function mushrooms() {
    var mushroom = 0;
    var addMushroom = document.getElementById("topping");
    if (addMushroom.checked === true) {
        mushroom = 300;
    }
    return parseInt(mushroom);
}

function calctotalPrice(event) {
    event.preventDefault();
    var totalPrice = (getSizeCost() + getCrustCost() + mushrooms()) * (getNumber());
    
        console.log(totalPrice);

    alert("Your order of " + getNumber() + " pizzas has been processed.Your total amount payable is " + totalPrice +"." )

}