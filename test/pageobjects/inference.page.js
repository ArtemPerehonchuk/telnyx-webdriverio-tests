import Page from "./page.js";
import { faker } from "@faker-js/faker";

let randomWord;

class InferencePage extends Page{

    get modelDropDown() {return $('[id="radix-:Rhbgqtm:"]')}
    get googleGemma7bOption() {return $('[aria-label="google/gemma-7b-it"]')}
    get systemPromptInput() {return $('[name="prompt"]')}
    get userInput() {return $('[placeholder="Enter text here"]')}
    get sendBtn() {return $('[type="submit"]')}
    get assistantBlock() {return $('div=assistant')}
    get outputBlock() {return $('strong=Output')}

    async scrollToModelDropDown() {
        await this.modelDropDown.waitForExist(5000);
        await this.modelDropDown.scrollIntoView();
    }

    async selectOptionFromDropDown() {
        await this.modelDropDown.waitForClickable(3000);
        await this.modelDropDown.click();
        await this.googleGemma7bOption.waitForClickable(1000);
        await this.googleGemma7bOption.click();
    }

    async fillSystemPromptInput() {
        randomWord = faker.word.noun();
        await this.systemPromptInput.scrollIntoView();
        await this.systemPromptInput.waitForClickable(1000);
        await this.systemPromptInput.click();
        await this.systemPromptInput.setValue(randomWord);
    }

    async fillUserInput() {
        randomWord = faker.word.noun();
        await this.userInput.scrollIntoView();
        await this.userInput.waitForClickable(1000);
        await this.userInput.click();
        await this.userInput.setValue(randomWord);
    }

    async clickOnSendBtn() {
        await this.sendBtn.scrollIntoView();
        await this.sendBtn.click();
        await browser.waitUntil(async () => (await browser.execute(() => document.readyState)) === 'complete', {
            timeout: 20000,
            timeoutMsg: 'Page did not load completely'
        });
    }

    async checkAssistant() {
        await expect(this.assistantBlock).toBeDisplayed();
        await expect(this.assistantBlock).toHaveText('Assistant');
    }
}

export default InferencePage;