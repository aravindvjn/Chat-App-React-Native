import React, { useContext, useState } from "react";
import { SafeAreaView, Platform, StatusBar, StyleSheet } from "react-native";
import { UserContext } from "../../Global/Context/Context";
import HomeHeader from "./HomeHeader";
import AllProfiles from "./AllProfiles";
import { backgroundColor } from "../../Global/Colors/Colours";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={hideStatusBar.style}>
      <HomeHeader />
      <AllProfiles navigation={navigation} />
    </SafeAreaView>
  );
};

export default Home;
export const hideStatusBar = StyleSheet.create({
  style: {
    backgroundColor: backgroundColor,
    minHeight: "100%",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
