import Page from "./page.js";

class ResourcesPage extends Page {
    
    get searchField () {return $('#search')}
    get searchResultHeader () {return('[class="c-PJLV c-rMlRu"]')}
    get flowBtn () {return $('strong=Flow')}

    async clickSeePricingButton() {
        await this.seePricingBtn.click();
    }

    async checkResourcesUrl(resourcesUrl) {
        await expect(browser).toHaveUrl(resourcesUrl);
    }

    async searchWord(word) {
        await this.searchField.click();
        await this.searchField.setValue(word);
        await browser.keys('Enter');
    }

    async chesckSearchUrl(expectedUrl) {
        await expect(browser).toHaveUrl(expectedUrl);
    }

    async scrollToFlowBtn() {
        await this.flowBtn.scrollIntoView();
    }

    async clickFlowBtn() {
        await this.flowBtn.click();
    }
}

export default ResourcesPage;