import React, { useContext } from "react";
import { ScrollView, StyleSheet, Text, Touchable, View } from "react-native";
import Avatar from "../../Components/Avatar/Avatar";
import { UserContext } from "../../Global/Context/Context";
import { TouchableOpacity } from "react-native";

const ProfileMain = ({ navigation }) => {
  const { user, setUser } = useContext(UserContext);
  return (
    <View style={{ padding: 20 }}>
      <ScrollView>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>
          Account Settings
        </Text>
        <View style={styles.container}>
          <Avatar size={2} uri={user?.profile_pic_url} />
        </View>
        <View style={{ gap: 4, marginBottom: 20 }}>
          <Text style={styles.text}>Name : {user?.name || "Unavailable"}</Text>
          <Text style={styles.text}>
            username : @{user?.username || "unavailable"}
          </Text>
          <Text style={styles.text}>Bio : {user?.bio || "Unavailable"}</Text>
          <Text style={styles.text}>
            Joined on :{" "}
            {new Date(user?.created_at).toLocaleDateString() || "Unavailable"}
          </Text>
        </View>
        <View>
          <Text>Edit Your Profile</Text>
          <TouchableOpacity
            activeOpacity={0.8}
            style={[styles.touchable, { width: 100 }]}
          >
            <Text style={styles.touchableText}>Edit Profile</Text>
          </TouchableOpacity>
          <Text style={{ marginTop: 20 }}>Change Your Password</Text>
          <TouchableOpacity
            activeOpacity={0.8}
            style={[styles.touchable, { width: 160 }]}
          >
            <Text style={styles.touchableText}>Change Password</Text>
          </TouchableOpacity>
          <Text style={{marginTop:20}}>Logout Your Account</Text>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              setUser({});
              navigation.navigate("Auth");
            }}
            style={[styles.touchable, { width: 100 }]}
          >
            <Text style={styles.touchableText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileMain;
const styles = StyleSheet.create({
  container: {
    padding: 30,
    alignItems: "center",
  },
  text: {
    fontSize: 15,
  },
  touchable: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    backgroundColor: "#4CC9FE",
    marginTop: 5,
    borderRadius: 5,
  },
  touchableText: {
    fontWeight: "500",
    color: "white",
    fontSize: 15,
  },
});
