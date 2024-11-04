import React, { useContext, useEffect, useState, useRef } from "react";
import { Platform, SafeAreaView, ScrollView, View,StatusBar } from "react-native";
import ChatHeader from "./ChatHeader";
import ChatSend from "./ChatSend";
import { backgroundColor } from "../../Global/Colors/Colours";
import {
  connectSocket,
  disconnectSocket,
  emitEvent,
  listenToEvent,
  removeEventListener,
  socket,
} from "../../Global/Services/socket";
import { UserContext } from "../../Global/Context/Context";
import Chats from "./Chats";

const ChatRoom = ({ route,navigation }) => {
  const chat_id = route.params.chat_id;
  const { user } = useContext(UserContext);
  const [chats, setChats] = useState([]);
  const lastMessageRef = useRef(null);

  useEffect(() => {
    const connectAndListen = async () => {
      if (!socket) {
        await connectSocket();
      }

      emitEvent("fetch-messages" + user?.user_id, chat_id);

      listenToEvent("last-30-messages" + user?.user_id, (messages) => {
        setChats(messages);
      });

      listenToEvent("new-message" + chat_id, (message) => {
        setChats((prevMessages) => [...prevMessages, message]);
        if (lastMessageRef.current) {
          lastMessageRef.current.scrollIntoView({
            behavior: "smooth",
          });
        }
      });
    };

    connectAndListen();

    return () => {
      removeEventListener("last-30-messages");
      removeEventListener("new-message");
      disconnectSocket();
    };
  }, [chat_id, user?.user_id]);

  return (
    <SafeAreaView
      style={{
        backgroundColor: backgroundColor,
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <ChatHeader chat_id={chat_id} navigation={navigation} />
      <View style={{ flex: 1,paddingHorizontal:20, paddingBottom:60 }}>
        <ScrollView ref={lastMessageRef} style={{paddingTop:20}} showsVerticalScrollIndicator={false}>
          {chats?.length > 0 &&
            chats.map((chat, index) => {
              return <Chats key={index} {...chat} />;
            })}
        </ScrollView>
      </View>
      <ChatSend />
    </SafeAreaView>
  );
};

export default ChatRoom;
