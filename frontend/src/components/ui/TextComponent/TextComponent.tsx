import React, { memo } from 'react'
import { Text } from 'react-native'
import { message } from 'helpers/getTranslation'

type TextComponentProps = {
  text: string
}

/**
 * function that returns a text
 * @property {Function} TextComponent - Function
 * @param text - Text for component
 * @returns - Text component
 */
const TextComponent = memo<TextComponentProps>(({ text }) => {
  return <Text>{message(text)}</Text>
})

export default TextComponent
