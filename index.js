function distanceFromHqInBlocks(street) {
  return Math.abs(street - 42);
};

function distanceFromHqInFeet(street) {
  return distanceFromHqInBlocks(street)*264;
};

function distanceTravelledInFeet(start, end) {
  return Math.abs((end - start)*264);
};

function calculatesFarePrice(start, end) {
    let dist = distanceTravelledInFeet(start, end);
    if (dist <= 2500) {
        if (dist <= 2000) {
            if (dist <=400) {
                return 0;
            }
            return (dist - 400)*0.02;
        }
        return 25;
    } else {
        return "cannot travel that far"
    };
};