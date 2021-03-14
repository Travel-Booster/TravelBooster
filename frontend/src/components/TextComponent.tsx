import React from 'react'
import message from '../services/i18n/i18-js'
import { Text } from 'react-native'

type TextComponentProps = {
  text: string
}

export const TextComponent = React.memo<TextComponentProps>(({ text }) => {
  return <Text>{message(text)}</Text>
})
