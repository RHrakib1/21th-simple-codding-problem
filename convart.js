// 12inch to 1ft
function inchToFeet(inch) {
    const feet = inch / 12;
    return feet;
}
const inchnumber = (75);
const netresult = inchToFeet(inchnumber);
console.log(netresult);



// 12inch to 1feet mane 75 inch k 6.25 na dekhiye 6.3 akdom int numb dekhabe
function inchToFeet2(inch2) {
    const feet2 = inch2 / 12;
    const resultTo = parseInt(feet2);
    const remendnum = inch2 % 12;
    const result22 = resultTo + ' feet ' + remendnum + ' inch'
    return result22;
}
const numberesult = inchToFeet2(75);
console.log(numberesult);



// mile to kilomeater
console.log("examople to the mil to km");
function kiloToMile(numberMile) {
    const stor = numberMile * 1.609344;
    return stor;
}
const finalresult = kiloToMile(5);
console.log(finalresult);



console.log('metaer to inch');
function meaterToinch(meater) {
    const someNum = meater * 39.37007874;
    return someNum;

}
const inch = meaterToinch(10);
console.log(inch)