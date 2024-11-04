import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { backgroundColor } from "../../Global/Colors/Colours";
import { StatusBar } from "expo-status-bar";

const ChatHeader = ({ friendName = "Unavailable" }) => {
    console.log(StatusBar.currentHeight)
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{friendName}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: backgroundColor,
    paddingVertical:20,
    borderBottomWidth:1,
    borderBottomColor:'rgba(0,0,0,0.2)',
  },
  heading:{
    fontSize:16,
    fontWeight:'bold'
  }
});

export default ChatHeader;
