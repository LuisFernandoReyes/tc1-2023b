import { Image, StyleSheet, Text, TextComponent, View } from 'react-native'
import React, { useState } from 'react'
//import layoutStyles from '../Styles/layouts'
import {layoutStyles} from '../Styles/index'
import icon from '../../assets/icon.png'
import RegisterForm from '../components/RegisterForm'
import LoginForm from '../components/LoginForm'
import Indice from '../components/Indice'

export default function Auth() {
  const [showLogin, setShowLogin] = useState(false)
  
  const changeForm=()=>{
  setShowLogin(!showLogin)
  }

  return (
    <View style={layoutStyles.container}>
     
            {showLogin ? 
            <RegisterForm
            chanfeForm={changeForm}
            />
            :
            <LoginForm
            changeForm={changeForm}
            />}
            
    </View>
  )
}

const styles = StyleSheet.create({
  logo:{
    width: '100%',
    height: 100,
    resizeMode: 'contain',
    marginBottom:20
  }
  
});