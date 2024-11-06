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
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Search from "./pages/Search/Search";
import { backgroundColor } from "./Global/Colors/Colours";
import SingleUserProfile from "./pages/SingleUser/SingleUserProfile";
import SetProfile from "./pages/Auth/SetProfile";

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

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
            <Stack.Screen name="Main" component={BottomTabNavigator} />
            <Stack.Screen name="ChatRoom" component={ChatRoom} />
            <Stack.Screen
              name="UserProfile"
              component={SingleUserProfile}
              options={{
                headerShown: true,
                title: "",
                backgroundColor: backgroundColor,
              }}
            />
          </>
        ) : (
          <>
            <Stack.Screen name="Auth" component={Auth} />
            <Stack.Screen name="SetProfile" component={SetProfile} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

const BottomTabNavigator = () => (
  <BottomTab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: {
        backgroundColor: backgroundColor,
        height: 60,
      },
    }}
    backBehavior="history"
  >
    <BottomTab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarIcon: ({ focus, color, size }) => (
          <MaterialIcons name="home" size={30} />
        ),
      }}
    />
    <BottomTab.Screen
      name="Search"
      component={Search}
      options={{
        tabBarIcon: ({ focus, color, size }) => (
          <MaterialIcons name="search" size={30} />
        ),
      }}
    />
    <BottomTab.Screen
      name="Notification"
      component={Notification}
      options={{
        tabBarIcon: ({ focus, color, size }) => (
          <MaterialIcons name="notifications" size={30} />
        ),
      }}
    />
    <BottomTab.Screen
      name="Profile"
      component={Profile}
      options={{
        tabBarIcon: ({ focus, color, size }) => (
          <MaterialIcons name="person" size={30} />
        ),
      }}
    />
  </BottomTab.Navigator>
);
