import React, { memo } from 'react'
import { View } from 'react-native'
import styles from './DividerStyles'

/**
 * Divider Component
 * @component
 * @description Divider Component
 * @param {any} size - divider size, default: 'medium' (optional props)
 * @returns {object} - return component with children
 */
const DividerComponent = memo<DividerComponentProps>(
	({ size = 'medium' }) => <View style={styles[size]} />,
)

/**
 * Props types
 */
type DividerComponentProps = {
	size?: Sizes
}

/**
 *  Size variant
 */
type Sizes = 'tiny' | 'small' | 'medium' | 'big'

export default DividerComponent
