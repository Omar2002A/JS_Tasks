function priceDrink(favDrink) {

    switch(favDrink.toLowerCase()) {
        case "banana":
            document.write("The price of a Banana drink is 20 dollars.");
            break;

        case "apple":
            document.write("The price of an Apple drink is 15 dollars.");
            break;

        case "orange":
            document.write("The price of an Orange drink is 18 dollars.");
            break;

        case "mango":
            document.write("The price of a Mango drink is 25 dollars.");
            break;

        case "grape":
            document.write("The price of a Grape drink is 22 dollars.");
            break;

        default:
            document.write("Sorry, this drink is not available.");
    }
} 

let drink = prompt("Enter your favorite drink [banana - apple - orange - mango - grape] : ");
priceDrink(drink)