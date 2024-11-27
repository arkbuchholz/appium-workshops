import Home from "../support/screens/Home/Home.assertion";
import Onboarding from "../support/screens/Onboarding/Onboarding.screen";

describe("Onboarding", () => {
  it("Should complete onboarding", async () => {
    await Onboarding.complete();
    await Home.assert();
  });
});
