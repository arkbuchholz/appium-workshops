import { BaseClass } from "../BaseClass";

export class HomeSelectors extends BaseClass {
    get featuredArticle() { return $('android=new UiSelector().resourceId("org.wikipedia:id/view_card_header_title")') }
}