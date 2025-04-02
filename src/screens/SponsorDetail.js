import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
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
        <Text style={styles.locationTitle}>📍 Ubicación</Text>

        {/* Google Maps */}
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: -34.6037, // Latitud ficticia
            longitude: -58.3816, // Longitud ficticia
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
          <Marker
            coordinate={{ latitude: -34.6037, longitude: -58.3816 }}
            title="Av. Siempre Viva 123"
            description="Ubicación del patrocinador"
          />
        </MapView>

        {/* Botón: Beneficios Exclusivos */}
        <Button 
          title="Beneficios Exclusivos" 
          onPress={() => console.log("Ver beneficios exclusivos")} 
        />

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

export default SponsorDetail;
