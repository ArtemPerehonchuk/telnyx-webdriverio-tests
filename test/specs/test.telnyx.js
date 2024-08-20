import HomePage from '../pageobjects/homepage.js'
import SmsApiPage from '../pageobjects/smsapi.page.js';
import ContactUsPage from '../pageobjects/contactus.page.js';
import IotSimCardPage from '../pageobjects/iot.sim.card.page.js';
import PhoneNumbersPage from '../pageobjects/phone.numbers.page.js';
import GlobalCoveragePage from '../pageobjects/global.coverage.page.js';
import MicrosoftTeamsPage from '../pageobjects/microsoft.teams.page.js';
import InferencePage from '../pageobjects/inference.page.js';
import DevelopersPage from '../pageobjects/developers.page.js';
import ResourcesPage from '../pageobjects/resources.page.js';
import CastomerStoriesPage from '../pageobjects/customer.stories.page.js';

const linkedinUrl = 'https://www.linkedin.com/company/telnyx/';
const facebookUrl = 'https://www.facebook.com/Telnyx/';
const telnyxShopUrl = 'https://shop.telnyx.com/';
const developersUrl  = 'https://developers.telnyx.com/';
const resourcesUrl = 'https://telnyx.com/resources';
const customerStoriesUrl = 'https://telnyx.com/customer-stories';

describe ('Telnyx main page tests', () => {

    const homePage = new HomePage();
    const smsApiPage = new SmsApiPage();
    const contuctUsPage = new ContactUsPage();
    const iotSimCardPage = new IotSimCardPage();
    const phoneNumbersPage = new PhoneNumbersPage();
    const globalCoveragePage = new GlobalCoveragePage();
    const microsoftTeamsPage = new MicrosoftTeamsPage();
    const inferencePage = new InferencePage();
    const developersPage = new DevelopersPage();
    const resourcesPage = new ResourcesPage();
    const customerStoriesPage = new CastomerStoriesPage();

    beforeEach(async () => {
        await homePage.navigate('/');
    });

    it ('test case T01: Should check social media links', async () => {
        await homePage.scrollToSocialMediaLinks();
        await homePage.clickOnLinkedinLink();
        await homePage.checkLinkedinUrl(linkedinUrl);
        await homePage.clickOnFacebookLink();
        await homePage.checkFacebookUrl(facebookUrl);
    });

    it ('test case T02: Should check redirectimg to the telnyx shop', async () => {
        if (browser.capabilities.browserName !== 'chrome-headless-shell') {
            await homePage.clickOnHamburgerMenu();
        }
        await homePage.clickOnShopItem();
        await homePage.checkTelnyxShopUrl(telnyxShopUrl);
    });

    it ('test case T03: Should check whether "Talk to an expert" form is displayed.', async () => {
        if (browser.capabilities.browserName !== 'chrome-headless-shell') {
            await homePage.clickOnHamburgerMenu();
        }
        await homePage.clickOnProductsDropDown();
        await homePage.clickOnSmsApiItem();
        await smsApiPage.clickOnTalkToAnExpertBtn();
        await contuctUsPage.checkTalkToAnExpertForm();
    });

    xit ('test case T04: Should calculate IoT Sim Card price', async () => {
        if (browser.capabilities.browserName !== 'chrome-headless-shell') {
            await homePage.clickOnHamburgerMenu();
        }
        await homePage.clickOnProductsDropDown();
        await homePage.clickOnIotSimCadrItem();
        await iotSimCardPage.scrollToHowManySimCardInput();
        await iotSimCardPage.setNumberOfSimCards();
        await iotSimCardPage.clickOnNextBtn();
        await iotSimCardPage.setNumberOfMbPerMonth();
        await iotSimCardPage.clickOnNextBtn();
        await iotSimCardPage.clickOnSelectCountryDropDown();
        await iotSimCardPage.clickOnUnitedStatesItem();
        await iotSimCardPage.clickOnNextBtn();
        await iotSimCardPage.checkYesCheckBox();
        await iotSimCardPage.clickOnNextBtn();
        await iotSimCardPage.checkEstimatedCostsSectionIsDisplayed();
    });

    it ('test case T05: Should check whether "Download full coverage" form displayed.', async () => {
        if (browser.capabilities.browserName !== 'chrome-headless-shell') {
            await homePage.clickOnHamburgerMenu();
        }
        await homePage.clickOnProductsDropDown();
        await homePage.clickOnGlobalNumbersItem();
        await phoneNumbersPage.clickOnViewGlobalCoverageBtn();
        await globalCoveragePage.chechDownloadFullCoverageForm();
    });

    it ('test case T07: Should check "Operator connect" link', async () => {
        if (browser.capabilities.browserName !== 'chrome-headless-shell') {
            await homePage.clickOnHamburgerMenu();
        }
        await homePage.clickOnProductsDropDown();
        await homePage.clickOnMicrosoftTeamsItem();
        await microsoftTeamsPage.clickOnOperatorConnectLink();
        await microsoftTeamsPage.checkOperatorConnectHeader();
    });

    it ('Test case T08: Should check "Chat with LLM"', async () => {
        if (browser.capabilities.browserName !== 'chrome-headless-shell') {
            await homePage.clickOnHamburgerMenu();
        }
        await homePage.clickOnProductsDropDown();
        await homePage.clicOnInferenceItem();
        await inferencePage.scrollToModelDropDown();
        await inferencePage.selectOptionFromDropDown();
        await inferencePage.fillSystemPromptInput();
        await inferencePage.fillUserInput();
        await inferencePage.clickOnSendBtn();
        await inferencePage.checkAssistant();
    });

    it ('Test case T09: Should proceed to telnyx developers page', async () => {
        await homePage.scrollToExploreOurDocsBtn();
        await homePage.clickOnExploreOurDocsBtn();
        await developersPage.checkDevelopersUrl(developersUrl);
    });

    it ('Test case T10: Should proceed to the resources page', async () => {
        if (browser.capabilities.browserName !== 'chrome-headless-shell') {
            await homePage.clickOnHamburgerMenu();
        }
        await homePage.clickOnResourcesDropDown();
        await homePage.clickOnBlogItem();
        await resourcesPage.checkResourcesUrl(resourcesUrl);
    });

    it ('Test case T16: Should proceed to the "Customer stories" page', async () => {
        if (browser.capabilities.browserName !== 'chrome-headless-shell') {
            await homePage.clickOnHamburgerMenu();
        }
        await homePage.clickOnResourcesDropDown();
        await homePage.clickOnCustomersStoriesItem();
        await customerStoriesPage.checkCustomerStoriesUrl(customerStoriesUrl);
    });
})

