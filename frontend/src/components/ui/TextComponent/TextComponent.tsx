import React, { memo } from 'react'
import { Text } from 'react-native'
import { message } from 'helpers/getTranslation'
import { setCustomText } from 'react-native-global-props'
import {
  normalTextStyles,
  buttonTextStyles
} from './TextVariant'

/**
 * Props types
 */
type TextComponentProps = {
  text: string,
  variant?: string
}

/**
 * Text Component
 * @component
 * @description Uses message function to return desired text
 * @param {string} text - tranlation from i18n
 * @param {string} variant - text variant
 * @returns {object} - return component with children
 */
const TextComponent = memo<TextComponentProps>(({
  text,
  variant
}) => {
  setCustomText(
    variant === 'button'
    ? buttonTextStyles 
    : normalTextStyles
  )
  
  return <Text>{message(text)}</Text>
})

export default TextComponent
