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
            if (this.endMonth <= 12) this.endMonth = this.startMonth + ++this.monthIncrement;
            else this.endMonth = this.startMonth - 12 + ++this.monthIncrement;
        }else{
            this.endMonth = this.startMonth;
        }
    }
    get getEndDate(){
        return this.endDate;
    }
    get getEndMonth(){
        return this.endMonth;
    }
    get getStartDate(){
        return this.startDate;
    }
    get getStartMonth(){
        return this.startMonth;
    }
}

