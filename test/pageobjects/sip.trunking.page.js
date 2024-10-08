import Page from './page.js'

class SipTrunkingPage extends Page {
    
    get seePricingBtn () {return $('[href="https://telnyx.com/pricing/elastic-sip"]')}
    get portalLink () {return $('span=portal')}

    async scrollToSeePricingButton() {
        await this.seePricingBtn.waitForDisplayed({timeout: 5000});
        await this.seePricingBtn.scrollIntoView();
        await browser.pause(2000);
    }

    async clickSeePricingBtn() {
        await this.seePricingBtn.waitForClickable({timeout: 5000});
        await this.seePricingBtn.click();
        await browser.waitUntil(async () => (await browser.execute(() => document.readyState)) === 'complete', {
            timeout: 20000,
            timeoutMsg: 'Page did not load completely'
        });
    }

    async checkSipTrunkingPricingUrl(sipTrunkingPricingUrl) {
        await expect(browser).toHaveUrl(sipTrunkingPricingUrl);
    }

    async clickOnPortalLink() {
        await this.portalLink.click({force: true});
    }
}

export default SipTrunkingPage;