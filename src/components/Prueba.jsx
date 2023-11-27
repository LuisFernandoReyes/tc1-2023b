import { Alert, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

export default function Prueba() {
  return (
    <View>
      <Text>Prueba</Text>
      <Button 
        icon="camera" 
        mode ="contained" 
        onPress={() => Alert.alert('Pressed')} 
      > 
        Press me
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({})



//yarn add formik
//yarn add yup