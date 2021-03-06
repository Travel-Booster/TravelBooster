import AppLoading from 'expo-app-loading'
import { useFonts } from 'expo-font'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import ButtonComponent from 'components/ui/ButtonComponent'
import DividerComponent from 'components/ui/DividerComponent'
import SpacerComponent from 'components/ui/SpacerComponent'
import TextComponent from 'components/ui/TextComponent'
import colors from 'variables/colors'
import paddings from 'variables/paddings'

const App = () => {
	const [fontsLoaded] = useFonts({
		'montserrat-regular': require('./assets/fonts/Montserrat-Regular.ttf'),
		'montserrat-semi-bold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
		'montserrat-extra-bold': require('./assets/fonts/Montserrat-ExtraBold.ttf'),
	})

	return !fontsLoaded ? (
		<AppLoading />
	) : (
		<View style={styles.container}>
			<TextComponent text="hello" variant="heading" />

			<DividerComponent size="big" />

			<TextComponent text="hello" variant="sub" />

			<DividerComponent />

			<TextComponent text="hello" variant="title" />

			<DividerComponent size="tiny" />

			<Text>
				<TextComponent text="hello" variant="description" />
				<SpacerComponent size="tiny" />
				<TextComponent text="hello" variant="description" />
				<SpacerComponent />
				<TextComponent text="hello" variant="description" />
			</Text>

			<DividerComponent size="small" />

			<TextComponent text="hello" />

			<DividerComponent />

			<ButtonComponent
				action={() => alert('button test')}
				text="button"
			/>

			<DividerComponent />

			<ButtonComponent
				action={() => alert('button test')}
				text="button"
				color="error"
			/>

			<DividerComponent />

			<ButtonComponent
				action={() => alert('button test')}
				text="button"
				width="full"
			/>

			<DividerComponent />

			<ButtonComponent
				action={() => alert('button test')}
				text="button"
				color="error"
				width="full"
			/>
			<StatusBar style="auto" />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: paddings.BIG,
		backgroundColor: colors.LIGHT_MAIN,
		alignItems: 'center',
		justifyContent: 'center',
		fontFamily: 'Regular',
	},
})

export default App
