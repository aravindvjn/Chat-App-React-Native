import React, { useContext } from "react";
import { Dimensions } from "react-native";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { UserContext } from "../../Global/Context/Context";
import { convertToIST } from "../../Global/Services/getDate";

const { width } = Dimensions.get("screen");
const Chats = ({
  chat_id,
  content,
  is_read,
  message_id,
  reciever_id,
  sender_id,
  sent_at,
}) => {
  const { user } = useContext(UserContext);
  const styles = StyleSheet.create({
    container: {
      justifyContent: "center",
      textAlign: "center",
      maxWidth: width * 0.8,
      paddingHorizontal: 15,
      paddingVertical: 10,
      alignSelf: user?.user_id === sender_id ? "flex-end" : "flex-start",
      backgroundColor: user?.user_id === sender_id ? "#BEE3F8" : "#E5E7EB",
      marginBottom: 10,
      borderRadius: 7,
      borderTopRightRadius: user?.user_id === sender_id ? 0 : 10,
      borderTopLeftRadius: user?.user_id === sender_id ? 10 : 0,
    },
  });
  return (
    <View style={styles.container}>
      <Text>{content}</Text>
    </View>
  );
};

export default Chats;
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    textAlign: "center",
    maxWidth: width * 0.8,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});
