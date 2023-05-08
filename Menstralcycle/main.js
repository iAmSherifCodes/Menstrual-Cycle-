import {MenstrualCalculation} from "./menstrualCalculation.js";

let newCount = new MenstrualCalculation(12,12, 28);
newCount.calculateMenstrualDate();
// console.log(newCount)
let sentence = function (name){
    return `Mrs ${name} started her menstrual cycle on day ${newCount.getStartDate} \nof month ${newCount.getStartMonth} and she will most likely have her next cycle \non day ${newCount.getEndDate} of month ${newCount.getEndMonth}`
}

console.log(sentence("Goodness"))