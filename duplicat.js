// array er modhe kono number ba string double thakle seta bad diye new array er vitor add korar niyom
function nonDuplicat(arrayNumber) {
    const hasan = [];
    for (const rakib of arrayNumber) {
        if (hasan.includes(rakib) === false) {
            hasan.push(rakib);
        }
    }
    return hasan;
}
const numberOfArray = [10, 20, 10, 10, 50, 40, 60, 40, 60, 50, 81]
const duplicatResult = nonDuplicat(numberOfArray);
console.log(duplicatResult);


// string diye 
console.log("array nonduplicate of string");
function stringDuplicat(str) {
    const rahman = [];
    for (const tarin of str) {
        if (rahman.includes(tarin) === false) {
            rahman.push(tarin);
        }
    }
    return rahman;
}
const stringName = ['rakib', 'tarin', 'torabi', 'tarin', 'rakib', 'hasan', 'tarin', 'rahman'];
const strResult = stringDuplicat(stringName);
console.log(strResult);