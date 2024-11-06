import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import Avatar from "../../Components/Avatar/Avatar";
import { TouchableHighlight } from "react-native";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AcceptOrReject from "../../Components/Operations/AcceptOrReject";
import { UserContext } from "../../Global/Context/Context";

const SingleProfiles = ({
  name = "",
  username = "",
  profile_pic_url = "",
  sender_id = "",
  request_id = "",
  user_id = "",
  size = 1,
  setRefresh,
}) => {
  const { user } = useContext(UserContext);
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
          {request_id && sender_id && user && (
            <AcceptOrReject
              setRefresh={setRefresh}
              id={user?.user_id}
              req_id={request_id}
            />
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SingleProfiles;
