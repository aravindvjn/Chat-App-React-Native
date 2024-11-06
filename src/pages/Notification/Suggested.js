import React, { useEffect, useState } from "react";
import { ScrollView, Text, Touchable, View } from "react-native";
import { AppName } from "../../Global/Links/Links";
import api from "../../Global/Services/services";
import SingleProfiles from "./SingleProfiles";
import { TouchableOpacity } from "react-native";

const Suggested = ({ navigation }) => {
  const [number, setNumber] = useState(3);
  const [suggestion, setSuggestion] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchSuggestion = async (n) => {
      setLoading(true);
      const response = await api.get("/friends/all-friends/" + n);
      if (response.status === 201) {
        setSuggestion(response.data);
      } else {
        console.log(response.data.message);
      }
      setLoading(false);
    };
    fetchSuggestion(number);
  }, [number]);
  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: "700", paddingVertical: 10 }}>
        New to {AppName}
      </Text>
      {suggestion?.length > 0 &&
        suggestion.map((profile) => {
          return (
            <SingleProfiles
              size={0.8}
              navigation={navigation}
              key={profile.user_id}
              {...profile}
            />
          );
        })}
      {suggestion?.length % 3 === 0 && !loading ? (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setNumber(number + 3)}
        >
          <Text style={{ color: "dodgerblue", textAlign: "center" }}>
            SEE MORE
          </Text>
        </TouchableOpacity>
      ) : (
        <Text style={{textAlign:'center',opacity:0.6}}>Loading...</Text>
      )}
    </View>
  );
};

export default Suggested;
