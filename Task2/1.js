let month = Number(prompt("Enter your birth month(1-12) : "));

switch (month) {
    case 1:
        document.write("Your birth month is January.");
        break;
    case 2:
        document.write("Your birth month is February.");
        break;
    case 3:
        document.write("Your birth month is March.");
        break;
    case 4:
        document.write("Your birth month is April.");
        break;
    case 5:
        document.write("Your birth month is May.");
        break;
    case 6:
        document.write("Your birth month is June.");
        break;
    case 7:
        document.write("Your birth month is July.");
        break;
    case 8:
        document.write("Your birth month is August.");
        break;
    case 9:
        document.write("Your birth month is September.");
        break;
    case 10:
        document.write("Your birth month is October.");
        break;
    case 11:
        document.write("Your birth month is November.");
        break;
    case 12:
        document.write("Your birth month is December.");
        break;
    default:
        document.write("Invalid month! Please enter a number between 1 and 12.");
}