/* global alert, L, XMLHttpRequest, XDomainRequest */ // used by standardjs (linter)


const utils = require('./utils.js');
const redFetch = require('./red_fetch.js');
const translations = require('./translations.js');
const dataApi = require('./data_api.js');
const authApi = require('./auth_api.js');
const userApi = require('./user_api.js');
const ui = require('./ui.js');
const map = require('./map.js');

window.translations = translations
const taxonomyTranslationsUrls = [ 'https://base.transformap.co/wiki/Special:EntityData/Q5.json', 'https://raw.githubusercontent.com/TransforMap/transformap-viewer/Q5-fallback.json' ];

if ($ENVSTATIC_MOCK_AJAX === "true"){
  console.log("integrating xhook and mocking ajax calls");
  require('xhook');
  require('../fixtures/intercept_ajax.js');
}

module.exports = function () {
  console.log('editor initialize start');

  const place = utils.getUrlVars()['place'];

  var startLang = translations.selectAllowedLang(translations.current_lang);
  console.log('lang on start: ' + startLang);
  console.log(translations.supported_languages);

  document.getElementById('plus').onclick = ui.addFreeTagsRow;

  if (place) {
    dataApi.getPOI(place,ui.fillForm);
  }

  ui.addLanguageSwitcher();
  translations.fetchAndSetNewTranslation = translations.fetchAndSetNewTranslation;

  redFetch(taxonomyTranslationsUrls,
    translations.initializeTranslatedTOIs,
    function (error) {
      console.error('none of the lang init data urls available');
    });

  document.getElementById('save').onclick = ui.clickSubmit;
  document.getElementById('delete').onclick = ui.clickDelete;
  document.getElementById('coordsearch').onclick = ui.clickSearch;
  document.getElementById('newmedia').onclick = ui.clickNewMedia;
  document.getElementById('loginbutton').onclick = ui.toggleLoginButton;
  document.onkeypress = ui.stopRKey;
  document.getElementById('mediacancel').onclick = ui.clickMediaCancel;
  document.getElementById('mediasave').onclick = ui.clickMediaSave;

  ui.toggleLoginButton();

  map.initMap();

  console.log('editor initialize end');

};
