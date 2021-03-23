import React from 'react'
import { StatusBar } from 'expo-status-bar'
import AppLoading from 'expo-app-loading'
import { StyleSheet, View } from 'react-native'
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_600SemiBold,
  Montserrat_800ExtraBold
} from '@expo-google-fonts/montserrat'
import TextComponent from 'components/ui/TextComponent'
import ButtonComponent from 'components/ui/ButtonComponent'

const App = () => {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_800ExtraBold
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
    justifyContent: 'center'
  },
})

export default App
