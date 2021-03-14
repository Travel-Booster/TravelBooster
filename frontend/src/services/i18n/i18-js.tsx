import * as Localization from 'expo-localization'
import i18n from 'i18n-js'
import messeges_en from './en.json'
import messeges_pl from './pl.json'

//default language is taken from phone settings
let language = Localization.locale

//function that changes the language
const setLanguage = (newLang: string) => {
  language = newLang
}

// setLanguage('en-US')

const message = (message: string) => {
  i18n.translations = {
    en: messeges_en,
    pl: messeges_pl,
  }

  i18n.locale = language

  i18n.fallbacks = true
  return i18n.t(message)
}

export default message
export { setLanguage }
