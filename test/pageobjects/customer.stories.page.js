import Page from "./page.js";

class CastomerStoriesPage extends Page {

    get cosmoSection () {return $('h3=COSMO')}
    get bestCanadaSection () {return $('h3=BEST Canada Energy')}

    async scrollToCosmoSection() {
        await this.cosmoSection.waitForExist({timeout: 10000});
        await this.cosmoSection.scrollIntoView();
    }

    async clickOnCosmoSection() {
        await this.cosmoSection.waitForClickable({timeout: 5000});
        await this.cosmoSection.click({force: true});
        await browser.pause(5000);
    }

    async checkCustomerStoriesUrl(customerStoriesUrl) {
        await expect(browser).toHaveUrl(customerStoriesUrl);
    }

    async scrollToBestCanadaEnergySection() {
        await this.bestCanadaSection.waitForExist({timeout: 5000});
        await this.bestCanadaSection.scrollIntoView();
    }

    async clickOnBestCanadaEnergySection() {
        await this.bestCanadaSection.click();
    }
}

export default CastomerStoriesPage;
