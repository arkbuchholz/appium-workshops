import { HomeScreen } from "./Home.screen";

class HomeAssertion extends HomeScreen {
  async assert() {
    await expect(this.featuredArticle).toBeDisplayed();
  }
}

export default new HomeAssertion();
