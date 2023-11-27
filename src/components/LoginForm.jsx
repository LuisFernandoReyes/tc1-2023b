import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Button} from 'react-native-paper'
import {formStyles} from '../Styles/index'

export default function LoginForm(props) {
  const {changeForm} = props
  return (
    <View>
      <Button 
       mode="contained" 
       style={formStyles.btnRegister}
       onPress={()=> console.log('Presionado')} >
       iniciar sesión
       </Button>

       <Button 
        mode="text" 
        style={formStyles.btnText}
        labelStyle={formStyles.btnTextLabel}
        onPress={changeForm} >
        Registrarse
     </Button>
    </View>
  )
}

const styles = StyleSheet.create({})