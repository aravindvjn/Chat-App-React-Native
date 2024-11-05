import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Avatar from "../../Components/Avatar/Avatar";
import { TouchableHighlight } from "react-native";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SingleProfiles = ({
  name = "",
  username = "",
  profile_pic_url = "",
  sender_id = "",
  reqest_id = "",
  user_id = "",
  size = 1,
}) => {
  const navigation = useNavigation();
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
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() =>
        navigation.navigate("UserProfile", { id: user_id || sender_id })
      }
    >
      <View style={styles.container}>
        <Avatar uri={profile_pic_url} size={size} />
        <View>
          <Text numberOfLines={1} style={styles.name}>
            {name}
          </Text>
          <Text numberOfLines={1} style={styles.username}>
            @{username}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SingleProfiles;
