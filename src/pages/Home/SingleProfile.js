import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Avatar from "../../Components/Avatar/Avatar";

const SingleProfile = ({
  username,
  name,
  last_message,
  last_message_sent_at,
  last_message_is_read,
}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={{ fontWeight: "bold",fontSize:15,marginBottom:5 }}>{name}</Text>
        <Text style={styles.text}>{last_message}</Text>
        <Text style={styles.text}>{last_message_sent_at}</Text>
      </View>
      <View>
        <Avatar />
      </View>
    </View>
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
  text: {
    opacity: 0.5,
    fontSize:12
  },
});
