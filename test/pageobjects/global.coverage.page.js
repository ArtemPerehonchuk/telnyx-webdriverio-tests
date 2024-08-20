import Page from "./page.js";

class GlobalCoveragePage extends Page {

    get downloadFullCoverageForm() {return $('[title="Global Coverage - Form"]')}

    async chechDownloadFullCoverageForm() {
        await this.downloadFullCoverageForm.waitForDisplayed(1000);
        await expect(this.downloadFullCoverageForm).toBeDisplayed();
    }
}

export default GlobalCoveragePage;