import React, { memo } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'

/**
 * Props types
 */
type ButtonComponentProps = {
    children: any,
    action: () => void
}

/**
 * Button Component
 * @component
 * @description Button Component
 * @param {any} children - button content
 * @param {function} action - button action
 * @returns {object} - return component with children
 */
const ButtonComponent = memo<ButtonComponentProps>(({
    children,
    action
}) => {
    return (
        <TouchableOpacity
            onPress={action}
            style={styles.button}>
            {children}
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
        color: '#ffffff',
        backgroundColor: '#8685ef'
    }
})

export default ButtonComponent
