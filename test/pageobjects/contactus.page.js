import Page from "./page.js";

class ContactUsPage extends Page {

    get talkToAnExpertForm () {return $('[title="Contact us"]')}

    async checkTalkToAnExpertForm() {
        await expect(this.talkToAnExpertForm).toBeExisting();
    }
}

export default ContactUsPage;

