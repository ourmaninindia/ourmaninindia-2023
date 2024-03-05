import A11yDialog from 'a11y-dialog';
import * as CookieConsent from 'vanilla-cookieconsent/dist/core/cookieconsent-core.esm.js';

const consentDialog = createDialog('consent-dialog-container');

/**
 * @type {import('vanilla-cookieconsent')}
 */
const cc = CookieConsent;

cc.run({
  categories: {
    necessary: {
      readOnly: true,
    },
    analytics: {
      autoClear: {
        cookies: [
          {
            name: /^_ga/, // regex: delete all cookies starting with '_ga'
          },
        ],
      },
    },
    marketing: {},
  },

  onFirstConsent: ({ cookie }) => {
    console.log('onFirstConsent executed', cc.getUserPreferences(), cookie);
  },

  onConsent: ({ cookie }) => {
    console.log('onConsent executed', cc.getUserPreferences());
  },

  onChange: ({ cookie, changedCategories }) => {
    console.log(
      'onChange executed',
      changedCategories,
      cc.getUserPreferences()
    );
  },
}).then(() => {
  /**
   * Show dialog if
   * consent is not valid
   */
  if (!cc.validConsent()) {
    consentDialog.show();
  }
});

/**
 * @param {string} dialogId
 */
function createDialog(dialogId) {
  const container = document.getElementById(dialogId);

  /**
   * @type {NodeListOf<HTMLButtonElement>}
   */
  const acceptBtns = container.querySelectorAll('[data-cc-accept]');

  /**
   * Connect "data-cc-accept" buttons to API
   */
  for (const button of acceptBtns) {
    button.addEventListener('click', () => {
      /**
       * See https://cookieconsent.orestbida.com/reference/api-reference.html#acceptcategory
       * for more acceptCategory() examples
       */
      const acceptValue = JSON.parse(button.dataset.ccAccept);

      cc.acceptCategory(acceptValue);
    });
  }

  return new A11yDialog(container);
}
