import { View, Text, Pressable } from "react-native";
import React from "react";

interface ListTileProps {
  title?: string;
  subtitle?: string;
  onClick?: () => void;
  className?: string;
  style?: any;

  leading?: React.ReactNode;
  trailing?: React.ReactNode;
}

const ListTile = (props: ListTileProps) => {
  return (
    <Pressable
      className={`flex flex-row items-center px-4 ${props.className}`}
      style={{ gap: 20, ...props.style }}
      onPress={props.onClick}
    >
      {props.leading}

      <View className="flex-1 py-4">
        <Text className="font-bold text-lg">{props.title}</Text>
        {props.subtitle && (
          <Text className="text-gray-500 text-sm">{props.subtitle}</Text>
        )}
      </View>

      {props.trailing}
    </Pressable>
  );
};

export default ListTile;
