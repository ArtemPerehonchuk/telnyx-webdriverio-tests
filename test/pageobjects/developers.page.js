import Page from "./page.js";

class DevelopersPage extends Page {

    async checkDevelopersUrl(expectedUrl) {
        await expect(browser).toHaveUrl(expectedUrl);
    }
}

export default DevelopersPage;