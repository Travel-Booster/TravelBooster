import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import TextComponent from 'components/ui/TextComponent'
import ButtonComponent from 'components/ui/ButtonComponent'

const App = () => {
  return (
    <View style={styles.container}>
      <TextComponent text='hello' />
      <ButtonComponent>
        Click me
      </ButtonComponent>
      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default App
