import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import SingleProfile from "./SingleProfile";
import api from "../../Global/Services/services";

const AllProfiles = ({navigation}) => {
  const [allProfiles, setAllProfiles] = useState([]);
  useEffect(() => {
    const fetchChats = async () => {
     try{
      const response = await api.get("/chat/user-all-chats");
      if (response.status === 200) {
        setAllProfiles(response.data);
      } else {
        console.log("Failed", response.message);
      }
     }catch(err){
      console.log("Error in fetching chatprofiles")
     }
    };
    fetchChats();
  }, []);

  return (
    <View style={{ flex: 1, paddingBottom: 60 }}>
      <ScrollView>
        {allProfiles?.length > 0 &&
          allProfiles?.map((profile, index) => (
            <SingleProfile key={index} {...profile} navigation={navigation} />
          ))}
      </ScrollView>
    </View>
  );
};

export default AllProfiles;
