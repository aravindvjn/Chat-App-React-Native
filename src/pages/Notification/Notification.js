import React, { useEffect, useState } from "react";
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { backgroundColor } from "../../Global/Colors/Colours";
import api from "../../Global/Services/services";
import SingleProfiles from "./SingleProfiles";
import Footer from "../../Components/Footer/Footer";
import Suggested from "./Suggested";

const Notification = ({navigation}) => {
  const [notification, setNotification] = useState([]);
  useEffect(() => {
    const fetchNotification = async () => {
      const response = await api.get("/friends/pending-requests");
      if (response.status === 200) {
        setNotification(response.data);
      } else {
        console.log(response.data.message);
      }
    };
    fetchNotification();
  }, []);
  return (
    <SafeAreaView
      style={{
        backgroundColor: backgroundColor,
        minHeight: "100%",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <View style={{ flex: 1,padding:20 }}>
        <Text style={styles.heading}>Notifications</Text>
        <ScrollView>
          <View>
            {notification.length > 0 ? (
              notification.map((noti) => {
                return <SingleProfiles navigation={navigation} {...noti} />;
              })
            ) : (
              <Text>No Notifications</Text>
            )}
          </View>
          <View>
            <Suggested navigation={notification} />
          </View>
        </ScrollView>
      </View>
      <Footer navigation={navigation} />
    </SafeAreaView>
  );
};

export default Notification;
const styles = StyleSheet.create({
  heading:{
    fontSize:20,
    paddingVertical:10,
    fontWeight:'700'
  },

})
