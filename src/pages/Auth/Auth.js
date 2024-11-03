import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Form from "./Form";
import { useNavigation } from "@react-navigation/native";
const Auth = () => {
  const navigation = useNavigation();

  return (
    <View style={{ backgroundColor: "black", flex: 1 }}>
      <Form navigation={navigation} />
    </View>
  );
};
export default Auth;
