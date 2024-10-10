import { Given, When } from "@cucumber/cucumber";
import { Browser, chromium, Page } from "playwright";

let browser: Browser;
let context: any;
let page: Page;

const url = "https://www.webdriveruniversity.com/";

Given('I navigate to Webdriveruniversity homepage', async () => {
  //Setup browser instance:
  browser = await chromium.launch({ headless: false });
  context = await browser.newContext();
  page = await context.newPage();

  //Access URL
  await page.goto(url);

});

When('I switch to the new browser tab', async () => {
  page = await context.waitForEvent("page"); // reintialise the page > new tab > page
  await page.bringToFront();

})

When('I click on the contact us button', async () => {

  // await page.pause();
  const contactUs_Button = await page.getByRole('link', { name: 'CONTACT US Contact Us Form' });
  await contactUs_Button.click();
});