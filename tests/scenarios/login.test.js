import * as route from '@helpers/route';
import * as assert from '@helpers/asserts';
import { ROUTES } from '@root/consts/routes';
import * as element from '@helpers/elements';
import * as loginPage from '@pages/login.page';
import * as managerMainPage from '@pages/manager-main.page';
import * as accountPage from '@pages/customer-account-page';

describe('Login', () => {
    
    beforeEach(() => {
        route.visit(ROUTES.login) 
    });

    it.only('Should success login as a customer', () => {
        element.click(loginPage.customerLoginButton)
        element.selectDropdown(loginPage.selectCustomer, "Hermoine Granger")
        element.click(loginPage.loginButton)
        assert.shouldContaintText(accountPage.welcomeText, "Welcome Hermoine Granger")
    });

    it('Should success login as a manager', () => {
        element.click(loginPage.managerLoginButton)
        assert.shouldContaintText(managerMainPage.addCustomerButton, 'Add Customer')
    });
})
