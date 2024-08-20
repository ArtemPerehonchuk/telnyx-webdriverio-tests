import ResourcesPage from "../pageobjects/resources.page.js";
import FlowAnnouncementPage from "../pageobjects/flow.announcement.page.js";

import { faker } from "@faker-js/faker";

describe ('Test resources page', () => {

    const resourcesPage = new ResourcesPage();
    const flowAnnouncementPage = new FlowAnnouncementPage();
    
    const resourcesUrl = 'https://telnyx.com/resources';
    const flowPageUrl = 'https://telnyx.com/resources/flow-announcement';

    beforeEach(async () => {
        await resourcesPage.navigate('/resources');
    });

    it ('Test case T11: Should search for a word', async () => {
        let word = faker.word.noun();
        const searchUrl = `https://telnyx.com/resources/search?s=${word}`
        await resourcesPage.searchWord(word);
        await resourcesPage.chesckSearchUrl(searchUrl);
    });

    it ('Test case T14: Shoul proceed to the flow page', async () => {
        await resourcesPage.scrollToFlowBtn();
        await resourcesPage.clickFlowBtn();
        await flowAnnouncementPage.checkFlowUrl(flowPageUrl);
        await flowAnnouncementPage.checkFlowHeader();
    });

    it ('Test case T15: Shoul return to the blog', async () => {
        await resourcesPage.scrollToFlowBtn();
        await resourcesPage.clickFlowBtn();
        await flowAnnouncementPage.clickBackToBlogBtn();
        await resourcesPage.checkResourcesUrl(resourcesUrl)
    });
})