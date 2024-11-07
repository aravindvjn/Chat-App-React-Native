import React, { useState } from "react";
import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import Avatar from "../../Components/Avatar/Avatar";
import { uploadProfilePicture } from "../../Global/Firebase/Firebase";
import PopUp from "../../Components/PopUp/PopUp";
import { authFunction } from "../../Global/Services/authFunction";
import * as ImagePicker from "expo-image-picker";

const SetProfile = ({ route, navigation }) => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [input, setInput] = useState({
    profile_pic_url: "",
    bio: "",
    ...route?.params?.state,
  });

  const handlePreview = async () => {
    try {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Permission to access media library is required!");
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1,
      });

      if (!result.cancelled) {
        console.log("hello");
        const file = result.assets[0];

        console.log(file);
        if (file.uri && input.username) {
          setLoading(true);
          uploadProfilePicture(file, input.username).then((url) => {
            if (url) {
              setInput({ ...input, profile_pic_url: url });
              setLoading(false);
            }
          });
        }
      } else {
        console.log("User cancelled image picker");
      }
    } catch (err) {
      console.log("Error in handle Preview");
    }
  };

  const bioHandler = (text) => {
    setInput({ ...input, bio: text });
  };

  const submitHandler = async () => {
    setLoading(true);
    const response = await authFunction(input, "Register");
    setLoading(false);
    if (response.status === 200) {
      navigation.navigate("Home");
    } else {
      setMessage(response.message);
    }
  };

  return (
    <View style={styles.container}>
      {message && <PopUp message={message} setMessage={setMessage} />}
      <Text style={styles.label}>Profile Picture</Text>
      <Avatar uri={input.profile_pic_url} size={2} />

      <TouchableOpacity
        style={styles.uploadButton}
        onPress={handlePreview}
        disabled={loading}
      >
        <Text style={styles.uploadText}>Click to upload</Text>
      </TouchableOpacity>

      <View style={styles.bioContainer}>
        <Text style={styles.label}>Bio:</Text>
        <TextInput
          value={input.bio}
          onChangeText={bioHandler}
          style={styles.textInput}
          placeholder="What's on your mind"
          multiline
        />
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#fff" />
      ) : (
        <TouchableOpacity style={styles.submitButton} onPress={submitHandler}>
          <Text style={styles.submitText}>Create Account</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  label: {
    color: "#fff",
    fontSize: 18,
    marginBottom: 8,
  },
  uploadButton: {
    marginTop: 20,
    width: "80%",
    height: 60,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  uploadText: {
    color: "#555",
    fontSize: 16,
  },
  bioContainer: {
    width: "100%",
    marginVertical: 20,
  },
  textInput: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    height: 80,
    textAlignVertical: "top",
  },
  submitButton: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 8,
    width: "80%",
    alignItems: "center",
    marginTop: 20,
  },
  submitText: {
    color: "#000",
    fontSize: 16,
  },
});

export default SetProfile;
