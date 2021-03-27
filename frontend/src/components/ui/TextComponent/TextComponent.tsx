import React, { memo } from 'react'
import { Text } from 'react-native'
import { message } from 'helpers/getTranslation'
import styles from './TextStyles'

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
 * @param {string} variant - text variant, default: 'normal' (ptional props)
 * @returns {object} - return component with children
 */
const TextComponent = memo<TextComponentProps>(({
  text,
  variant
}) => {
    const getVariant = () => {
      let textVariant

      if (variant === 'heading') {
        textVariant = styles.heading
      } else if (variant === 'sub') {
        textVariant = styles.sub
      } else if (variant === 'title') {
        textVariant = styles.title
      } else if (variant === 'description') {
        textVariant = styles.description
      } else if (variant === 'button') {
        textVariant = styles.button
      } else {
        textVariant = styles.normal
      }

      return textVariant
    }
  
  return <Text style={getVariant()}>{message(text)}</Text>
})

export default TextComponent
