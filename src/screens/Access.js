import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Modal, TouchableWithoutFeedback } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Picker } from '@react-native-picker/picker';
import { loginUser } from '../api/api';

const Access = () => {
  const [user, setUser] = useState('');
  const [name, setName] = useState('');
  const [isUserPickerVisible, setIsUserPickerVisible] = useState(false);
  const [isNamePickerVisible, setIsNamePickerVisible] = useState(false);

  // Función para cerrar el modal sin hacer cambios
  const closePicker = (setIsPickerVisible) => {
    setIsPickerVisible(false);
  };

  const onSubmit = async (values) => {
    try {
      const data = await loginUser(values.email, values.password, values.dni, values.user, values.name);
      console.log('Datos de la respuesta:', data);
      
    } catch (error) {
      console.error('Error en el inicio de sesión:', error);
    }
  };

  return (
    <>
    <View style={styles.header}>
    <Image 
      source={require('../../assets/logo.jpeg')} 
      style={{ width: 100, height: 100 }} 
      resizeMode="contain"
    />
  </View>
    <View style={styles.container}>
      <View>
        <Formik
          initialValues={{ email: '', password: '', dni: '' }}
          validationSchema={Yup.object({
            dni: Yup.string().min(6, 'Mínimo 6 caracteres').required('Requerido'),
            user: Yup.string().nullable(),
            name: Yup.string().nullable(),
          })}
          onSubmit={(values) => {
            console.log('Formulario enviado:', values);
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched, setFieldValue }) => (
            <View>
              {/* Lista Desplegable - Usuario */}
              <Text style={styles.label}>Seleccione representación</Text>
              <TouchableOpacity
                onPress={() => setIsUserPickerVisible(true)}
                style={styles.pickerButton}
              >
                <Text>{user || 'Selecciona un usuario'}</Text>
              </TouchableOpacity>
              
              <Modal 
                transparent={true} 
                visible={isUserPickerVisible} 
                animationType="fade"
                onRequestClose={() => closePicker(setIsUserPickerVisible)}
              >
                <TouchableWithoutFeedback onPress={() => closePicker(setIsUserPickerVisible)}>
                  <View style={styles.modalOverlay} />
                </TouchableWithoutFeedback>
                <View style={styles.modalContent}>
                  <Picker
                    selectedValue={user}
                    onValueChange={(itemValue) => {
                      setUser(itemValue);
                      setFieldValue('user', itemValue); // Actualizamos el valor de 'user' en Formik
                      setIsUserPickerVisible(false);
                    }}
                    style={styles.picker}
                  >
                    <Picker.Item label="Selecciona un usuario" value="" />
                    <Picker.Item label="Usuario 1" value="usuario1" />
                    <Picker.Item label="Usuario 2" value="usuario2" />
                    <Picker.Item label="Usuario 3" value="usuario3" />
                  </Picker>
                  <TouchableOpacity onPress={() => closePicker(setIsUserPickerVisible)} style={styles.cancelButton}>
                    <Text style={styles.cancelButtonText}>Cancelar</Text>
                  </TouchableOpacity>
                </View>
              </Modal>

              {touched.user && errors.user && <Text style={styles.error}>{errors.user}</Text>}

              {/* Lista Desplegable - Nombre */}
              <Text style={styles.label}>Seleccione su nombre</Text>
              <TouchableOpacity
                onPress={() => setIsNamePickerVisible(true)}
                style={styles.pickerButton}
              >
                <Text>{name || 'Selecciona un nombre'}</Text>
              </TouchableOpacity>
              
              <Modal 
                transparent={true} 
                visible={isNamePickerVisible} 
                animationType="fade"
                onRequestClose={() => closePicker(setIsNamePickerVisible)}
              >
                <TouchableWithoutFeedback onPress={() => closePicker(setIsNamePickerVisible)}>
                  <View style={styles.modalOverlay} />
                </TouchableWithoutFeedback>
                <View style={styles.modalContent}>
                  <Picker
                    selectedValue={name}
                    onValueChange={(itemValue) => {
                      setName(itemValue);
                      setFieldValue('name', itemValue); // Actualizamos el valor de 'name' en Formik
                      setIsNamePickerVisible(false); // Cierra el Picker después de seleccionar
                    }}
                    style={styles.picker}
                  >
                    <Picker.Item label="Selecciona un nombre" value="" />
                    <Picker.Item label="Nombre 1" value="nombre1" />
                    <Picker.Item label="Nombre 2" value="nombre2" />
                    <Picker.Item label="Nombre 3" value="nombre3" />
                  </Picker>
                  <TouchableOpacity onPress={() => closePicker(setIsNamePickerVisible)} style={styles.cancelButton}>
                    <Text style={styles.cancelButtonText}>Cancelar</Text>
                  </TouchableOpacity>
                </View>
              </Modal>

              {touched.name && errors.name && <Text style={styles.error}>{errors.name}</Text>}

              {/* Input - DNI */}
              <Text style={styles.label}>Introduzca su DNI</Text>
              <TextInput
                style={styles.input}
                placeholder="Sin puntos ni espacios..."
                secureTextEntry={false}
                onChangeText={handleChange('dni')}
                onBlur={handleBlur('dni')}
                value={values.dni}
              />
              {touched.dni && errors.dni && <Text style={styles.error}>{errors.dni}</Text>}

              {/* Botón de Envío */}
              <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Iniciar Sesión</Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </View>
      <Text style={styles.textBarrio}>Aplicación Oficial del CLUB BARRIO SOLARES</Text>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'blue',
    display:'flex',
    alignItems: 'center',
    width: '100%',
    paddingBottom: 20, 
  },
  textBarrio: {
    color: 'black',
  },
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  picker: {
    height: '70%',
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: 'white'
  },
  pickerButton: {
    height: 40,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    marginTop: 'auto',
    marginBottom: 50,
  },
  cancelButton: {
    marginTop: 10,
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  cancelButtonText: {
    color: '#007bff',
    fontWeight: 'bold',
  },
});

export default Access;
