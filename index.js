// Code your solution in this file!
function distanceFromHqInBlocks(pickUpLocation){
    let distance;
    if(pickUpLocation >= 42){
        distance = pickUpLocation - 42;
    } else {
        distance = 42 - pickUpLocation;
    }
    return distance;
}

function distanceFromHqInFeet(pickUpLocation){
    let distance = distanceFromHqInBlocks(pickUpLocation);
    return distance*264;
}

function distanceTravelledInFeet(pickUpLocation, dropOffLocation){
    let distance;
    if(dropOffLocation < pickUpLocation){
        distance = pickUpLocation - dropOffLocation;
    } else if(dropOffLocation > pickUpLocation){
        distance = dropOffLocation - pickUpLocation;
    }
    return distance*264;
}

function calculatesFarePrice(pickUpLocation, dropOffLocation){
    let farePrice;
    let distance = distanceTravelledInFeet(pickUpLocation, dropOffLocation);
    if(distance <= 400){
        return farePrice = 0;
    } else if(distance > 400 && distance <=2000){
        return farePrice = (distance - 400)*(2/100);
    } else if(distance > 2000 && distance <=2500){
        return farePrice = 25;
    } else if(distance > 2500){
        return `cannot travel that far`;
    }
}