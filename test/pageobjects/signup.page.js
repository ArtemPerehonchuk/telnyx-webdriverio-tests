import Page from "./page.js";

class SignUpPage extends Page {
    
    get signUpForm () {return $('[aria-label="signup-form"]')}

    async checkSignUpForm() {
        await expect(this.signUpForm).toBeDisplayed();
    }
}

export default SignUpPage;