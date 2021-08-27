import React from 'react'
import { SafeAreaView } from 'react-native'
import { CalculadoraScreen } from './src/Screens/CalculadoraScreen'
import { styles } from './src/theme/styles'


export const App = () => {
  return (
    <SafeAreaView style={styles.fondo}>

          <CalculadoraScreen/>

    </SafeAreaView>
    
  )
}
