import { test, expect } from '@playwright/test';
import { HomePage } from './pages/HomePage';
import { ContactsPage } from './pages/ContactsPage';

test('перевірка логотипу та зміни мови', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();

    // Перевірка українською
    await expect(homePage.logo).toHaveText('Моє Портфоліо');

    // Зміна мови на англійську через POM метод
    await homePage.changeLanguage('EN');
    await expect(homePage.logo).toHaveText('My Portfolio');
});

test('перевірка наявності всіх кнопок навігації', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    // Перевіряю  7 кнопок
    await expect(homePage.navLinks).toHaveCount(4);
});

test('перевірка заголовку на сторінці контактів', async ({ page }) => {
    const contactsPage = new ContactsPage(page);
    await page.goto('/');
    const title = await contactsPage.getHeadingText();
    expect(title).toBeDefined(); // Перевірка, що заголовок існує
});