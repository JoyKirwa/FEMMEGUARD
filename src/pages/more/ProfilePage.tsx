import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";

import firestore from "@react-native-firebase/firestore";
import auth from "@react-native-firebase/auth";

import TextInput from "@/components/lib/TextInput";
import Button from "@/components/lib/Button";

const ProfilePage = () => {
  const [initializing, setInitializing] = useState(true);
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null as any | null);
  const [userProfile, setUserProfile] = useState(null as any | null);

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  const handleSave = async () => {
    console.log(username);

    firestore()
      .collection("user_profiles")
      .doc(user?.uid)
      .set({
        username,
      })
      .then(() => {
        console.log("Saved!");
      });
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  useEffect(() => {
    const subscriber = firestore()
      .collection("user_profiles")
      .doc(user?.uid)
      .onSnapshot((doc) => {
        setUserProfile(doc.data());
        setUsername(doc.data()?.username);
      });

    return subscriber;
  }, [user]);

  if (initializing) return null;

  return (
    <View className="flex-1 p-4 justify-between">
      <View>
        <TextInput
          value={username}
          setValue={setUsername}
          label="Username"
          placeholder="Enter your username"
        />
      </View>

      <Button
        title="Save"
        onClick={handleSave}
        style={{ backgroudColor: "lightgreen" }}
      />
    </View>
  );
};

export default ProfilePage;
