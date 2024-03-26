import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import auth from "@react-native-firebase/auth";

import TextInput from "@/components/lib/TextInput";
import Button from "@/components/lib/Button";
import Routes from "@/constants/routes";
import { useNavigation } from "@react-navigation/native";

const LogInPage = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit() {
    console.log("Attempting sign up");
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log("User account signed in!");
      })
      .catch((error) => {
        if (error.code === "auth/invalid-email") {
          console.log("That email address is invalid!");
        }

        console.error(error);
      });
  }

  return (
    <View className="flex flex-1 py-8 px-4 justify-between" style={{ gap: 16 }}>
      <View className="flex flex-col w-full self-center">
        <TextInput
          label="Email"
          placeholder="example@mail.domain"
          value={email}
          setValue={setEmail}
        />
        <View className="h-8" />
        <TextInput
          label="Password"
          placeholder="super secret passcode"
          value={password}
          setValue={setPassword}
        />
      </View>

      <View className="flex" style={{ gap: 32 }}>
        <Pressable
          onPress={() => {
            console.log("rerouting");
            navigation.navigate(Routes.Signup);
          }}
        >
          <Text className="mx-4 text-slate-600 text-right font-bold italic">
            Don't have an account? <Text className="underline"> Sign Up </Text>{" "}
          </Text>
        </Pressable>
        <Button
          title="Log In"
          onClick={handleSubmit}
          className="w-full"
          style={{ backgroundColor: "lightgreen" }}
        />
      </View>
    </View>
  );
};

export default LogInPage;
