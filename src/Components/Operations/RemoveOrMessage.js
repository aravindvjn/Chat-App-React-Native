import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { View } from "react-native";
import { OperationStyle } from "./AcceptOrReject";
import api from "../../Global/Services/services";

const RemoveOrMessage = ({ id, setRefresh, navigation }) => {
  const getChatId = async () => {
    try {
      const response = await api.get(`/chat/get-chat_id/${id}`);
      if (response.status === 200) {
        return response.data.chat_id.chat_id;
      }
    } catch (err) {
      console.log("Error in getting chat id.");
    }
  };
  const removeFriend = async () => {
    try {
      const chat_id = await getChatId();
      const response = await api.delete(`/friends/remove-friend/${chat_id}`);
      setRefresh((prev) => !prev);
      console.log(response.data.message);
    } catch (err) {
      console.log("Error in Removing a friend.");
    }
  };
  return (
    <View style={OperationStyle.container}>
      <TouchableOpacity activeOpacity={0.8} onPress={removeFriend}>
        <Text style={[OperationStyle.button, { backgroundColor: "red" }]}>
          Remove
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={async () => {
          const chat_id = await getChatId();
          navigation.navigate("ChatRoom", {
            chat_id,
          });
        }}
      >
        <Text
          style={[
            OperationStyle.button,
            { backgroundColor: "rgba(0,0,0,0.1)", color: "black" },
          ]}
        >
          Message
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default RemoveOrMessage;
