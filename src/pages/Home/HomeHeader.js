import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AppName } from "../../Global/Links/Links";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const HomeHeader = () => {
  return <View style={styles.container}>
    <Text style={styles.text}>{AppName}</Text>
    <MaterialIcons name="menu" size={30} />
  </View>;
};
export default HomeHeader;
const styles = StyleSheet.create({
  container: {
    padding:20,
    borderBottomWidth:1,
    display:'flex',
    justifyContent:'space-between',
    borderBottomColor:'rgba(0,0,0,0.5)',
    alignItems:'center',
    flexDirection:'row'
  },
  text:{
    fontWeight:'bold',
    fontSize:20
  }
});
