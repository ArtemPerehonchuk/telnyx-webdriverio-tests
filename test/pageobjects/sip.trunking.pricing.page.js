import Page from "./page.js";

let countryItem = 'Germany';

class SipTrunkingPricingPage extends Page {
    
    get countryDropDown () {return $('#country-filter')}
    get countryItemFromDropDown () {return $(`span=${countryItem}`)}
    get sipPricingHeader () {return $(`h1=SIP Trunking pricing for ${countryItem}`)}

    async scrollToPayAsYouGoSection() {
        await this.countryDropDown.waitForDisplayed(5000);
        await this.countryDropDown.scrollIntoView();
    }

    async clickGermanyItem() {
        await this.countryDropDown.waitForClickable(3000);
        await this.countryDropDown.click();
        await this.countryItemFromDropDown.moveTo();
        await this.countryItemFromDropDown.click({force: true});
    }

    async checkHeader() {
        await expect(this.sipPricingHeader).toHaveTextContaining(`SIP Trunking pricing for ${countryItem}`);
    }
}

export default SipTrunkingPricingPage;