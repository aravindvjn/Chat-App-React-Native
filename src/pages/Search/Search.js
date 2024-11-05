import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { hideStatusBar } from "../Home/Home";
import api from "../../Global/Services/services";
import SingleProfiles from "../Notification/SingleProfiles";

const Search = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");
  const handleSearch = async (text) => {
    setInput(text);
    if (!text) {
      setSearchResults([]);
    }
    try {
      const response = await api.get(
        `/friends/search-user?search=${encodeURIComponent(text)}`
      );
      if (response.status === 200) {
        setSearchResults(response.data);
        setMessage("");
      } else {
        setSearchResults([]);
        setMessage(response.data.message);
      }
    } catch (err) {
      console.log("Error in the searching.");
    }
  };
  return (
    <ScrollView style={hideStatusBar.style}>
      <View style={styles.container}>
        <TextInput
          value={input}
          style={styles.input}
          onChangeText={handleSearch}
          placeholder="Search..."
        />
        <Text style={{ fontWeight: "500", paddingVertical: 7 }}>
          {input && !message
            ? searchResults?.length > 0
              ? "Search Results"
              : "Loading.."
            : message && "No users found."}
        </Text>
        {input && searchResults?.length > 0 && 
          searchResults?.map((result) => {
            return (
              <SingleProfiles key={result.user_id} {...result} size={0.8} />
            );
          })}
      </View>
    </ScrollView>
  );
};

export default Search;
const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    borderColor: "rgba(0,0,0,2)",
  },
  container: {
    padding: 20,
  },
});
