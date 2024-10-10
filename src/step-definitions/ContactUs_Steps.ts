import { Given, When } from "@cucumber/cucumber";
import { Browser, chromium, Page } from "playwright";

let page: Page;

When('I type a first name', async () => {
    // await page.pause();
    await page.getByPlaceholder('First Name').fill("Hong");
  
  });
  
  When('I type a last name', async () => {
  
  });
  
  When('I enter an email address', async () => {
  
  });
  
  When('I type a comment', async () => {
  
  });
  
  When('I click on the submit button', async () => {
  
  });