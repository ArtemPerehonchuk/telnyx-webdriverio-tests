import Page from "./page.js";

class MicrosoftTeamsPage extends Page {
    
    get operatorConnectLink () {return $('a=Operator Connect')}
    get operatorConnectHeader () {return $('p=BENEFITS OF OPERATOR CONNECT')}

    async clickOnOperatorConnectLink() {
        await this.operatorConnectLink.waitForClickable(3000);
        await this.operatorConnectLink.click();
        await browser.waitUntil(async () => (await browser.execute(() => document.readyState)) === 'complete', {
            timeout: 20000,
            timeoutMsg: 'Page did not load completely'
        });
    }

    async checkOperatorConnectHeader() {
        await expect(this.operatorConnectHeader).toHaveTextContaining('BENEFITS OF OPERATOR CONNECT');
    }
}

export default MicrosoftTeamsPage;