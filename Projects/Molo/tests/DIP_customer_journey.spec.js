const { test, expect, selectors } = require('@playwright/test');
const { baseUrlUat } = require('../configuration')
const DIP_value = require('../configuration/DIP_value');
const { randomEmail, dateOfBirth } = require('../configuration/generators');


// Non auhtorized customer.
// Mortgages type - remortgages.
// Borrow more - No


test('DIP customer journey', async({ page }) => {

    // personal-eligibility page

    await page.goto(baseUrlUat)
    await expect(page.locator('text=The UK’s first digital mortgage lender')).toBeVisible();
    await page.click('text=Apply now');
    await page.click("(//span[text()='Yes'])[1]", { timeout: 5000 });
    await page.click("(//span[text()='No'])[2]", { timeout: 5000 });
    await page.click("(//span[text()='Yes'])[3]", { timeout: 5000 });
    await page.click("(//span[text()='No'])[4]", { timeout: 5000 });
    await page.type('input[name=taxable_income]', DIP_value.taxableIncome, { timeout: 5000 });
    await page.click('[aria-label="Dropdown select"]', { timeout: 5000 });
    await page.click('[aria-label="0"]', { timeout: 5000 });
    await page.click('text=Continue', { timeout: 5000 });


    //mortgage-details page

    await expect(page.locator('text=About your mortgage')).toBeVisible();
    await page.click('text=Remortgage', { timeout: 5000 })
    await page.click("//span[text()='No']", { timeout: 5000 })
    await page.type('input[name=property_value]', DIP_value.propertyValue, { timeout: 5000 })
    await page.type('input[name=monthly_rent]', DIP_value.monthlyRent, { timeout: 5000 })
    await page.type('input[name=desired_loan_amount]', DIP_value.borrowValue, { timeout: 5000 })
    await page.click('text=Continue', { timeout: 5000 })


    //personal-details page

    await page.click('[aria-label="Dropdown select"]', { timeout: 5000 })
    await page.click('[aria-label="Mr"]', { timeout: 5000 })
    await page.type("(//input[@placeholder=' '])[1]", DIP_value.fraferFirstName, { timeout: 5000 })
    await page.type("(//input[@placeholder=' '])[2]", DIP_value.fraferLastName, { timeout: 5000 })
    await page.type("//input[@placeholder='dd/mm/yyyy']", dateOfBirth, { timeout: 5000 })
    await page.type("(//input[@placeholder=' '])[3]", randomEmail(), { timeout: 5000 })
    await page.type("//input[@placeholder='07700 654321']", DIP_value.phoneNumber, { timeout: 5000 })
    await page.click('text=Confirm')


    //home-address page






    //await page.click("'[data-test=ssjsjsj]'")


});