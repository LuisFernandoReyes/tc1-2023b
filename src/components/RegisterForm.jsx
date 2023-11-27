import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, TextInput } from 'react-native-paper'
import {formStyles} from '../Styles/index'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import {registerApi} from '../api/user'

export default function RegisterForm(props) {
  const{changeForm}=props
  
  const formikVar= useFormik({
    initialValues:initialValues(), 
    validationSchema: Yup.object(validationSchema()),

    onSubmit: async values =>{
      //console.log(values)
      try{
        await registerApi(values)
        console.log('OK')
      }catch(error){
        console.log('ALGO ANDA MAL')
      }
    
    }
    
  })

  function initialValues(){
    return {
      username:'',
      email:'',
      password:'',
      repeatPassword:''
    }
  }

  function validationSchema(){
    
    return {
      username: Yup.string()
        .min(2, 'Muy Corto!')
        .max(50, 'Muy largo!')
        .required('Requerido!'),
      email: Yup.string()
        .email('Correo invalido')
        .required('Requerido'),
      password: Yup.string()
        .required('Requerido'),
      repeatPassword: Yup.string()
        .required(true)
        .oneOf([Yup.ref('password')],true)
    }
  }

  return (
    <View>
      <TextInput 
      label = 'Email'
      style={formStyles.input}
      onChangeText={(text)=>formikVar.setFieldValue('email',text)}
      error={formikVar.errors.email}
      />

      <TextInput 
      label = 'Nombre de usuario'
      style={formStyles.input}
      onChangeText={(text)=>formikVar.setFieldValue('username',text)}
      error={formikVar.errors.username}
      />
      <TextInput 
      label = 'Password'
      style={formStyles.input}
      secureTextEntry
      onChangeText={(text)=>formikVar.setFieldValue('password',text)}
      error={formikVar.errors.password}
      />
      <TextInput 
      label = 'Repeat Password'
      style={formStyles.input}
      secureTextEntry
      onChangeText={(text)=>formikVar.setFieldValue('repeatPassword',text)}
      error={formikVar.errors.repeatPassword}
      />

         <Button 
       
         mode="contained" 
         style={formStyles.btnRegister}
         onPress={formikVar.handleSubmit} >
         Registrarse
         </Button>

         <Button 
          mode="text" 
          style={formStyles.btnText}
          labelStyle={formStyles.btnTextLabel}
          onPress={changeForm}>
          Iniciar sesión
       </Button>
    </View>
  )
}

const styles = StyleSheet.create({})
