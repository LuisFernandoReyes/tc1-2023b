import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ImageBackground } from 'react-native';
import fondo from '../../assets/fondo.jpeg'


export default function Indice() {
  const [gradosF, setGradosF] = useState('');
  const [gradosC, setGradosC] = useState('');
  const [resultado, setResultado] = useState('');

  function convertirAFahrenheit() {
    const celsius = parseFloat(gradosC);
    const fahrenheit = (celsius * 9 / 5) + 32;
    setGradosF(fahrenheit.toFixed(2));
    setResultado(`Los ${celsius} grados Celsius son equivalentes a ${fahrenheit.toFixed(2)} grados Fahrenheit.`);
  }

  function convertirACelsius() {
    const fahrenheit = parseFloat(gradosF);
    const celsius = (fahrenheit - 32) * 5 / 9;
    setGradosC(celsius.toFixed(2));
    setResultado(`Los ${fahrenheit} grados Fahrenheit son equivalentes a ${celsius.toFixed(2)} grados Celsius.`);
  }

  return (
    <View style={styles.container}>
      <Image style={styles.fondo} source={fondo} />
      <Text style={styles.title}>CALCULADORA DE GRADOS</Text>

      <TextInput
        style={styles.input}
        value={gradosC}
        onChangeText={(gradosC) => setGradosC(gradosC)}
        placeholder="Ingresa los grados Celsius"
        placeholderTextColor="#FFF"
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.button} onPress={convertirAFahrenheit}>
        <Text style={styles.buttonText}>Convertir a Fahrenheit</Text>
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        value={gradosF}
        onChangeText={(gradosF) => setGradosF(gradosF)}
        placeholder="Ingresa los grados Fahrenheit"
        placeholderTextColor="#FFF"
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.button} onPress={convertirACelsius}>
        <Text style={styles.buttonText}>Convertir a Celsius</Text>
      </TouchableOpacity>

      {resultado && (
        <View style={styles.resultadoContainer}>
          <Text style={styles.resultadoText}>{resultado}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0096d2',
  },
  title: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#ff69b4',
    borderRadius: 10,
    margin: 15,
    padding: 15,
    color: '#fff',
    fontSize: 23,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    padding: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  resultadoContainer: {
    backgroundColor: '#ff69b4',
    borderRadius: 10,
    margin: 15,
    padding: 15,
  },
  resultadoText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  resultadoImagen: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
  fondo: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.5,
  },
});