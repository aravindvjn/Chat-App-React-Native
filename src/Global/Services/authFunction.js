import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { authURL } from "../Links/Links";

export const authFunction = async (input, page = "Login") => {
  const endPoint = page === "Register" ? "register" : "login";
  try {
    console.log(authURL + endPoint);
    const response = await axios.post(authURL + endPoint, input);
    if (response.status === 200) {
      await AsyncStorage.setItem("token", response.data.token);
      return response;
    } else {
      console.log("Request failed with status:", response.status);
      return false;
    }
  } catch (error) {
    if (error.response) {
      console.error("Server error:", error.response.data);
    } else {
      console.error("Login error:", error.message);
    }
    return false;
  }
};
