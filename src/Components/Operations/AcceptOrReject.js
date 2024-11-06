import React, { useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { View } from "react-native";
import api from "../../Global/Services/services";

const AcceptOrReject = ({ req_id, setRefresh }) => {
  const acceptHandler = async () => {
    try {
      const response = await api.post(`/friends/friend-request/${req_id}`);
      console.log(response.data.message);
      setRefresh((prev) => !prev);
    } catch (err) {
      console.log("Error in Accepting Friend Request.");
    }
  };
  const removeHandler = async () => {
    try {
      const response = await api.delete(`/friends/friend-request/${req_id}`);
      console.log(response.data.message);
      setRefresh((prev) => !prev);
    } catch (err) {
      console.log("Error in Rejecting Friend Request.");
    }
  };
  return (
    <View style={OperationStyle.container}>
      <TouchableOpacity activeOpacity={0.8} onPress={acceptHandler}>
        <Text style={[OperationStyle.button, { backgroundColor: "green" }]}>
          Accept
        </Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.8} onPress={removeHandler}>
        <Text style={[OperationStyle.button, { backgroundColor: "red" }]}>
          Reject
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export const OperationStyle = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 10,
  },
  button: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    color: "white",
    fontWeight: "600",
  },
});

export default AcceptOrReject;
