import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Alert, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { Button, PaperProvider } from 'react-native-paper';
import  Prueba from './src/components/Prueba';
import Auth from './src/screens/Auth';

export default function App() {
  const[auth, setAuth] = useState(undefined)
      return (
      <PaperProvider>
        {auth ? <Text>Aplicacion</Text>:<Auth />}
      </PaperProvider>
    );
  
};
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems : 'center', 
      paddingHorizontal: 10,
    },

    
  });