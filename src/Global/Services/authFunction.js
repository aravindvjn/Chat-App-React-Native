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
      return response.data.message;
    }
  } catch (error) {
    if (error.response) {
      return error.response.data;
    } else {
      console.error("Login error:", error.message);
    }
    return false;
  }
};
