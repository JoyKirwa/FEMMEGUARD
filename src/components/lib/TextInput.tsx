import { View, Text, TextInput } from "react-native";
import React from "react";

interface FTextInputProps {
  value?: string;
  setValue?: (value: string) => void;
  label?: string;
  placeholder?: string;
  className?: string;
  type?: "text" | "email" | "password";
}

const FTextInput = (props: FTextInputProps) => {
  return (
    <View className={`flex flex-col gap-2 ${props.className}`}>
      {props.label && <Text className="font-semibold">{props.label}</Text>}
      <View className="border-2 rounded-md bg-white">
        <TextInput
          className="px-4 py-2"
          value={props.value}
          onChangeText={props.setValue}
          placeholder={props.placeholder}
          secureTextEntry={props.type === "password"}
        />
      </View>
    </View>
  );
};

export default FTextInput;
