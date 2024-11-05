import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Avatar from "../../Components/Avatar/Avatar";
import { convertToIST } from "../../Global/Services/getDate";
import { TouchableOpacity } from "react-native";

const SingleProfile = ({
  navigation,
  username = "",
  friend_name = "Unavailable",
  last_message = "Tap to send a message.",
  last_message_time = 0,
  last_message_is_read = false,
  friend_profile_pic = "",
  chat_id = "",
}) => {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("ChatRoom", {
          chat_id,
        })
      }
      style={styles.container}
    >
      <View>
        <Text style={{ fontWeight: "bold", fontSize: 15, marginBottom: 5 }}>
          {friend_name}
        </Text>
        <Text>
          {last_message
            ? last_message.length > 30
              ? last_message.slice(0, 20) + "..."
              : last_message
            : "Tap to send a message."}
        </Text>
        <Text style={styles.lastTime}>{convertToIST(last_message_time)}</Text>
      </View>
      <View>
        <Avatar uri={friend_profile_pic} />
      </View>
    </TouchableOpacity>
  );
};

export default SingleProfile;
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.1)",
  },
  lastTime: {
    opacity: 0.5,
    fontSize: 12,
  },
});
