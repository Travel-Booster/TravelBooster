import React, { memo } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import TextComponent from 'components/ui/TextComponent'

/**
 * Props types
 */
type ButtonComponentProps = {
    text: string,
    action: () => void
}

/**
 * Button Component
 * @component
 * @description Button Component
 * @param {any} text - button content
 * @param {function} action - button action
 * @returns {object} - return component with children
 */
const ButtonComponent = memo<ButtonComponentProps>(({
    text,
    action
}) => {
    return (
        <TouchableOpacity
            onPress={action}
            style={styles.button}>
            <TextComponent 
                text={text}
                variant='button' />
        </TouchableOpacity>
    )
})

const styles = StyleSheet.create({
    button: {
        marginTop: 50,
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 20, 
        diplay: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#8685ef',
    }
})

export default ButtonComponent
