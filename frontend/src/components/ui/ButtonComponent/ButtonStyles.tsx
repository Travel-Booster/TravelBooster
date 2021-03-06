import { StyleSheet } from 'react-native'
import colors from 'variables/colors'

export default StyleSheet.create({
	button: {
		width: 'auto',
		paddingHorizontal: 20,
		paddingVertical: 8,
		borderRadius: 20,
		alignContent: 'center',
		alignItems: 'center',
	},
	primary: {
		backgroundColor: colors.LIGHT_BUTTON_PRIMARY,
	},
	error: {
		backgroundColor: colors.LIGHT_BUTTON_ERROR,
	},
	auto: {
		width: 'auto',
	},
	full: {
		width: '100%',
	},
})
