import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import SingleProfile from "./SingleProfile";

const AllProfiles = () => {
  const [allProfiles, setAllProfiles] = useState([
    {
      user_id: 1,
      username: "aravind123",
      name: "Aravind Vijayan",
      last_message: "Hai",
      last_message_id: 23,
      last_message_is_read: false,
      last_message_sent_at: '5:67',
    },
    {
      user_id: 1,
      username: "aravind123",
      name: "Aravind Vijayan",
      last_message: "Hai",
      last_message_id: 23,
      last_message_is_read: false,
      last_message_sent_at: '5:67',
    },
    {
      user_id: 1,
      username: "aravind123",
      name: "Aravind Vijayan",
      last_message: "Hai",
      last_message_id: 23,
      last_message_is_read: false,
      last_message_sent_at: '5:67',
    },
    {
      user_id: 1,
      username: "aravind123",
      name: "Aravind Vijayan",
      last_message: "Hai",
      last_message_id: 23,
      last_message_is_read: false,
      last_message_sent_at: '5:67',
    },
    {
      user_id: 1,
      username: "aravind123",
      name: "Aravind Vijayan",
      last_message: "Hai",
      last_message_id: 23,
      last_message_is_read: false,
      last_message_sent_at: '5:67',
    },
    {
      user_id: 1,
      username: "aravind123",
      name: "Aravind Vijayan",
      last_message: "Hai",
      last_message_id: 23,
      last_message_is_read: false,
      last_message_sent_at: '5:67',
    },
    {
      user_id: 1,
      username: "aravind123",
      name: "Aravind Vijayan",
      last_message: "Hai",
      last_message_id: 23,
      last_message_is_read: false,
      last_message_sent_at: '5:67',
    },
    {
      user_id: 1,
      username: "aravind123",
      name: "Aravind Vijayan",
      last_message: "Hai",
      last_message_id: 23,
      last_message_is_read: false,
      last_message_sent_at: '5:67',
    },
    {
      user_id: 1,
      username: "aravind123",
      name: "Aravind Vijayan",
      last_message: "Hai",
      last_message_id: 23,
      last_message_is_read: false,
      last_message_sent_at: '5:67',
    },
    {
      user_id: 1,
      username: "aravind123",
      name: "Aravind Vijayan",
      last_message: "Hai",
      last_message_id: 23,
      last_message_is_read: false,
      last_message_sent_at: '5:67',
    },
    {
      user_id: 1,
      username: "aravind123",
      name: "Aravind Vijayan",
      last_message: "Hai",
      last_message_id: 23,
      last_message_is_read: false,
      last_message_sent_at: '5:67',
    },
    {
      user_id: 1,
      username: "aravind123",
      name: "Aravind Vijayan",
      last_message: "Hai",
      last_message_id: 23,
      last_message_is_read: false,
      last_message_sent_at: '5:67',
    },
    {
      user_id: 1,
      username: "aravind123",
      name: "Aravind Vijayan",
      last_message: "Hai",
      last_message_id: 23,
      last_message_is_read: false,
      last_message_sent_at: '5:67',
    },
    {
      user_id: 1,
      username: "aravind123",
      name: "Aravind Vijayan",
      last_message: "Hai",
      last_message_id: 23,
      last_message_is_read: false,
      last_message_sent_at: '5:67',
    },
    {
      user_id: 1,
      username: "aravind123",
      name: "Aravind Vijayan",
      last_message: "Hai",
      last_message_id: 23,
      last_message_is_read: false,
      last_message_sent_at: '5:67',
    },
  ]);

  return (
    <ScrollView >
      {allProfiles?.length > 0 &&
        allProfiles?.map((profile, index) => (
          <SingleProfile key={index} {...profile} />
        ))}
        <View style={{paddingBottom:140}}></View>
    </ScrollView>
  );
};

export default AllProfiles;
