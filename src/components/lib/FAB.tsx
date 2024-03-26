import { View, Text, Pressable } from "react-native";
import React from "react";

type FABProps = {
  title?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
};

const FAB = (props: FABProps) => {
  return (
    <Pressable
      onPress={props?.onClick}
      className="bg-blue-100 flex-1 rounded-xl border-2 flex-row items-center justify-center p-4"
      style={{
        position: "absolute",
        right: 10,
        bottom: 10,
        gap: 10,
      }}
    >
      {props?.icon}

      {props?.title && (
        <Text className="font-bold uppercase">{props?.title}</Text>
      )}
    </Pressable>
  );
};

export default FAB;
