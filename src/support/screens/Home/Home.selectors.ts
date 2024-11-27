import { BaseClass } from "../BaseClass";

export class HomeSelectors extends BaseClass {
  get featuredArticle() {
    return this.getSelector("Featured article", "Featured article", "text");
  }
}
