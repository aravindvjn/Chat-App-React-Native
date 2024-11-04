import React from "react";
import { Text, SafeAreaView, Platform, StatusBar, View } from "react-native";
import Footer from "../../Components/Footer/Footer";
import { backgroundColor } from "../../Global/Colors/Colours";
import ProfileMain from "./ProfileMain";

const Profile = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: backgroundColor,
        minHeight: "100%",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
        <ProfileMain navigation={navigation} />
      <Footer navigation={navigation} />
    </SafeAreaView>
  );
};

export default Profile;
