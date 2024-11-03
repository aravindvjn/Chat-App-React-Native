import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./pages/Home/Home";
import { UserContext } from "./Global/Context/Context";
import Auth from "./pages/Auth/Auth";
import Profile from "./pages/Profile/Profile";

const Stack = createNativeStackNavigator();
const Routes = () => {
  const { user } = useContext(UserContext);
  return (
    <NavigationContainer>
      {user ? (
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator
          initialRouteName="Auth"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Auth" component={Auth} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Routes;
