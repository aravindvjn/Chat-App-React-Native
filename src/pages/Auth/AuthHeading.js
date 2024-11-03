import React from "react";
import { Text,StyleSheet } from "react-native";
import { AppName, friendURL } from "../../Global/Links/Links";
const AuthHeading = ({ page }) => {
  return (
    <>
    <Text style={{color:'white',fontWeight:'bold',fontSize:20 }}>{AppName}</Text>
      <Text style={styles.text}>
        {page === "Login"
          ? "Welcome back! Log in to continue your chats and stay connected with your friends."
          : "Create your account and start chatting with friends!"}
      </Text>
    </>
  );
};

export default AuthHeading;
const styles= StyleSheet.create({
    text:{
        color:'white',
        textAlign:'center',
        maxWidth:'75%'
    }
})