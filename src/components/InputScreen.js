import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

export default function InputScreen({ route }) {
  const { data } = route.params; // QR escaneado
  const [inputValue, setInputValue] = useState('');

  const handleSave = () => {
    // Lógica para guardar la información
    // Puede ser un simple console.log o una llamada a tu API
    if (inputValue) {
      Alert.alert('Información guardada', `Número ingresado: ${inputValue}`);
      // Aquí puedes realizar la acción de guardado (por ejemplo, guardarlo en el estado o enviarlo a un servidor)
      console.log('Número guardado:', inputValue);
    } else {
      Alert.alert('Error', 'Por favor, ingresa un número');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>QR escaneado: {data}</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Ingresá un número"
        value={inputValue}
        onChangeText={setInputValue}
      />
      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Guardar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    borderColor: '#aaa',
    borderWidth: 1,
    borderRadius: 6,
    padding: 10,
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#1e90ff',
    padding: 10,
    borderRadius: 6,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

