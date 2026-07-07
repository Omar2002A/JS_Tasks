function canIGetADrivingLicense(age) {
    let agree = age - 20;
    if(agree >= 0) {
        return document.write("Yes, you can!<br>");
    }
    else{
        return document.write(`please come back after ${-1 * agree} years to get one<br>`);
    }
}

canIGetADrivingLicense(21);
canIGetADrivingLicense(17);
canIGetADrivingLicense(20);