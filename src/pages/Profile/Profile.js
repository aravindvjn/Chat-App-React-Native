import React from "react";
import { Text, SafeAreaView, Platform, StatusBar, View } from "react-native";
import { backgroundColor } from "../../Global/Colors/Colours";
import ProfileMain from "./ProfileMain";
import { hideStatusBar } from "../Home/Home";

const Profile = ({ navigation }) => {
  return (
    <SafeAreaView style={hideStatusBar.style}>
      <ProfileMain navigation={navigation} />
    </SafeAreaView>
  );
};

export default Profile;
