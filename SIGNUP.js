import React from "react";
import { SafeAreaView, StyleSheet, TextInput,Button,View,Text } from "react-native";

const loginPage = () => {
  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);

  return (

    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.TitleBox}>
        <Text style={styles.Title}>
          The Sri Lankan Ministry of Energy
        </Text>
        <Text style={styles.Title}>
          Fuel Tracker
        </Text>
        </View>
        
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          placeholder="USERNAME"
          value={text}
        />

        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          placeholder="EMAIL"
          value={text}
        />

        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="PASSWORD"
        />

        <View style={styles.btn2}>
        <Button title="SIGN UP"/>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#FF7676",
    padding:50,
  },

  input: {
    width: "100%",
    height: 40,
    margin: 2,
    borderWidth: 1,
    padding: 10,

  },
  
  btn2: {
    width: "100%",
    height: 40,
    margin:2,
  },

  TitleBox:{
    margin:2,
    alignItems: "center",
    marginBottom:30,
  },
  Title:{
    margin:2,
    fontWeight: "bold",
    color: "white",
    fontSize:24,
  },

});

export default loginPage;