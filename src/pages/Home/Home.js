import React, { useContext, useState } from "react";
import { SafeAreaView, Platform, StatusBar } from "react-native";
import { UserContext } from "../../Global/Context/Context";
import HomeHeader from "./HomeHeader";
import AllProfiles from "./AllProfiles";
import Footer from "../../Components/Footer/Footer";
import { backgroundColor } from "../../Global/Colors/Colours";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{
        backgroundColor: backgroundColor,
        minHeight: "100%",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <HomeHeader />
      <AllProfiles />
      <Footer navigation={navigation} />
    </SafeAreaView>
  );
};

export default Home;
