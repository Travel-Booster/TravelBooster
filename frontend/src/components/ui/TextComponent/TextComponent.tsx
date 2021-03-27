import React, { memo } from 'react'
import { Text } from 'react-native'
import { message } from 'helpers/getTranslation'
import styles from './TextStyles'

/**
 * Text Component
 * @component
 * @description Uses message function to return desired text
 * @param {string} text - tranlation from i18n
 * @param {string} variant - text variant, default: 'normal' (optional props)
 * @returns {object} - return component with children
 */
const TextComponent = memo<TextComponentProps>(({
  text,
  variant = 'normal'
}) => <Text style={styles[variant]}>{message(text)}</Text>)

/**
 * Props types
 */
type TextComponentProps = {
  text: string,
  variant?: Variants
}

/**
 *  Text variant
 */
type Variants = 'normal' | 'heading' | 'sub' | 'title' | 'description' | 'button'

export default TextComponent
