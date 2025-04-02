import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const IdCard = () => {
  return (
    <View style={styles.screen}>
      {/* Contenedor principal */}
      <View style={styles.container}>
        <Text style={styles.title}>CARNET VIRTUAL</Text>

        {/* Imágenes */}
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/sponsorTemporal.png')}
            style={styles.image}
            resizeMode="contain"
          />
          <Image
            source={require('../../assets/logo.png')}
            style={styles.image}
            resizeMode="contain"
          />
        </View>

        {/* Nombre del usuario */}
        <Text style={styles.name}>Julián Villavicencio Gimenez</Text>

        {/* Código QR */}
        <View style={styles.qrContainer}>
          <QRCode value="usuario 1" size={200} />
        </View>
      </View>

      {/* Footer fijo abajo */}
      <View style={styles.footer}>
        <Button 
          title="VOLVER AL INICIO" 
          onPress={() => console.log("volver al inicio")} 
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems:'center',
    backgroundColor: 'green',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    width:'90%',
    backgroundColor:'pink'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginHorizontal: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  qrContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  footer: {
    backgroundColor: 'orange',
    padding: 16,
    alignItems: 'center',
    width:'100%'
  },
});

export default IdCard;

