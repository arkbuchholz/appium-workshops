import { OnboardingSelectors } from "./Onboarding.selectors";

class OnboardingScreen extends OnboardingSelectors {
  async complete() {
    for (let i = 0; i < 3; i++) {
      await this.continueBtn.click();
    }
    await this.getStartedBtn.click();
  }
}
export default new OnboardingScreen();
