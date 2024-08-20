import Page from "./page.js";

class PhoneNumbersPage extends Page {

    get viewGlobalCoverageBtn() {return $('span=View Global Coverage')}

    async clickOnViewGlobalCoverageBtn() {
        await this.viewGlobalCoverageBtn.waitForClickable({timeout: 3000});
        await this.viewGlobalCoverageBtn.click();
        await browser.waitUntil(async () => (await browser.execute(() => document.readyState)) === 'complete', {
            timeout: 20000,
            timeoutMsg: 'Page did not load completely'
        });
    }
}

export default PhoneNumbersPage;