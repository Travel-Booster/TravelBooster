import React, { memo } from 'react'
import { StyleSheet, Button, View } from 'react-native'

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
            <Button
                onPress={() => console.log('dupa')}
                title={children}
                color="#841584"
                accessibilityLabel="Learn more about this purple button" />
        </View>
    )
})

const styles = StyleSheet.create({
    button: {
        marginTop: 50,
        padding: '20, 80'
        // backgroundColor: 'red'
    },
})

export default ButtonComponent
