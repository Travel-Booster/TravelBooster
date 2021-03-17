import React, { memo } from 'react'
import { Text } from 'react-native'
import { message } from 'helpers/getTranslation'

type TextComponentProps = {
  text: string
}
/**
 * Function that returns a component <br/>
 * Uses message function to return desired text
 * @component
 * @see message
 * @param {string} text - text
 * @returns `<Text>message(text)</Text>`
 */

const TextComponent = memo<TextComponentProps>(({ text }) => {
  return <Text>{message(text)}</Text>
})

export default TextComponent
