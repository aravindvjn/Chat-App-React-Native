import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { backgroundColor } from "../../Global/Colors/Colours";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
const Footer = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <MaterialIcons
        onPress={() => navigation.navigate("Home")}
        name="chat"
        size={30}
      />
      <MaterialIcons name="search" size={30} />
      <MaterialIcons name="notifications" size={30} />
      <MaterialIcons
        onPress={() => navigation.navigate("Profile")}
        name="person"
        size={30}
      />
    </View>
  );
};

export default Footer;
const styles = StyleSheet.create({
  container: {
    position: "absolute",
    right: 0,
    left: 0,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    bottom: 0,
    height: 60,
    flexDirection: "row",
    width: "100%",
    borderTopColor: "rgba(0,0,0,0.5)",
    borderTopWidth: 1,
    backgroundColor: backgroundColor,
  },
});
