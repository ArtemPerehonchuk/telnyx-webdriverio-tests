import Page from "./page.js";

class FlowAnnouncementPage extends Page {

    get flowHeader () {return $('.c-cUhiIV > :nth-child(3) > .c-PJLV')}
    get backToBlockBtn () {return $('span=Back to blog')}

    async checkFlowHeader() {
        await expect(this.flowHeader).toBeDisplayed();
    }

    async checkFlowUrl(expectedUrl) {
        await expect(browser).toHaveUrl(expectedUrl);
    }

    async clickBackToBlogBtn() {
        await this.backToBlockBtn.click();
    }
}

export default FlowAnnouncementPage;