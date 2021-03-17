import * as Localization from 'expo-localization'
import i18n from 'i18n-js'
import messeges_en from 'services/i18n/en.json'
import messeges_pl from 'services/i18n/pl.json'
/**
 * Default language is taken from phone settings
 * @example
 * let language = Localization.locale
 * @see  https://developer.atlassian.com/cloud/jira/platform/rest/v3
 * @todo  implement all methods
 */
let language = Localization.locale

/**
 * function that changes the language
 * @param newLang newlang
 */
export const setLanguage = (newLang: string) => {
  language = newLang
}

/**
 * sth here
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
