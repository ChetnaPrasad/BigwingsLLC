import React,{useState,useRef} from "react";
import { StyleSheet, View } from "react-native";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";

export default function Map(){
    const mapRef = useRef(null);
    const [region, setRegion] = useState({
        latitude: 51.5079145,
        longitude: -0.0899163,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
    const tokyoRegion = {
        latitude: 35.6762,
        longitude: 139.6503,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      };
  return (
    <View style={styles.container}>
   <MapView
      ref={mapRef}
      style={styles.map}
      initialRegion={tokyoRegion} 
      onRegionChangeComplete={(region) => setRegion(region)}
    >
        <Marker coordinate={tokyoRegion} />
      <Marker
    coordinate={{
      latitude: 35.67714827145542,
      longitude: 139.6551462687416,
    }}
  />
    </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      flex: 1, 
      justifyContent: "flex-end",
      alignItems: "center",
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
  });