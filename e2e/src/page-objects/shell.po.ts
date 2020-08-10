/*
 * Use the Page Object pattern to define the page under test.
 * See docs/coding-guide/e2e-tests.md for more info.
 */

import { element, by } from 'protractor';

export class ShellPage {
  appTitleText = element(by.css('.navbar-brand'));

  getAppTitle () {
    return this.appTitleText.getText();
  }
}
