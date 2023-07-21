import {test} from "./myFixture";

test("fixture demo", async ({ age, email }) => {

    console.log(age+10, email.toUpperCase());  
    //we can manipulate it

})