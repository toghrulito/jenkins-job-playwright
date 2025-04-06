import { test } from "@playwright/test";
const robot = require("robotjs"); // To detect screen resolution
const { chromium } = require("playwright");

test("Getting title of the page", async ({ page }) => {
  // navigate to a page https://practice.cydeo.com/
  await page.goto("https://practice.cydeo.com/");
  let actualTitle = await page.title();
  console.log("Actual Title:", actualTitle);
  // wait for 5 seconds
  await page.waitForTimeout(5000);
});

test("Getting the current url of the page", async ({ page }) => {
  // navigate to a page https://practice.cydeo.com/
  await page.goto("https://practice.cydeo.com/");
  let actualUrl = page.url();
  console.log("Actual URL:", actualUrl);
  await page.setViewportSize({ width: 2880, height: 1864 });
  await page.waitForTimeout(5000);
});

test("Set up device size browser", async ({ page }) => {
  // Get screen size using robotjs
  const screenSize = robot.getScreenSize();
  const width = screenSize.width;
  const height = screenSize.height;

  console.log(`Detected screen size: ${width}x${height}`);

  await page.goto("https://practice.cydeo.com/");
  await page.setViewportSize({ width, height });
  //set up time out 5 SECONDS.
  await page.waitForTimeout(5000);
});

