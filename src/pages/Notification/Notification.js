import React, { useCallback, useEffect, useState } from "react";
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
import Suggested from "./Suggested";
import { useFocusEffect, useNavigationState } from "@react-navigation/native";

const Notification = ({ navigation }) => {
  const [notification, setNotification] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const fetchNotification = async () => {
    const response = await api.get("/friends/pending-requests");
    if (response.status === 200) {
      setNotification(response.data);
    } else {
      setNotification([]);
      console.log(response.data.message);
    }
  };
  useFocusEffect(
    useCallback(() => {
      fetchNotification();
    }, [refresh])
  );
  return (
    <SafeAreaView
      style={{
        backgroundColor: backgroundColor,
        minHeight: "100%",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <View style={{ flex: 1, paddingHorizontal: 20 }}>
        <Text style={styles.heading}>Notifications</Text>
        <ScrollView>
          <View>
            {notification.length > 0 ? (
              notification.map((noti, index) => {
                return (
                  <SingleProfiles
                    key={index}
                    navigation={navigation}
                    {...noti}
                    request_id={noti?.request_id}
                    sender_id={noti?.sender_id}
                    setRefresh={setRefresh}
                  />
                );
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
    </SafeAreaView>
  );
};

export default Notification;
const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    paddingVertical: 10,
    fontWeight: "700",
  },
});
