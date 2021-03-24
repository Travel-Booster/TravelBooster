import React, { memo } from 'react'
import { View } from 'react-native'
import styles from './DividerStyles'

/**
 * Props types
 */
type DividerComponentProps = {
    size?: string
}

/**
 * Divider Component
 * @component
 * @description Divider Component
 * @param {any} size - divider size
 * @returns {object} - return component with children
 */
const DividerComponent = memo<DividerComponentProps>(({ size }) => {

    /**
     * Get divider size
     */      
    const getDividerSize = () => {
        let dividerSize

        if (size === 'tiny') {
            dividerSize = styles.tiny
        } else if (size === 'small') {
            dividerSize = styles.small
        } else if (size === 'big') {
            dividerSize = styles.big
        } else {
            dividerSize = styles.medium
        }

        return dividerSize
    }

    return (
        <View style={getDividerSize()} />
    )
})

export default DividerComponent
