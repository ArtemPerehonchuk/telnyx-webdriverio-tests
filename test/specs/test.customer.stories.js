import CastomerStoriesPage from "../pageobjects/customer.stories.page.js";
import CosmoPage from "../pageobjects/cosmo.page.js";
import BestCanadaEnergyPage from "../pageobjects/best.canada.energy.page.js";

const cosmoUrl = 'https://telnyx.com/customer-stories/cosmo';
const cosmoTogetherUrl = 'https://cosmotogether.com/';
const iotSimCardUrl = 'https://telnyx.com/products/iot-sim-card';

describe('Test customer stories page', () => {

    const customerStoriesPage = new CastomerStoriesPage();
    const cosmoPage = new CosmoPage();
    const bestCanadaEnergyPage = new BestCanadaEnergyPage();

    beforeEach(async () => {
        await customerStoriesPage.navigate('/customer-stories');
    });

    xit ('Test case T17: Should open customer story', async () => {
        await customerStoriesPage.scrollToCosmoSection();
        await customerStoriesPage.clickOnCosmoSection();
        await customerStoriesPage.checkCustomerStoriesUrl(cosmoUrl);
    });

    xit ('Test case T18: Should explore other customer story', async () => {
        await customerStoriesPage.scrollToCosmoSection();
        await customerStoriesPage.clickOnCosmoSection();
        await cosmoPage.scrollToBestCanadaSection();
        await cosmoPage.clickOnBestCanadaSection();
        await cosmoPage.checkBestCanadaHeader();
    });

    xit ('Test case T19: Should check the "COSMO" link', async () => {
        await customerStoriesPage.scrollToCosmoSection();
        await customerStoriesPage.clickOnCosmoSection();
        await cosmoPage.scrollToCosmoLink();
        await cosmoPage.clickOnCocmoLink();
        await cosmoPage.checkCosmoTogetherUrl(cosmoTogetherUrl);
    });

    xit ('Test case T20: Should check the "IoT connectivity" link', async () => {
        await customerStoriesPage.scrollToBestCanadaEnergySection();
        await customerStoriesPage.clickOnBestCanadaEnergySection();
        await bestCanadaEnergyPage.scrollToIotConnectivityLink();
        await bestCanadaEnergyPage.clickOnIotConnectivityLink();
        await bestCanadaEnergyPage.checkPageUrl(iotSimCardUrl);
    });
})
