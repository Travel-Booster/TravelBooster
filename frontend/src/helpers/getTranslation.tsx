import * as Localization from 'expo-localization'
import i18n from 'i18n-js'
import messeges_en from 'services/i18n/en.json'
import messeges_pl from 'services/i18n/pl.json'
/**
 * Default language is taken from phone settings <br/>
 * @type {string}
 * @property {string} language - language that is used in an app
 */
let language: string = Localization.locale

/**
 * Function that changes the language
 * @param {string} newLanguage - desired language
 * @example
 * setLanguage='en-US'
 */
const setLanguage = (newLanguage: string) => {
  language = newLanguage
}

/**
 * Function that returns message for TextComponent
 * @see TextComponent
 * @param {string} message - message taken from database
 * @returns {string} - message
 */
const message = (message: string) => {
  i18n.translations = {
    en: messeges_en,
    pl: messeges_pl,
  }

  i18n.locale = language

  i18n.fallbacks = true
  return i18n.t(message)
}
export { setLanguage, message }
