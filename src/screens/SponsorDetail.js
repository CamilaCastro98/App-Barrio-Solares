import React from 'react';
import { View, Text, StyleSheet, Button, Image} from 'react-native';
import { Provider } from 'react-native-paper';

const SponsorDetail = () => {
  return (
    <Provider>
      {/* Header con el logo */}
      <View style={styles.header}>
        <Image
          source={require('../../assets/logo.png')}
          style={{ width: 100, height: 100 }}
          resizeMode="contain"
        />
      </View>

      {/* Contenido principal */}
      <View style={styles.container}>
        {/* Ubicación */}
        <Text style={styles.location}>📍 Ubicación: Av. Siempre Viva 123</Text>

        {/* Botón: Beneficios Exclusivos */}
        <Button 
          title="Beneficios Exclusivos" 
          onPress={() => console.log("Ver beneficios exclusivos")} 
        />

        {/* Espacio entre botones */}
        <View style={styles.spacer} />

        {/* Botón: Horarios de Atención */}
        <Button 
          title="Horarios de Atención" 
          onPress={() => console.log("Ver horarios de atención")} 
        />
      </View>

      {/* Footer fijo en la parte inferior */}
      <View style={styles.footer}>
        <Button 
          title="CONSUMIR" 
          onPress={() => console.log("consumir")} 
        />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: 'orange',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center', // Centra el contenido verticalmente
    width: '100%', // Ocupar todo el ancho de la pantalla
  },
  footer: {
    position: 'absolute', // Lo fija en la parte inferior
    bottom: 0, // Lo deja pegado abajo
    width: '100%', // Ocupar todo el ancho
    padding: 16, // Espaciado interno
    backgroundColor: 'orange',
    alignItems: 'center', // Centra el botón
  },
  location: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  spacer: {
    height: 20,
  },
});

export default SponsorDetail;
