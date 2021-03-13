import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import messeges_en from './en.json'
import messeges_pl from './pl.json'

export default function message(message: any) {
    i18n.translations = {
        en: messeges_en,
        pl: messeges_pl,
    };

    i18n.locale = Localization.locale;

    i18n.fallbacks = true;

    return i18n.t(message)
}
