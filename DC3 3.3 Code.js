import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <Text style={styles.welcome}>Welcome to the Open university</Text>
      <View style={styles.image}>
        <Image source={{
          width: 150,
          height: 220,
          marginBottom: 50,
          padding: 50,
          alignItems: 'center',
          uri: 'https://www.aaou.org/wp-content/uploads/2021/03/Logo-OUSL-tnsp-1-207x300.png'
          }}
        />
      </View>

      <Text style={styles.description}>"The Open University of Sri Lanka" (OUSL; Sinhala: ශ්‍රී ලංකා විවෘත විශ්වවිද්‍යාලය, Tamil: இலங்கை திறந்த பல்கலைக்கழகம்) is a national university in Sri Lanka. It is unique within the Sri Lankan national university system for being the only university to offer programs of study leading to certificate, diploma, degrees and postgraduate degrees up to PhD level through the Open and Distance Mode of Learning (ODL).[1] The degrees awarded by the university are treated as equivalent to degrees awarded by any other Sri Lankan University under the preview of the University Grants Commission.</Text>
    
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: 'red',
    fontFamily:'arial',
  },

  image: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  description:{
    fontSize:12,
    textAlign: 'center',
    margin: 10,
    color: 'red',
    fontFamily:'arial',
  },
  
});
