// array er modhe odd number gula k average korar niyom
function oddAverage(array) {
    const array2 = [];
    for (const arraynam of array) {
        if (arraynam % 2 !== 0) {
            array2.push(arraynam);
        }
    }
    let sum = 0;
    for (hasan of array2) {
        sum = sum + hasan;
    }
    const calculation = array2.length;
    console.log(sum, calculation);
    const avg = sum / calculation;
    return avg;

}
const arraynum = [1, 2, 41, 5, 61, 22, 20, 83, 90]
const averageResult = oddAverage(arraynum);
console.log("the average of odd :", averageResult);






// example 2 start
console.log("even number example in array");
function evennumber(evenn) {
    const rakib = [];
    for (const even of evenn) {
        if (even % 2 === 0) {
            rakib.push(even);
        }
    }
    let sum = 0;
    for (calculation2 of rakib) {
        sum = sum + calculation2;
    }
    const net = rakib.length;
    console.log(sum, net);
    const avg2 = sum / net;
    return avg2;
}
const addedTo = [10, 5, 40, 6, 3, 9, 8, 70];
const evenResult = evennumber(addedTo);
console.log(evenResult);
