import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

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

      <Text style={styles.titleText}>
        Faculty of Engineering {'\n'}
        Bachelor of Software Engineering
      </Text>

      <Text style={styles.UniName}>
        The Open University of Sri Lanka
      </Text>
    
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8b8c81',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  titleText: {
    textAlign: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    color: 'white',
  },

  UniName:{
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 20,
  }
  
});
