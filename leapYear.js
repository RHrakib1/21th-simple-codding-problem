// simple logic for lipiyear ber korar jonno
// jodi 4 diye kono year vag jai tahole seta lipiyear
function lipiyer(year) {
    if (year % 4 === 0) {
        return true;
    }
    else {
        return false;
    }
}
const result = lipiyer(2024);
console.log(result);


/** 
 * 1.----> j year gulo 100 diye vag jai na abong 4 diye vag jai tahole segula lipyear 
 * 2.-----> j year 400 diye vag jabe take leapyear bole
 * 
 * 
 * */
function lipiyear2(year2) {
    if (year2 % 100 !== 0 && year2 % 4 === 0) {
        return true;
    }
    else if ( year2 % 400 === 0) {
        return true;
    }
    else {
        return false;
    }
}
const isLeap = lipiyear2(2100);
const isLeap1 = lipiyear2(2400);
const isLeap2 = lipiyear2(1900);
const isLeap3 = lipiyear2(2052);
console.log(isLeap, isLeap1, isLeap2, isLeap3);
