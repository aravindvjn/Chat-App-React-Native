import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  Pressable,
  StyleSheet,
  TextInput,
} from "react-native";
import AuthHeading from "./AuthHeading";
const Form = () => {
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
  const handlePage = () => {
    setPage(page === "Login" ? "Register" : "Login");
  };
  return (
    <View style={styles.center}>
        <AuthHeading  page={page} />
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
      <Pressable style={styles.pressable}>
        <Text style={{ fontWeight: "bold", fontSize: 15 }}>{page}</Text>
      </Pressable>
      {page === "Login" ? (
        <Text style={styles.text}>
          Don't have an account?<Text style={{fontWeight:'bold'}} onPress={handlePage}> Register</Text>
        </Text>
      ) : (
        <Text style={styles.text}>
          Already have an account?<Text style={{fontWeight:'bold'}} onPress={handlePage}> Login</Text>
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
    width: "80%",
    borderColor: "white",
    backgroundColor: "white",
  },
  text: {
    color: "white",
  },
  pressable: {
    borderRadius: 10,
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
