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
    var addMushroom = document.getElementById("mush",);
    if (addMushroom.checked === true) {
        mushroom = 300;
    }
    return parseInt(mushroom);
}

function calctotalPrice(e) {
    event.preventDefault();
    var totalPrice = (getSizeCost() + getCrustCost() + mushrooms()) * (getNumber());
    
        console.log(totalPrice);

    alert("Your order of " + getNumber() + " pizzas has been processed.Your total amount payable is " + totalPrice +"." )

}

//////////////////User Interface
$(document).ready(function () {
    $("#delivery").submit(function () {

        var name = $("input#name").val();
        var number = $("input#number").val();
        var location = $("input#location").val();

        alert("Hello " + name + ". Thank you for chosing LaNoshery. Your order has been successfully received and will be delivered to " +  location + ".The delivery will cost 1000 Rwf. We will call you shortly on " + number);

    });
    
});