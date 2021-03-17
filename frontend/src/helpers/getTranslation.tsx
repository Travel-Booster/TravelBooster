import * as Localization from 'expo-localization'
import i18n from 'i18n-js'
import messeges_en from 'services/i18n/en.json'
import messeges_pl from 'services/i18n/pl.json'
/**
 * Default language is taken from phone settings <br/>
 * Language is used for TextComponent
 * @namespace getTranslation
 * @memberof app.components
 * @protected
 * @see message
 * @see TextComponent
 * @example
 * let language = Localization.locale
 */
let language = Localization.locale

/**
 * Function that changes the language
 * @param newLang newlang
 */
export const setLanguage = (newLang: string) => {
  language = newLang
}

/**
 * Function that returns message in @{language} ${text} `component`
 * @param message msg
 * @returns nothing
 */
export const message = (message: string) => {
  i18n.translations = {
    en: messeges_en,
    pl: messeges_pl,
  }

  i18n.locale = language

  i18n.fallbacks = true
  return i18n.t(message)
}
