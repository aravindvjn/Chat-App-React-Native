import React, { useContext, useState } from "react";
import {
  ScrollView,
  View,
  Text,
  Pressable,
  StyleSheet,
  TextInput,
} from "react-native";
import AuthHeading from "./AuthHeading";
import { UserContext } from "../../Global/Context/Context";
import { authFunction } from "../../Global/Services/authFunction";
import api from "../../Global/Services/services";
const Form = ({ navigation }) => {
  const { setUser } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState({
    name: "",
    username: "",
    password: "",
    cpassword: "",
  });
  const [page, setPage] = useState("Login");
  const changeHandler = (field, newtext) => {
    setInput({
      ...input,
      [field]: newtext,
    });
  };
  const handleSubmitCheck = async () => {
    if (page === "Register") {
      const check = /^[a-z0-9_]{7,}$/;
      if (!check.test(input.username)) {
        console.log(
          "The username must contain only lowercase letters, numbers, and underscores, and be more than 6 characters long."
        );
      } else if (
        !input.name ||
        !input.password ||
        !input.username ||
        !input.cpassword
      ) {
        console.log("input field cannot be empty.");
      } else if (input.password.length < 8) {
        console.log("Password must be at least 8 characters long.");
      } else if (input.cpassword !== input.password) {
        console.log(
          "Password do not match. Please make sure both fields are identical"
        );
      } else {
        if (input.username.length >= 6 && page === "Register") {
          const fetchStatus = async () => {
            const response = await api.post("/auth/check-username-status", {
              username: input.username,
            });
            if (response.status === 200) {
              console.log("Username already exists.");
            } else {
              console.log("to Profile");
            }
          };
          fetchStatus();
        }
      }
    } else {
      setLoading(true);
      const response = await authFunction(input, "Login");
      console.log(response);
      if (response.status === 200) {
        setUser({
          username: response.data.username,
          bio: response.data.bio,
          created_at: response.data.created_at,
          profile_pic_url: response.data.profile_pic_url,
          user_id: response.data.user_id,
          name: response.data.name,
        });
        navigation.navigate("Home");
        setLoading(false);
      } else {
        console.log(response.message);
        setLoading(false);
      }
    }
  };
  const handlePage = () => {
    setPage(page === "Login" ? "Register" : "Login");
  };
  return (
    <View style={styles.center}>
      <AuthHeading page={page} />
      {page === "Register" && (
        <>
          <Text style={styles.label}>Name</Text>
          <TextInput
            onChangeText={(text) => changeHandler("name", text)}
            placeholder="name"
            style={styles.input}
            value={input.name}
          ></TextInput>
        </>
      )}
      <Text style={styles.label}>Username</Text>
      <TextInput
        onChangeText={(text) => changeHandler("username", text)}
        placeholder="Username"
        style={styles.input}
        value={input.username}
      ></TextInput>
      <Text style={styles.label}>Password</Text>
      <TextInput
        onChangeText={(text) => changeHandler("password", text)}
        placeholder="Password"
        style={styles.input}
        value={input.password}
        secureTextEntry={true}
      ></TextInput>
      {page === "Register" && (
        <>
          <Text style={styles.label}>Confirm Password</Text>
          <TextInput
            onChangeText={(text) => changeHandler("cpassword", text)}
            placeholder="Confirm Password"
            style={styles.input}
            value={input.cpassword}
            secureTextEntry={true}
          ></TextInput>
        </>
      )}
      <Pressable style={styles.pressable} onPress={handleSubmitCheck}>
        <Text style={{ fontWeight: "bold", fontSize: 15 }}>{page}</Text>
      </Pressable>
      {page === "Login" ? (
        <Text style={styles.text}>
          Don't have an account?
          <Text style={{ fontWeight: "bold" }} onPress={handlePage}>
            {" "}
            Register
          </Text>
        </Text>
      ) : (
        <Text style={styles.text}>
          Already have an account?
          <Text style={{ fontWeight: "bold" }} onPress={handlePage}>
            {" "}
            Login
          </Text>
        </Text>
      )}
    </View>
  );
};

export default Form;
const styles = StyleSheet.create({
  center: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  input: {
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
    paddingLeft: 20,
    width: "80%",
    borderColor: "white",
    backgroundColor: "white",
  },
  text: {
    color: "white",
  },
  pressable: {
    borderRadius: 10,
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "white",
  },
  label: {
    color: "white",
    textAlign: "left",
    width: "80%",
  },
});
