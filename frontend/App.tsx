import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import TextComponent from 'components/ui/TextComponent'
import ButtonComponent from 'components/ui/ButtonComponent'

const App = () => {
  return (
    <View style={styles.container}>
      <TextComponent text='hello' />
      <ButtonComponent action={() => alert('button test')}>
        <TextComponent text='button' />
      </ButtonComponent>
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
  },
})

export default App
