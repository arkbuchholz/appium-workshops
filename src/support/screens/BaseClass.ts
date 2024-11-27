export class BaseClass {
  constructor() {}
  getPlatformSelector(selectorIOS: string, selectorAndroid: string) {
    return driver.isAndroid ? selectorAndroid : selectorIOS;
  }

  getSelector(
    IOSpredicate: string,
    androidPredicate: string,
    method = "resourceId"
  ) {
    const selectorIOS = `~${IOSpredicate}`;
    const selectorAndroid = `android=new UiSelector().${method}("${androidPredicate}")`;
    return $(this.getPlatformSelector(selectorIOS, selectorAndroid));
  }

  getPredicateSelector(
    IOSpredicate: string,
    androidPredicate: string,
    method = "text"
  ) {
    const selectorIOS = `-ios predicate string:${IOSpredicate}`;
    const selectorAndroid = `android=new UiSelector().${method}("${androidPredicate}")`;
    return $(this.getPlatformSelector(selectorIOS, selectorAndroid));
  }
}
