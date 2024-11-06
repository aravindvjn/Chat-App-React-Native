import React, { useContext, useEffect, useState, useRef } from "react";
import {
  Platform,
  SafeAreaView,
  ScrollView,
  View,
  StatusBar,
  Text,
} from "react-native";
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
import api from "../../Global/Services/services";

const ChatRoom = ({ route, navigation }) => {
  const chat_id = route.params.chat_id;
  const { user } = useContext(UserContext);
  const [chats, setChats] = useState([]);
  const [friend, setFriend] = useState({});
  const lastMessageRef = useRef(null);

  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollToEnd({
        behavior: "smooth",
      });
    }
    const fetchFriendName = async () => {
      try {
        const response = await api.get(`/chat/user-details/${chat_id}`);
        if (response.status === 200) {
          setFriend(response.data);
        } else {
          console.log(response.data.message);
        }
      } catch (err) {
        console.log("Error in fetching friend Name.");
      }
    };
    fetchFriendName();
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
          lastMessageRef.current.scrollToEnd({
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
      <ChatHeader name={friend?.name} navigation={navigation} />
      <View style={{ flex: 1, paddingHorizontal: 20, paddingBottom: 60 }}>
        <ScrollView
          style={{ marginTop: 10 }}
          ref={lastMessageRef}
          showsVerticalScrollIndicator={false}
        >
          {chats?.length > 0 &&
            chats.map((chat, index) => {
              return (
                <View key={index}>
                  {index === 0 && chats?.length > 20 && (
                    <Text
                      style={{
                        alignSelf: "center",
                        textAlign: "center",
                        padding: 7,
                        backgroundColor: "rgba(0,0,0,0.2)",
                        marginBottom: 10,
                        borderRadius: 3,
                      }}
                    >
                      Last {chats?.length} messages.
                    </Text>
                  )}
                  <Chats {...chat} />
                  {index === chats.length - 1 && (
                    <Text style={{ alignSelf: "flex-end", opacity: 0.4 }}>
                      {chat?.is_read &&
                        user?.user_id === chat?.sender_id &&
                        "seen"}
                    </Text>
                  )}
                </View>
              );
            })}
        </ScrollView>
      </View>
      <ChatSend
        lastMessageRef={lastMessageRef}
        chat_id={chat_id}
        receiver_id={friend?.user_id}
        user_id={user?.user_id}
      />
    </SafeAreaView>
  );
};

export default ChatRoom;
