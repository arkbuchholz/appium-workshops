import Home from '../support/screens/Home/Home.assertion';
// import Onboarding from '../support/screens/Onboarding/Onboarding.screen';

describe('Onboarding2', () => {
  it('Should complete onboarding2', async () => {
    // test await Onboarding.complete();
    await Home.assert();
  });
});
