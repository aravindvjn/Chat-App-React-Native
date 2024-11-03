import { StyleSheet, Text, View } from "react-native";
import Routes from "./src/Routes";
import UserProvider from "./src/Global/Context/Context";

export default function App() {
  return (
    <UserProvider>
      <Routes />
    </UserProvider>
  );
}

const styles = StyleSheet.create({});
 