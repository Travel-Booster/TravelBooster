import React, { memo } from 'react'
import { Text } from 'react-native'
import { message } from 'helpers/getTranslation'

/**
 * Props types
 */
type TextComponentProps = {
  text: string
}

/**
 * Text Component
 * @component
 * @description Uses message function to return desired text
 * @param {string} text - tranlation from i18n
 * @returns {object} - return component with children
 */
const TextComponent = memo<TextComponentProps>(({ text }) => {
  return <Text>{message(text)}</Text>
})

export default TextComponent
