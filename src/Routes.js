import React, { useContext, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./pages/Home/Home";
import { UserContext } from "./Global/Context/Context";
import Auth from "./pages/Auth/Auth";
import Profile from "./pages/Profile/Profile";
import { getUser } from "./Global/Services/getUser";
import ChatRoom from "./pages/ChatRoom/ChatRoom";
import Notification from "./pages/Notification/Notification";

const Stack = createNativeStackNavigator();
const Routes = () => {
  const { user, setUser } = useContext(UserContext);
  useEffect(() => {
    const fetchUser = async () => {
      setUser(await getUser());
    };
    fetchUser();
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        {user ? (
          <>
          <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="ChatRoom" component={ChatRoom} />
            <Stack.Screen name="Notification" component={Notification} />
          </>
        ) : (
          <Stack.Screen name="Auth" component={Auth} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
