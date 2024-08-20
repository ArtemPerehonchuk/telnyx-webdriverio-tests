import Page from './page.js';
import { faker } from '@faker-js/faker';

let randomNumber;

class IotSimCardPage extends Page {

    get howManySimCardInput() {return $('#iot-sim-savings-calculator__number-of-sim-cards')}
    get nextBtn() {return $('span=Next')}
    get numberOfMbPerMonth() {return $('#iot-sim-savings-calculator__number-of-mb-per-month')}
    get selectCountryDropDown() {return $('button=Select country')}
    get unitedStatesItem() {return $('//div[@role="option"]//span[text()="United States"]')}
    get yesCheckBox() {return $('#iot-sim-savings-calculator__public-ip__-yes')}
    get estimatedCostsSection() {return $('.c-jKXnnZ')}

    async scrollToHowManySimCardInput() {
        await this.howManySimCardInput.waitForExist({timeout: 10000})
        await this.howManySimCardInput.scrollIntoView();
    }

    async setNumberOfSimCards() {
        randomNumber = faker.number.int({ min: 1, max: 10 });
        await this.howManySimCardInput.click({force: true});
        await this.howManySimCardInput.setValue(randomNumber);
        await browser.pause(1000);
    }

    async setNumberOfMbPerMonth() {
        randomNumber = faker.number.int({ min: 1, max: 10 });
        await this.numberOfMbPerMonth.scrollIntoView();
        await this.numberOfMbPerMonth.click({force: true});
        await this.numberOfMbPerMonth.setValue(randomNumber);
    }

    async clickOnNextBtn() {
        await this.nextBtn.waitForDisplayed({timeout: 5000});
        await this.nextBtn.scrollIntoView();
        await this.nextBtn.click();
        await browser.waitUntil(async () => (await browser.execute(() => document.readyState)) === 'complete', {
            timeout: 20000,
            timeoutMsg: 'Page did not load completely'
        });
    }

    async clickOnSelectCountryDropDown() {
        await this.selectCountryDropDown.scrollIntoView();
        await this.selectCountryDropDown.click();
    }

    async clickOnUnitedStatesItem() {
        await this.unitedStatesItem.waitForDisplayed(1000);
        await this.unitedStatesItem.click();
    }

    async checkYesCheckBox() {
        await this.yesCheckBox.scrollIntoView();
        await this.yesCheckBox.click();
    }

    async checkEstimatedCostsSectionIsDisplayed() {
        await expect(this.estimatedCostsSection).toBeDisplayed();
    }
}

export default IotSimCardPage;