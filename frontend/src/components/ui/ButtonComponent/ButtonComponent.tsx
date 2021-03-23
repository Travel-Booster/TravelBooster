import React, { memo } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import colors from 'services/styles/colors'
import TextComponent from 'components/ui/TextComponent'

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
 * @param {string} width - button width, default: 'none'
 * @returns {object} - return component with children
 */
const ButtonComponent = memo<ButtonComponentProps>(({
    text,
    action,
    color,
    width
}) => {
    return (
        <TouchableOpacity
            onPress={action}
            style={{
                ...styles.button,
                backgroundColor: color === 'error'
                    ? colors.LIGHT_BUTTON_ERROR
                    : colors.LIGHT_BUTTON_PRIMARY,
                width: width === 'full'
                    ? '100%'
                    : 'auto'
            }}>
            <TextComponent 
                text={text}
                variant='button' />
        </TouchableOpacity>
    )
})

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 20, 
        alignContent: 'center',
        alignItems: 'center'
    }
})

export default ButtonComponent
