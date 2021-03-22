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
        <View style={styles.button}>
            <TouchableOpacity
                onPress={() => console.log('dupa')}>
                {children}
            </TouchableOpacity>
        </View>
    )
})

const styles = StyleSheet.create({
    button: {
        marginTop: 50,
        padding: '20px 80px',
        backgroundColor: 'red'
    },
})

export default ButtonComponent
