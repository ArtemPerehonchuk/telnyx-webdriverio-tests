import Page from "./page.js";

class CosmoPage extends Page {
    
    get cosmoHeader () {return $('h1=COSMO')}
    get bestCanadaSection () {return $('[id="1z9JhuQusApH4IrTHPbRkb"]')}
    get bestCanadaHeader () {return $('h1=BEST Canada Energy')}
    get cosmoLink () {return $('a[href="https://cosmotogether.com/"]')}

    async checkCosmoHeader() {
        await expect(this.cosmoHeader).toBeDisplayed();
    }

    async scrollToBestCanadaSection() {
        await this.bestCanadaSection.scrollIntoView();
    }

    async clickOnBestCanadaSection() {
        await this.bestCanadaSection.waitForClickable(3000);
        await this.bestCanadaSection.click();
    }

    async checkBestCanadaHeader() {
        await expect(this.bestCanadaHeader).toBeDisplayed();
    }

    async scrollToCosmoLink() {
        await this.cosmoLink.scrollIntoView();
    }

    async clickOnCocmoLink() {
        await this.cosmoLink.click();
        await browser.pause(3000);
    }

    async checkCosmoTogetherUrl(expectedUrl) {
        await browser.switchWindow(expectedUrl);
        await expect(browser).toHaveUrl(expectedUrl);
        await browser.closeWindow();
        await browser.switchWindow('/');
    }
}

export default CosmoPage;