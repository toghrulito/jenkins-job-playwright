import {test} from '@playwright/test';

test.describe("", () => {
    test.beforeAll(() => {
        console.log("Before all tests");
     });

     test.afterAll(() => {
        console.log("After all tests");
     });

    test.beforeEach(() => {
        console.log("Before each test");
     });

     test.afterEach(() => {
        console.log("After each test");
     });

test("Google test 1", async () => {
    console.log("Google test 1");
});

test("Google test 2", async () => {

    console.log("Google test 2");
});

test("Google test 3", async () => {

    console.log("Google test 3");
});




});