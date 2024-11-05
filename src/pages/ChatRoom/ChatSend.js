import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { emitEvent } from "../../Global/Services/socket";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { TouchableOpacity } from "react-native";

const ChatSend = ({ lastMessageRef, chat_id, receiver_id, user_id }) => {
  const [message, setMessage] = useState("");
  const handleSubmit =  () => {
    if (!message) return;
    emitEvent("send-message" + user_id, {
      chat_id,
      receiver_id,
      message: message,
    });
    if (lastMessageRef?.current) {
      lastMessageRef.current.scrollToEnd({
        behavior: "smooth",
      });
    }
    setMessage("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={message}
        onChangeText={(text) => setMessage(text)}
        placeholder="Type a message"
      />
      <TouchableOpacity style={styles.sendIcon} activeOpacity={0.6} onPress={handleSubmit}>
        <MaterialIcons name="send" size={30}  />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 5,
    marginHorizontal: 10,
  },
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  sendIcon: {
    position: "absolute",
    right: 17,
    bottom: "50%",
    transform: [{ translateY: 13 }],
  },
});

export default ChatSend;
