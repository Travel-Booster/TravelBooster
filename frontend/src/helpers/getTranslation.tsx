import * as Localization from 'expo-localization'
import i18n from 'i18n-js'
import messeges_en from 'services/i18n/en.json'
import messeges_pl from 'services/i18n/pl.json'
/**
 * Jira client library
 *
 * @example
 * const jira = new Jira({
 *   host: 'yourhost',
 *   user: 'jhn@doe.com',
 *   token: 'secret',
 * })
 *
 * const projects = await jira.projects()
 *
 * @see  https://developer.atlassian.com/cloud/jira/platform/rest/v3
 * @todo  implement all methods
 */
//default language is taken from phone settings
let language = Localization.locale

//function that changes the language
export const setLanguage = (newLang: string) => {
  language = newLang
}

// setLanguage('en-US')
export const message = (message: string) => {
  i18n.translations = {
    en: messeges_en,
    pl: messeges_pl,
  }

  i18n.locale = language

  i18n.fallbacks = true
  return i18n.t(message)
}
