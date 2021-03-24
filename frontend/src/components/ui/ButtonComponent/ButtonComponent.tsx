import React, { memo } from 'react'
import { TouchableOpacity } from 'react-native'
// import colors from 'services/styles/colors'
import TextComponent from 'components/ui/TextComponent'
import styles from './ButtonStyles'

/**
 * Props types
 */
type ButtonComponentProps = {
    text: string,
    action: () => void,
    color?: string,
    width?: string
}

/**
 * Button Component
 * @component
 * @description Button Component
 * @param {any} text - button content
 * @param {function} action - button action
 * @param {string} color - button color, default: 'primary'
 * @param {string} width - button width, default: 'auto'
 * @returns {object} - return component with children
 */
const ButtonComponent = memo<ButtonComponentProps>(({
    text,
    action,
    color,
    width
}) => {
    
    /**
     * Get button color and set buttonColor
     */      
    const getButtonColor = () => {
        let buttonColor

        color === 'error'
            ? buttonColor = styles.error
            : buttonColor = styles.primary

        return buttonColor
    }
    
    /**
     * Get button width and set buttonWidth
     */  
    const getButtonWidth = () => {
        let buttonWidth

        width === 'full'
            ? buttonWidth = styles.full
            : buttonWidth = null

        return buttonWidth
    }

    return (
        <TouchableOpacity
            onPress={action}
            style={{
                ...styles.button,
                ...getButtonColor(),
                ...getButtonWidth()
            }}>
            <TextComponent 
                text={text}
                variant='button' />
        </TouchableOpacity>
    )
})

export default ButtonComponent
