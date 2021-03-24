import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'
import TextComponent from 'components/ui/TextComponent'
import ButtonComponent from 'components/ui/ButtonComponent'

const App = () => {
  let [fontsLoaded] = useFonts({
    'montserrat-regular': require('./assets/fonts/Montserrat-Regular.ttf'),
    'montserrat-semi-bold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
    'montserrat-extra-bold': require('./assets/fonts/Montserrat-ExtraBold.ttf')
  })

  return (
    !fontsLoaded
      ? <AppLoading />
      : <View style={styles.container}>
          <TextComponent text='hello' />
          <ButtonComponent 
            action={() => alert('button test')}
            text='button' />
          <StatusBar style='auto' />
        </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Regular'
  },
})

export default App
