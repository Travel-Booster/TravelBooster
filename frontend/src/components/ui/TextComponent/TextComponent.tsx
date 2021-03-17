import React, { memo } from 'react'
import { Text } from 'react-native'
import { message } from 'helpers/getTranslation'

type TextComponentProps = {
  text: string
}
/**
 * @namespace TextComponent
 * @memberof app.components
 */
const TextComponent = memo<TextComponentProps>(({ text }) => {
  return <Text>{message(text)}</Text>
})

export default TextComponent
