import {Date} from "./Date.js";

export class MenstrualCalculation {
    monthIncrement = 0
    endDate = this.startDate
    endMonth = this.startMonth


    constructor(startDate,startMonth, cycle) {
        let newDate = new Date(startMonth);
        this.numberOfDaysInMonth = newDate.getDate();
        this.startMonth = startMonth;
        this.startDate = startDate;
        this.cycle = cycle;
    }

    calculateMenstrualDate(){
        this.endDate = this.startDate + this.cycle
        if (this.endDate > this.numberOfDaysInMonth){
            this.endDate = this.endDate - this.numberOfDaysInMonth;
            this.endMonth = this.startMonth + ++this.monthIncrement;
        }else{
            this.endMonth = this.startMonth;
        }
    }
    getEndDate(){
        return this.endDate;
    }
    getEndMonth(){
        return this.endMonth;
    }
    getStartDate(){
        return this.startDate;
    }
    getStartMonth(){
        return this.startMonth;
    }
}

