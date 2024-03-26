import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import auth from "@react-native-firebase/auth";

import TextInput from "@/components/lib/TextInput";
import Button from "@/components/lib/Button";
import Routes from "@/constants/routes";
import { useNavigation } from "@react-navigation/native";

const SignUpPage = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit() {
    console.log("Attempting sign up");
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log("User account created & signed in!");
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          console.log("That email address is already in use!");
        }

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
            navigation.navigate(Routes.Login);
          }}
        >
          <Text className="mx-4 text-slate-600 text-right font-bold italic">
            Already have an account? <Text className="underline"> Log In </Text>{" "}
          </Text>
        </Pressable>
        <Button
          title="Create Account"
          onClick={handleSubmit}
          className="w-full"
          style={{ backgroundColor: "lightblue" }}
        />
      </View>
    </View>
  );
};

export default SignUpPage;
