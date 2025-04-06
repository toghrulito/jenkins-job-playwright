import { test } from "@playwright/test";

test("Simple google test", async ({ page }) => {

    await page.goto("https://www.google.com/");
    await page.waitForTimeout(3000);
    // click button for acceping the cookes //button[@id='L2AGLb'].
      await page.locator("#L2AGLb").click();
    await page.waitForTimeout(3000);
     
    let seachBoxEl = page.locator("//textarea[@class='gLFyf']");
    await  seachBoxEl.type("playwright");
    await page.waitForTimeout(5000);
    // click enter key to search
    await page.keyboard.press("Enter");
    await page.waitForTimeout(3000);

});





/*
<textarea class="gLFyf" aria-controls="Alh6id" aria-owns="Alh6id" autofocus="" 
title="Search" value="" aria-label="Search" placeholder="" aria-autocomplete="both" 
aria-expanded="false" aria-haspopup="false" autocapitalize="off" autocomplete="off" 
autocorrect="off" id="APjFqb" maxlength="2048" name="q" role="combobox" rows="1" 
spellcheck="false" jsaction="paste:puy29d" 
data-ved="0ahUKEwjbnIOX6J6MAxVITaQEHQdWGh4Q39UDCA4"></textarea>
*/

//textarea[@class='gLFyf']
