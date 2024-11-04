import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Avatar from "../../Components/Avatar/Avatar";

const SingleProfiles = ({
  navigation,
  name = "",
  username = "",
  profile_pic_url = "",
  sender_id = "",
  reqest_id = "",
  size = 1,
}) => {
  const styles = StyleSheet.create({
    container: {
      paddingVertical: 10 * size,
      flexDirection: "row",
      gap: 20 * size,
      justifyContent: "flex-start",
    },
    name: {
      fontWeight: "600",
      fontSize: 18 * size,
    },
    username: {
      color: "rgba(0,0,0,0.5)",
    },
  });

  return (
    <View style={styles.container}>
      <Avatar uri={profile_pic_url} size={size} />
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.username}>@{username}</Text>
      </View>
    </View>
  );
};

export default SingleProfiles;
