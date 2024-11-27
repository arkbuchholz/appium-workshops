import { BaseClass } from "../BaseClass";

export class OnboardingSelectors extends BaseClass {
  get continueBtn() {
    return this.getPredicateSelector('value == "Next"', "CONTINUE");
  }

  get getStartedBtn() {
    return this.getPredicateSelector(
      'label == "Get started" AND type == "XCUIElementTypeButton"',
      "GET STARTED"
    );
  }
}
