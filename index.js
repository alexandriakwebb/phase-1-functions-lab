// Code your solution in this file!
function distanceFromHqInBlocks(pickupStreet) {
    if (pickupStreet < 42) {
        return (42 - pickupStreet)
    } else {
        return pickupStreet - 42
    }
}

function distanceFromHqInFeet(pickupStreet) {
    distanceFromHqInBlocks(pickupStreet);
    return distanceFromHqInBlocks(pickupStreet) * 264
}

function distanceTravelledInFeet (start, destination) {
    if (start > destination) {
        return ((start - destination) * 264)
    } else {
        return ((destination - start) * 264)
    }
}

function calculatesFarePrice(start, destination) {
    let distance
    let fare
    if (start > destination) {
        distance = ((start - destination) * 264)
    } else {
        distance = ((destination - start) * 264)
    }
    if (distance <= 400) {
        fare = 0
    } else if (distance  > 400 && distance <= 2000) {
        fare = ((distance - 400) * 0.02)
    } else if (distance > 2000 && distance <= 2500) {
        fare = 25
    } else {
        fare = 'cannot travel that far'
    }
    return fare;
}