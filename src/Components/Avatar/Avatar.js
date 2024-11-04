import React from "react";
import { Image } from "react-native";
const Avatar = ({ uri, size = 1 }) => {
  const width = 112 * size;
  const height = 94 * size;
  return (
    <Image
      source={
        uri
          ? {
              uri: uri,
              height: height,
              width: width,
            }
          : require("../../../assets/defaultFemaleProfile.png")
      }
      style={{ height: height, width: width, borderRadius: 10 }}
    />
  );
};

export default Avatar;
