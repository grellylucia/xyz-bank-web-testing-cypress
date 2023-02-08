import * as route from '@helpers/route';
import * as assert from '@helpers/asserts';
import { ROUTES } from '@root/consts/routes';
import * as element from '@helpers/elements';
import * as loginPage from '@pages/login.page';
import * as addCustomerPage from '@pages/add-customer.page';
import * as managerMainPage from '@pages/manager-main.page';
import * as data from '@root/data/customer.data'


describe('Login', () => {
    
    beforeEach(() => {
        route.visit(ROUTES.login) 
        element.click(loginPage.managerLoginButton)
    });

    it('As a manager, i should success add new customer data', () => {
        element.click(managerMainPage.addCustomerButton);
        element.fillField(addCustomerPage.firstNameField, data.customer.firstName);
        element.fillField(addCustomerPage.lastNameField, data.customer.lastName);
        element.fillField(addCustomerPage.postCodeField, data.customer.postCode);
        element.click(addCustomerPage.addCustomerButton);
    });
})
