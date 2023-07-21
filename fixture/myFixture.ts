import { test as myTest } from "@playwright/test";

type koushik = {
    age: number,
    email: string
}


const myFixtureTest = myTest.extend<koushik>({
    age: 27,
    email: "koushik35@gmail.com"
})

/* if we use js; 

const myFixtureTest = myTest.extend<
{
    age: number,
    email: string
}>({
    age: 27,
    email: "koushik35@gmail.com"
})  */

export const test = myFixtureTest;
//you can write 
//export const it = ...             as well