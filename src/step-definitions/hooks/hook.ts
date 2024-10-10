import { After, AfterAll, Before, BeforeAll } from "@cucumber/cucumber";
import { Browser, chromium } from "@playwright/test";
import { pageFixture } from "./browserContextFixture";
import { accessSync } from "fs";

let browser: Browser;

BeforeAll(async function () {
    console.log("\nBefore");
})

AfterAll(async function () {
    console.log("\nAfter");
})

Before(async function () {
    browser = await chromium.launch({ headless: false });
    pageFixture.context = await browser.newContext();
    pageFixture.page = await pageFixture.context.newPage();
})

After(async function () {
    await pageFixture.page.close();
    await browser.close();
})