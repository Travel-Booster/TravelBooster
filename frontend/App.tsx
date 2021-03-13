import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { IntlProvider, FormattedMessage } from 'react-intl'
import { messages } from './src/i18n/Config'

const lang = navigator.language

export default function App() {
  return (
    <View style={styles.container}>
      <IntlProvider locale={lang} messages={messages['pl_PL']}>
        <Text>
          <FormattedMessage id='word.hello' />
        </Text>
        <StatusBar style='auto' />
      </IntlProvider>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
