import SipTrunkingPage from "../pageobjects/sip.trunking.page.js";
import SipTrunkingPricingPage from "../pageobjects/sip.trunking.pricing.page.js";
import SignUpPage from "../pageobjects/signup.page.js";

const sipTrunkingPage = new SipTrunkingPage();
const sipTrunkingPricingPage = new SipTrunkingPricingPage();
const signUpPage = new SignUpPage();

const sipTrunkingPricingUrl = 'https://telnyx.com/pricing/elastic-sip';

describe ('Test Sip Trunking Page', () => {
    beforeEach( async () => {
        await sipTrunkingPage.navigate('/products/sip-trunks')
    });

    it ('test case T06: Should check changing country on the "SIP Trunking pricing" page', async () => {
        await sipTrunkingPage.scrollToSeePricingButton();
        await sipTrunkingPage.clickSeePricingBtn();
        await sipTrunkingPricingPage.scrollToPayAsYouGoSection();
        await sipTrunkingPricingPage.clickGermanyItem();
        await sipTrunkingPricingPage.checkHeader();
    });

    it ('test case T12: Should open "Sip trunking pricing" page', async () => {
        await sipTrunkingPage.scrollToSeePricingButton();
        await sipTrunkingPage.clickSeePricingBtn();
        await sipTrunkingPage.checkSipTrunkingPricingUrl(sipTrunkingPricingUrl);
    });

    it ('test case T13: Should check "portal" link', async () => {
        await sipTrunkingPage.clickOnPortalLink();
        await signUpPage.checkSignUpForm();
    })
})