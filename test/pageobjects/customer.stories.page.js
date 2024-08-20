import Page from "./page.js";

class CastomerStoriesPage extends Page {

    get cosmoSection () {return $('h3=COSMO')}
    get bestCanadaSection () {return $('h3=BEST Canada Energy')}

    async scrollToCosmoSection() {
        await this.cosmoSection.waitForExist({timeout: 10000});
        await this.cosmoSection.scrollIntoView();
    }

    async clickOnCosmoSection() {
        await this.cosmoSection.waitForClickable(3000);
        await this.cosmoSection.click();
        await browser.pause(3000);
    }

    async checkCustomerStoriesUrl(customerStoriesUrl) {
        await expect(browser).toHaveUrl(customerStoriesUrl);
    }

    async scrollToBestCanadaEnergySection() {
        await this.bestCanadaSection.scrollIntoView();
    }

    async clickOnBestCanadaEnergySection() {
        await this.bestCanadaSection.click();
    }
}

export default CastomerStoriesPage;