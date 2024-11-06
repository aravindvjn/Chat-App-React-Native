import React, { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import { View } from "react-native";
import { OperationStyle } from "./AcceptOrReject";
import api from "../../Global/Services/services";

const AddFriend = ({ id, status, setRefresh }) => {
  const [newStatus, setNewStatus] = useState(status);
  const addFriend = async () => {
    try {
      const response = await api.post("/friends/send-friend-request/", {
        receiver_id: id,
      });
      console.log(response.data.message);
      setNewStatus("");
      setRefresh((prev) => !prev);
    } catch (err) {
      console.log("Error in sending friend request.");
    }
  };
  const removeFriendReq = async () => {
    try {
      const response = await api.delete(`/friends/friend-request/${req_id}`);
      console.log(response.data.message);
      setRefresh((prev) => !prev);
    } catch (err) {
      console.log("Error in sending friend request.");
    }
  };
  if (newStatus === "Requested") {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={OperationStyle.container}
        onPress={removeFriendReq}
      >
        <Text style={[OperationStyle.button, { backgroundColor: "#4CC9FE" }]}>
          Requested
        </Text>
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={OperationStyle.container}
      onPress={addFriend}
    >
      <Text style={[OperationStyle.button, { backgroundColor: "green" }]}>
        AddFriend
      </Text>
    </TouchableOpacity>
  );
};

export default AddFriend;
