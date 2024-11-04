import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { AppName } from "../../Global/Links/Links";
import api from "../../Global/Services/services";
import SingleProfiles from "./SingleProfiles";

const Suggested = ({navigation}) => {
  const [number, setNumber] = useState(3);
  const [suggestion, setSuggestion] = useState([]);
  useEffect(() => {
    const fetchSuggestion = async (n) => {
      const response = await api.get("/friends/all-friends/" + n);
      if (response.status === 201) {
        setSuggestion(response.data);
      } else {
        console.log(response.data.message);
      }
    };
    fetchSuggestion(number);
  }, []);
  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: "700", paddingVertical: 10 }}>
        New to {AppName}
      </Text>
      {suggestion?.length > 0 &&
        suggestion.map((profile) => {
          return <SingleProfiles size={0.8} navigation={navigation} key={profile.user_id} {...profile} />;
        })}
    </View>
  );
};

export default Suggested;
