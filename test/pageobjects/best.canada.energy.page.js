import Page from "./page.js";

class BestCanadaEnergyPage extends Page {

    get iotConnectivityLink () {return $('[href="https://telnyx.com/products/iot-sim-card"]')}

    async scrollToIotConnectivityLink() {
        await this.iotConnectivityLink.scrollIntoView();
    }

    async clickOnIotConnectivityLink() {
        await this.iotConnectivityLink.click();
    }

    async checkPageUrl(expectedUrl) {
        await expect(browser).toHaveUrl(expectedUrl);
    }
}

export default BestCanadaEnergyPage;