import { Page, Locator } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly logo: Locator;
    readonly navLinks: Locator;

    constructor(page: Page) {
        this.page = page;
        this.logo = page.locator('.logo');
        this.navLinks = page.locator('.nav-btn');
    }

    async goto() {
        await this.page.goto('/');
    }

    // Допоміжний метод: перемикання мови
    async changeLanguage(lang: 'UA' | 'EN') {
        await this.page.getByRole('button', { name: lang }).click();
    }
}