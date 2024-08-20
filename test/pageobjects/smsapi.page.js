import Page from "./page.js";

class SmsApiPage extends Page {
    
    get talkToAnExpertBtn () {return $('span=Talk to an expert')}

    async clickOnTalkToAnExpertBtn() {
        await this.talkToAnExpertBtn.waitForClickable({timeout: 10000});
        await this.talkToAnExpertBtn.click({force: true});
        await browser.waitUntil(async () => (await browser.execute(() => document.readyState)) === 'complete', {
            timeout: 20000,
            timeoutMsg: 'Page did not load completely'
        });
    }
}

export default SmsApiPage;
