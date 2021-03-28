import TextComponent from 'components/ui/TextComponent'
import React, { memo } from 'react'
import { TouchableOpacity } from 'react-native'

import styles from './ButtonStyles'

/**
 * Button Component
 * @component
 * @description Button Component
 * @param {string} text - button content
 * @param {function} action - button action
 * @param {string} color - button color, default: 'primary' (optional props)
 * @param {string} width - button width, default: 'auto' (optional props)
 * @returns {object} - return component with children
 */
const ButtonComponent = memo<ButtonComponentProps>(
	({ text, action, color = 'primary', width = 'auto' }) => {
		return (
			<TouchableOpacity
				onPress={action}
				style={{
					...styles.button,
					...styles[color],
					...styles[width],
				}}>
				<TextComponent text={text} variant="button" />
			</TouchableOpacity>
		)
	},
)

/**
 * Props types
 */
type ButtonComponentProps = {
	text: string
	action: () => void
	color?: Colors
	width?: Width
}

/**
 *  Color variant
 */
type Colors = 'primary' | 'error'

/**
 *  Width variant
 */
type Width = 'auto' | 'full'

export default ButtonComponent
