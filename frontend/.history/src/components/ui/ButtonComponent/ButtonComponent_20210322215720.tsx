import React, { memo } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'

/**
 * Props types
 */
type ButtonComponentProps = {
    children: any
}

/**
 * Button Component
 * @description Uses message function to return desired text
 * @param {any} children - button content
 * @param {function} onClick - button action
 * @returns {object} - return component with children
 */
const ButtonComponent = memo<ButtonComponentProps>(({ 
    children
}) => {
    return (
        <TouchableOpacity
            onPress={() => console.log('dupa')}
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
        textAlignVertical: 'center',
        textAlignHorizontal: 'center',
        backgroundColor: 'red'
    },
})

export default ButtonComponent
