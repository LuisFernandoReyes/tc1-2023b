import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Alert, Text, View, TouchableOpacity, TextInput } from 'react-native';

export default function App() {
    const [count, setCount] = useState(0);
    const [user, setUser] = useState('')
    const onPress = () => {
      setCount(prevCount => prevCount + 1)
      console.log(user)
    }
  
    return (
      <View style={styles.container}>
        <View style={styles.countContainer}>
          <Text>Count: {count}</Text>
        </View>


        <View>
          <TextInput
            placeholder = 'Dame el correo'
            style = {styles.input}
            onChange = {(e) => {setUser(e.nativeEvent.text)}}
          />
        </View>

        <View>
          <TextInput
            style = {styles.input}
            placeholder = 'Dame el password'
            secureTextEntry={true}
          />
        </View>


        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text>Press Here</Text>
        </TouchableOpacity>
      </View>
    );
  
};
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 10,
    },
    button: {
      alignItems: 'center',
      backgroundColor: '#0f0',
      padding: 10,
    },
    countContainer: {
      alignItems: 'center',
      padding: 10,
    },

    text: {
      frontSize: 20,
      color: '#f00'
    },

    input: {
      height: 40,
      margin:12,
      borderWidth:1,
      padding:10,
    },

  });