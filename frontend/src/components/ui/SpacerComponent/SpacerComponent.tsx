import React, { memo } from 'react'
import { View } from 'react-native'
import styles from './SpacerStyles'

/**
 * Props types
 */
type SpacerComponentProps = {
	size?: Sizes
}

/**
 *  Size variant
 */
type Sizes = 'tiny' | 'small' | 'medium'

/**
 * Spacer Component
 * @component
 * @description Spacer Component
 * @param {string} size - spacer size, default: 'medium' (optional props)
 * @returns {object} - return component with children
 */
const SpacerComponent = memo<SpacerComponentProps>(
	({ size = 'medium' }) => <View style={styles[size]} />,
)

export default SpacerComponent
