import { io } from "socket.io-client";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { baseURL } from "../Links/Links";

export let socket = null;

// Connect to the Socket.IO server
export const connectSocket = async () => {
  if (!socket || !socket.connected) {
    console.log("Connecting to Socket.IO server...");
    socket = io(baseURL, {
      auth: {
        token: await AsyncStorage.getItem("token"),
      },
    });

    socket.on("connect", () => {
      console.log('Connected to Socket.IO server');
    });

    socket.on("disconnect", () => {
      console.log('Disconnected from Socket.IO server');
    });
  }
};

// Disconnect from the Socket.IO server
export const disconnectSocket = () => {
  if (socket) {
    socket.disconnect();
    socket = null;
    console.log('Disconnected from Socket.IO server');
  }
};

// Emit an event to the server
export const emitEvent = (event, ...args) => {
  if (socket) {
    socket.emit(event, ...args);
  } else {
    console.warn('Socket is not connected. Unable to emit event.');
  }
};

// Listen for events from the server
export const listenToEvent = (event, callback) => {
  if (socket) {
    socket.on(event, callback);
  } else {
    console.warn('Socket is not connected. Unable to listen to event.');
  }
};

// Remove event listeners
export const removeEventListener = (event) => {
  if (socket) {
    socket.off(event);
    console.log(`Removed listener for event: ${event}`);
  }
};
