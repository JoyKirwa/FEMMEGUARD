import { View, Text } from "react-native";
import React, { useState } from "react";
import TextInput from "@/components/lib/TextInput";
import Button from "@/components/lib/Button";
import auth from "@react-native-firebase/auth";

const LogInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit() {
    console.log("Attempting sign up");
    auth()
      .createUserWithEmailAndPassword("jane.doe@example.com", "SuperSecretPassword!")
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
        <TextInput label="Email" placeholder="example@mail.domain" value={email} setValue={setEmail} />
        <View className="h-8" />
        <TextInput label="Password" placeholder="super secret passcode" value={password} setValue={setPassword} />
      </View>

      <Button title="Create Account" onClick={handleSubmit} />
    </View>
  );
};

export default LogInPage;
