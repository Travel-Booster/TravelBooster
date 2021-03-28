import * as Localization from 'expo-localization'
import i18n from 'i18n-js'
import messeges_en from 'i18n/en.json'
import messeges_pl from 'i18n/pl.json'

/**
 * Default language is taken from phone settings
 * @type {string}
 * @example 'en-EN'
 * @property {string} language - language that is used in an app
 */
let language: string = Localization.locale

/**
 * Function that changes the language
 * @description setLanguage='en-US'
 * @example 'en-EN'
 * @param {string} newLanguage - desired language
 * @returns - return new language
 */
const setLanguage = (newLanguage: string) => {
	language = newLanguage
}

/**
 * Function that returns message for TextComponent
 * @see TextComponent
 * @param {string} message - message taken from database
 * @returns - return tranlate in locale language
 */
const message = (message: string) => {
	i18n.translations = {
		en: messeges_en,
		pl: messeges_pl,
	}

	/**
	 * Set locale language to i18n
	 */
	i18n.locale = language
	i18n.fallbacks = true

	/**
	 * Function that returns message for TextComponent
	 * @param {string} message - set translation key
	 * @returns {string} - return translate
	 */
	return i18n.t(message)
}

export { setLanguage, message }
