export class Date {
    thirtyOneMonths = [1,3,5,7,8,10,12];
    thirtyMonths = [4,6,9,11];
    numberOfDaysInMonths;
    month;

    constructor(month) {
        this.month = month;
        this.setDate();
        this.getDate();
    }
    setDate(){
        for (let i of this.thirtyOneMonths) {
            if (this.month === i) {
                this.numberOfDaysInMonths = 31;
            }
        }
        for (let thirtyMonthsKey of this.thirtyMonths){
        if (thirtyMonthsKey === this.month){
            this.numberOfDaysInMonths = 30;
        }
        if (this.month === 2){
            this.numberOfDaysInMonths = 28;
        }}
    }
    getDate(){
        return this.numberOfDaysInMonths;
    }
}

