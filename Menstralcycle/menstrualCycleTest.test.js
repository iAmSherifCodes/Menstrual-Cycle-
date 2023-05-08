// import {MenstrualCalculation} from "./menstrualCalculation.js";
//
//
// test("assert start date is 5 when set to 5", ()=> {
//     const womanOne = new MenstrualCalculation(6, 10, 28);
//     womanOne.calculateMenstrualDate();
//     expect(womanOne.getStartDate()).toBe(6);
// })
//
// test("assert start month is 10 when set to 10") () => {
//     const womanOne = new MenstrualCalculation(6, 10, 28);
//     womanOne.calculateMenstrualDate();
//     expect(womanOne.getStartMonth()).toBe(10);
// }
//
// test("assert end date is 30 when start date is 2 and cycle is 28", ()=> {
//     const womanOne = new MenstrualCalculation(2, 10, 28);
//     womanOne.calculateMenstrualDate();
//     expect(womanOne.getEndDate()).toBe(30);
// })
//
// test("assert end month is 10 when number of days in month is still within range and when cycle is 28", ()=> {
//     const womanOne = new MenstrualCalculation(2, 10, 28);
//     womanOne.calculateMenstrualDate();
//     expect(womanOne.getEndMonth()).toBe(10);
// })
//
// test("assert end month is 11 when start month is a thirty-one days month, and cycle is 28", ()=> {
//     const womanOne = new MenstrualCalculation(20, 10, 28);
//     womanOne.calculateMenstrualDate();
//     expect(womanOne.getEndMonth()).toBe(11);
// })
//
// test("assert end month is 25 when start date is 5, months is a thirty days and cycle is 28", ()=> {
//     const womanOne = new MenstrualCalculation(2, 4, 28);
//     womanOne.calculateMenstrualDate();
//     expect(womanOne.getEndDate()).toBe(30);
// })
//
//
// test("assert end month is 11 when start month is a thirty days month, and cycle is 28", ()=> {
//     const womanOne = new MenstrualCalculation(2, 9, 28);
//     womanOne.calculateMenstrualDate();
//     expect(womanOne.getEndMonth()).toBe(9);
// })
//
// test("assert end month is 17 when start date is 20, months is a thirty-one days and cycle is 28", ()=> {
//     const womanOne = new MenstrualCalculation(20, 10, 28);
//     womanOne.calculateMenstrualDate();
//     expect(womanOne.getEndDate()).toBe(17);
// })
//
// test("assert end month is 2 when start month is 2 (February), start date is 1 and cycle is 28", ()=> {
//     const womanOne = new MenstrualCalculation(1, 2, 27);
//     womanOne.calculateMenstrualDate();
//     expect(womanOne.getEndMonth()).toBe(2);
// })
//
//
//
//
