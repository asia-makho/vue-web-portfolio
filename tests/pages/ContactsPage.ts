import { Page, Locator } from '@playwright/test';

export class ContactsPage {
    readonly page: Page;
    readonly heading: Locator;

    constructor(page: Page) {
        this.page = page;
        // Шукаю будь-який елемент із текстом "Контакти", беру перший (щоб не було конфліктів)
        this.heading = page.getByText('Контакти', { exact: false }).first();
    }

    async goto() {
        await this.page.goto('/contacts');
    }

    async getHeadingText() {
        return await this.heading.innerText();
    }
}