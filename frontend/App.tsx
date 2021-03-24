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
          <TextComponent 
            text='hello'
            variant='heading' />

          <TextComponent 
            text='hello'
            variant='sub' />

          <TextComponent 
            text='hello'
            variant='title' />

          <TextComponent 
            text='hello'
            variant='description' />

          <TextComponent text='hello' />

          <ButtonComponent 
            action={() => alert('button test')}
            text='button' />

          <ButtonComponent 
            action={() => alert('button test')}
            text='button'
            color='error' />

          <ButtonComponent 
            action={() => alert('button test')}
            text='button'
            width='full' />

          <ButtonComponent 
            action={() => alert('button test')}
            text='button'
            color='error'
            width='full' />
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
