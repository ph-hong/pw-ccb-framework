import { BrowserContext, Page} from "@playwright/test";

export const pageFixture = {
    // @ts-ignore
    page: undefined as Page,
    
    // @ts-ignore
    context: undefined as BrowserContext,
}