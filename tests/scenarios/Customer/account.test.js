import * as route from '@helpers/route';
import * as assert from '@helpers/asserts';
import { ROUTES } from '@root/consts/routes';
import * as element from '@helpers/elements';
import * as loginPage from '@pages/login.page';
import * as managerMainPage from '@pages/manager-main.page';
import * as accountPage from '@pages/customer-account.page';

describe('Login', () => {
    
    beforeEach(() => {
        route.visit(ROUTES.login)
        element.click(loginPage.customerLoginButton)
        element.selectDropdown(loginPage.selectCustomer, "Hermoine Granger")
        element.click(loginPage.loginButton)
        assert.shouldContaintText(accountPage.welcomeText, "Welcome Hermoine Granger")
    });

    it.only('Ensure the customer can view balance and currency information of specific account number', () => {
        element.selectDropdown(accountPage.accountNumberField, "1002")
        assert.shouldContaintText(accountPage.accountNumberInfo, "1002")
        assert.shouldContaintText(accountPage.balanceInfo, "0")
        assert.shouldContaintText(accountPage.currencyInfo, "Pound")
    });

    it('Should success login as a manager', () => {
        element.click(loginPage.managerLoginButton)
        assert.shouldContaintText(managerMainPage.addCustomerButton, 'Add Customer')
    });
})
