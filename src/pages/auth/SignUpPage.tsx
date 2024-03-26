import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import auth from "@react-native-firebase/auth";

import TextInput from "@/components/lib/TextInput";
import Button from "@/components/lib/Button";
import Routes from "@/constants/routes";
import { useNavigation } from "@react-navigation/native";
import { showToast } from "@/utils/toast";

const SignUpPage = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmationPassword, setConfirmationPassword] = useState("");

  function handleSubmit() {
    if (password.length < 0) {
      showToast("Password too short");
      return;
    }

    if (password !== confirmationPassword) {
      showToast("Passwords do not match!");
      return;
    }

    showToast("Signing up ...");
    auth()
      .createUserWithEmailAndPassword(email.trim(), password.trim())
      .then(() => {
        showToast("User account created & signed in!");
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          showToast("That email address is already in use!");
        }

        if (error.code === "auth/invalid-email") {
          showToast("That email address is invalid!");
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
          type="password"
        />
        <View className="h-4" />

        <TextInput
          label="Confirmation Password"
          placeholder="super secret passcode"
          value={confirmationPassword}
          setValue={setConfirmationPassword}
          type="password"
        />
        {confirmationPassword && password !== confirmationPassword && (
          <Text className="h-4 text-pink-700">
            {" "}
            Passwords do not match password.{" "}
          </Text>
        )}
      </View>

      <View className="flex" style={{ gap: 32 }}>
        <Pressable
          onPress={() => {
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
