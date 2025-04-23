import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import { Provider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native'

const SponsorMenu = () => {
    const navigation = useNavigation()
  return (
    <Provider>
      {/* Header con el logo */}
      <View style={styles.header}>
        <Image
          source={require('../../assets/sponsorTemporal.png')}
          style={{ width: 100, height: 100 }}
          resizeMode="contain"
        />
      </View>

      {/* Contenido principal */}
      <View style={styles.container}>
        {/* Botón: Menu */}
        <Button 
          title="Menu" 
          onPress={() => console.log("Menu")} 
        />

        <View style={styles.spacer} />

        {/* Botón: leer codigo qr */}
        <Button 
          title="Leer codigo qr" 
          onPress={() => navigation.navigate('QRScanner')}
        />

        <View style={styles.spacer} />

        {/* Botón: lista de consumos*/}
        <Button 
        title="Lista de consumos" 
        onPress={() => console.log("Lista de consumos")} 
        />
      </View>

      {/* Footer fijo en la parte inferior */}
      <View style={styles.footer}>
        <Image
            source={require('../../assets/logo.png')}
            style={{ width: 100, height: 100 }}
            resizeMode="contain"
            />
        <Text>GRACIAS POR SER SPONSOR OFICIAL</Text>
            
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
    justifyContent: 'center',
    width: '100%',
  },
  map: {
    width: '90%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  locationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 16,
    backgroundColor: 'orange',
    alignItems: 'center',
  },
  spacer: {
    height: 20,
  },
});

export default SponsorMenu;