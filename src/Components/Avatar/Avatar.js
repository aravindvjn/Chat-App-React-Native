import React from "react";
import { Image } from "react-native";
const Avatar = ({ uri, height = 94, width = 112 }) => {
  return (
    <Image
      source={
        uri
          ? {
              uri: { uri },
              height: { height },
              width: { width },
            }
          : require("../../../assets/defaultFemaleProfile.png")
      }
      style={{height:height,width:width,borderRadius:10 }}
    />
  );
};

export default Avatar;
