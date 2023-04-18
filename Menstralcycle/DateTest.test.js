import {Date} from "./Date.js";

test("getting date in month of thirty", ()=> {
    const dateTest = new Date(9);
    dateTest.setDate();
    expect(dateTest.getDate()).toBe(30);
})

test("getting date in february", ()=> {
    const dateTest = new Date(2);
    dateTest.setDate();
    expect(dateTest.getDate()).toBe(28);
})

test("getting date in thirty-first months", ()=> {
    const dateTest = new Date(12);
    dateTest.setDate();
    expect(dateTest.getDate()).toBe(31);
})