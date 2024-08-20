import Page from './page.js';

class HomePage extends Page {
    get hamburgerMenuBtn() { return $('button[class="c-gMsfuT"]'); }
    get productsDropDown() { return $('span=Products'); }
    get resourcesDropDown() { return $('span=Resources'); }
    get shopItem() { return $('a=Shop'); }
    get smsApiItem() { return $('span=SMS API'); }
    get microsoftTeamsItem() { return $('[id="2IYRf655bWg3u6b7Cha07G"]')}
    get customerStoriesItem() { return $('span=Customer Stories'); }
    get blogItem() { return $('span=Blog'); }
    get socialMediaLinksContainer() { return $('ul[class="c-ejcPbY"]'); }
    get linkedinLink() { return $('[href="https://www.linkedin.com/company/telnyx/"]'); }
    get exploreOurDocsBtn() { return $('[href="https://developers.telnyx.com/"]'); }
    get twitterLink() {return $('[href="https://twitter.com/telnyx"]');}
    get facebookLink() {return $('[href="https://www.facebook.com/Telnyx/"]');}
    get iotSimCardItem() {return $('span=IoT SIM Card')}
    get globalNumbersItem() {return $('[href="/products/phone-numbers"]');}
    get inferenceItem() {return $('[id="7gcAtZ00yeAsxYNlL049kM"]');}

    async scrollToSocialMediaLinks() {
        await this.socialMediaLinksContainer.scrollIntoView();
    }

    async clickOnLinkedinLink() {
        await this.linkedinLink.waitForClickable(3000);
        await this.linkedinLink.click();
        await browser.pause(3000);
    }

    async clickOnFacebookLink () {
        await this.facebookLink.waitForClickable(3000);
        await this.facebookLink.click();
        await browser.pause(3000);
    }

    async checkLinkedinUrl(expectedUrl) {
        await browser.switchWindow(expectedUrl);
        await expect(browser).toHaveUrl(expectedUrl);
        await browser.closeWindow();
        await browser.switchWindow('/');
    }

    async checkFacebookUrl(expectedUrl) {
        await browser.switchWindow(expectedUrl);
        await expect(browser).toHaveUrl(expectedUrl);
        await browser.closeWindow();
        await browser.switchWindow('/');
    }

    async clickOnHamburgerMenu() {
        await this.hamburgerMenuBtn.waitForClickable({timeout: 5000});
        await this.hamburgerMenuBtn.click({force: true});
        await browser.pause(3000);
    }

    async clickOnShopItem() {
        await this.shopItem.waitForDisplayed(3000)
        await this.shopItem.click({force: true});
        await browser.pause(5000);
    }

    async checkTelnyxShopUrl(expectedUrl) {
        await browser.switchWindow(expectedUrl);
        await expect(browser).toHaveUrl(expectedUrl);
        await browser.closeWindow();
        await browser.switchWindow('/');
    }

    async clickOnProductsDropDown() {
        await this.productsDropDown.waitForDisplayed({timeout: 5000});
        await this.productsDropDown.click({fotce: true});
        await browser.pause(5000);
    }

    async clickOnSmsApiItem() {
        await this.smsApiItem.click({force: true});
        await browser.waitUntil(async () => (await browser.execute(() => document.readyState)) === 'complete', {
            timeout: 20000,
            timeoutMsg: 'Page did not load completely'
        });
    }

    async clickOnMicrosoftTeamsItem() {
        await this.microsoftTeamsItem.waitForClickable({timeout: 3000});
        await this.microsoftTeamsItem.moveTo();
        await this.microsoftTeamsItem.click({force: true});
        await browser.waitUntil(async () => (await browser.execute(() => document.readyState)) === 'complete', {
            timeout: 20000,
            timeoutMsg: 'Page did not load completely'
        });
    }

    async clickOnIotSimCadrItem() {
        await this.iotSimCardItem.waitForExist({timeout: 10000});
        await this.iotSimCardItem.click();
        await browser.pause(5000);
    }

    async clickOnGlobalNumbersItem() {
        await this.globalNumbersItem.waitForClickable({timeout: 3000});
        await this.globalNumbersItem.click({force: true});
        await browser.pause(5000);
    }

    async clicOnInferenceItem() {
        await this.inferenceItem.waitForClickable({timeout: 3000});
        await this.inferenceItem.click();
        await browser.waitUntil(async () => (await browser.execute(() => document.readyState)) === 'complete', {
            timeout: 20000,
            timeoutMsg: 'Page did not load completely'
        });
    }

    async scrollToExploreOurDocsBtn() {
        await this.exploreOurDocsBtn.waitForDisplayed({timeout: 3000});
        await this.exploreOurDocsBtn.scrollIntoView();
    }

    async clickOnExploreOurDocsBtn() {
        await this.exploreOurDocsBtn.waitForClickable({timeout: 10000});
        await this.exploreOurDocsBtn.click({force: true});
        await browser.pause(5000);
    }

    async clickOnResourcesDropDown() {
        await this.resourcesDropDown.waitForDisplayed({timeout: 3000});
        await this.resourcesDropDown.click({force: true});
        await browser.pause(5000);
    }

    async clickOnBlogItem() {
        await this.blogItem.waitForExist({timeout: 10000});
        await this.blogItem.click({ force: true });
        await browser.waitUntil(async () => (await browser.execute(() => document.readyState)) === 'complete', {
            timeout: 20000,
            timeoutMsg: 'Page did not load completely'
        });
    }

    async clickOnCustomersStoriesItem() {
        await this.customerStoriesItem.waitForClickable({timeout: 3000});
        await this.customerStoriesItem.click({force: true});
        await browser.waitUntil(async () => (await browser.execute(() => document.readyState)) === 'complete', {
            timeout: 20000,
            timeoutMsg: 'Page did not load completely'
        });
    }
}

export default HomePage;

