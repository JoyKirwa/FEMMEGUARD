import { View, Text, Pressable } from "react-native";
import React from "react";

interface ButtonProps {
  title?: string;
  onClick: () => void;
}

const Button = (props: ButtonProps) => {
  return (
    <Pressable
      className="px-8 py-3 bg-gray-400 rounded-xl flex items-center border-2 border-b-[4px]"
      onPress={props.onClick}
    >
      <Text className="font-bold text-md text-black text-lg uppercase">
        {props.title}
      </Text>
    </Pressable>
  );
};

export default Button;
