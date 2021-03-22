import React, { memo } from 'react'
import { StyleSheet, Button, View } from 'react-native'

/**
 * Props types
 */
type ButtonComponentProps = {
    children: any,
    // onClick: Function,
    // variant: string,
    // size: string,
    // width: string
}

/**
 * Button Component
 * @description Uses message function to return desired text
 * @param {any} children - button content
 * @param {function} onClick - button action
 * @returns {object} - return component with children
 */
const ButtonComponent = memo<ButtonComponentProps>(({ 
    // children, 
    // onClick, 
    // variant,
    // size,
    // width 
}) => {
    return (
        <View style={styles.button}>
            <Button
            //   onPress={onPressLearnMore}
                title={children}
                color="#841584"
                accessibilityLabel="Learn more about this purple button" />
        </View>
    )
})

const styles = StyleSheet.create({
    button: {
        marginTop: 50,
        // backgroundColor: 'red'
    },
})

export default ButtonComponent
