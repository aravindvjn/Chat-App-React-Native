import React, { useEffect, useState } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { backgroundColor } from "../../Global/Colors/Colours";
import api from "../../Global/Services/services";
import { MaterialIcons } from "@expo/vector-icons";
const ChatHeader = ({ chat_id,navigation }) => {
  const [friend, setFriend] = useState({});
  useEffect(() => {
    const fetchFriendName = async () => {
      try {
        const response = await api.get(`/chat/user-details/${chat_id}`);
        if (response.status === 200) {
          setFriend(response.data);
        } else {
          console.log(response.data.message);
        }
      } catch (err) {
        console.log("Error in fetching friend Name.");
      }
    };
    fetchFriendName();
  }, []);
  return (
    <View style={styles.container}>
      <MaterialIcons
        name="arrow-back-ios-new"
        style={styles.arrow}
        size={20}
        onPress={() => navigation.goBack()}
      />
      <Text style={styles.heading}>{friend?.name}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: backgroundColor,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.2)",
    position: "relative",
  },
  heading: {
    fontSize: 16,
    fontWeight: "bold",
  },
  arrow: {
    position: "absolute",
    left: 20,
  },
});

export default ChatHeader;
