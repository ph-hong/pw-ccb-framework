import { Given, When, Then } from "@cucumber/cucumber";
import { pageFixture } from "./hooks/browserContextFixture";
import { expect, Expect } from "@playwright/test";
import { fa, faker } from "@faker-js/faker";

When('I type a first name', async () => {
    await pageFixture.page.getByPlaceholder('First Name').fill("Hong");
});

When('I type a last name', async () => {
    await pageFixture.page.getByPlaceholder('Last Name').fill("Phan")
});

When('I enter an email address', async () => {
    await pageFixture.page.getByPlaceholder('Address').fill("hphan123@otp.com");
});

When('I type a comment', async () => {
    await pageFixture.page.getByPlaceholder('Comment').fill("Commnent something");
});

When('I click on the submit button', async () => {
    //Wait for the button to load
    await pageFixture.page.waitForSelector('input[value="SUBMIT"]');

    //Once loaded, click on the button
    await pageFixture.page.click('input[value="SUBMIT"]');
});

Then('I should be presented with a successful contact us submission message', async () => {
    await pageFixture.page.waitForSelector('#contact_reply h1', { timeout: 60000 })

    //Get the text from the h1 element
    const text = await pageFixture.page.innerText('#contact_reply h1')

    //Use Playwright's expect function to assert the text of the h1 element
    expect(text).toBe("Thank You for your Message!")
});

Then('I should be presented with an unsuccessful contact us message', async () => {
    await pageFixture.page.waitForSelector("body");

    const bodyElement = await pageFixture.page.locator("body");

    const bodyText = await bodyElement.textContent();

    await expect(bodyText).toMatch(/Error: (all fields are required|Invalid email address)/);
});

When('I type a specific first name {string}', async (firstName: string) => {
    await pageFixture.page.getByPlaceholder('First Name').fill(firstName);
});

When('I type a specific last name {string}', async (lastName: string) => {
    await pageFixture.page.getByPlaceholder('Last Name').fill(lastName)
});

When('I enter an specific email address {string}', async (emailAddress: string) => {
    await pageFixture.page.getByPlaceholder('Address').fill(emailAddress);
});

When('I type specific text {string} and a number {int} within the comment input field', async (word: string, number: number) => {
    await pageFixture.page.getByPlaceholder('Comment').fill(word + " " + number);
});

//Random Data - Faker
When('I type a random first name', async () => {
    const randomFirstName = faker.person.firstName();
    await pageFixture.page.getByPlaceholder('First Name').fill(randomFirstName);
});

When('I type a random last name', async () => {
    const randomLastName = faker.person.lastName();
    await pageFixture.page.getByPlaceholder('Last Name').fill(randomLastName);
});

When('I enter anrandom  email address', async () => {
    const randomEmail = faker.internet.email();
    await pageFixture.page.getByPlaceholder('Email Address').fill(randomEmail);
});

//Scenario
When('I type a first name {word} and last name {word}', async (firstName: string, lastname: string) => {
    await pageFixture.page.getByPlaceholder('First Name').fill(firstName);
    await pageFixture.page.getByPlaceholder('Last Name').fill(lastname);
});

When('I type an email address {string} and a comment {string}', async (email: string, comment: string) => {
    await pageFixture.page.getByPlaceholder('Email Address').fill(email);
    await pageFixture.page.getByPlaceholder('Comment').fill(comment);
});

Then('I should be presented with a header text {string}', async (message: string) => {
    //wait for the target element
    await pageFixture.page.waitForSelector("//h1 | //body", { state: 'visible' });

    //get all elements
    const elements = await pageFixture.page.locator("//h1 | //body").elementHandles();
    let foundElementText = '';

    //loop through each of the elements
    for (let element of elements) {
        //get the inner text of the element
        let text = await element.innerText();

        //if statement to check whether text includes expected text
        if (text.includes(message)) {
            foundElementText = text;
            break;
        }
    }
    //perform an assertion
    expect(foundElementText).toContain(message);
});