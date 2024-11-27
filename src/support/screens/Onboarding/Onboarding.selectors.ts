import { BaseClass } from "../BaseClass";

export class OnboardingSelectors extends BaseClass {
    get continueBtn() { return this.getSelector('', 'org.wikipedia:id/fragment_onboarding_forward_button') }

    get getStartedBtn() { return $('android=new UiSelector().resourceId("org.wikipedia:id/fragment_onboarding_done_button")') }
}
