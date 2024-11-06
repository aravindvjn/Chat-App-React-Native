import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import api from "../../Global/Services/services";
import { hideStatusBar } from "../Home/Home";
import Avatar from "../../Components/Avatar/Avatar";
import Operations from "../../Components/Operations/Operations";

const SingleUserProfile = ({ route,navigation }) => {
  const id = route.params.id;
  const [theUser, setTheUser] = useState();
  useEffect(() => {
    const fetchTheUser = async () => {
      const response = await api.get("/friends/single-user/" + id);

      if (response.status === 201) {
        setTheUser(response.data[0]);
      } else {
        console.log(
          "Something Went Wrong in fetching the single user details."
        );
      }
    };
    fetchTheUser();
  }, []);
  if (!theUser) return;
  return (
    <SafeAreaView style={hideStatusBar.style}>
      <View style={{ flex: 1 }}>
        <ScrollView>
          <View style={styles.container}>
            <Avatar uri={theUser?.profile_pic_url} size={2} />
            <Text style={styles.name}>{theUser?.name}</Text>
            <Text style={styles.username}>@{theUser?.username}</Text>
            <Text style={styles.bio}>{theUser?.bio}</Text>
            <Text style={styles.created_at}>
              Joined on {new Date(theUser?.created_at).toLocaleDateString()}
            </Text>
            <Operations id={id} navigation={navigation} />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default SingleUserProfile;
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 2,
  },
  name: {
    fontWeight: "bold",
    fontSize: 18,
  },
  username: {
    opacity: 0.5,
  },
  bio: {
    paddingTop: 10,
    width: "80%",
    fontStyle: "italic",
    textAlign: "center",
  },
  created_at: {
    fontWeight: "600",
  },
});
