import { test } from "@playwright/test";

test.describe("Practice.cydeo", async ()=> {

    test.beforeEach("",async ({page})=>{
        await page.goto("https://practice.cydeo.com/");
        await page.waitForTimeout(5000);
    });

    test.afterEach("",async ({page})=>{
        await page.waitForTimeout(5000);
    });

    test("title of the page", async ({ page }) => {
        console.log("title of the page");
    });

    test("url of the page", async ({ page }) => {
        console.log("url of the page");
    });
});

