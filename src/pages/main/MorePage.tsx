import { View, Text, SafeAreaView} from "react-native";
import React from "react";
import auth from "@react-native-firebase/auth";
import Button from "@/components/lib/Button";

const MorePage = () => {
  return (
    <SafeAreaView className="bg-slate-100 flex-1 p-[10px]">
      <Text>MorePage</Text>

      <Button
        title="Sign out"
        onClick={() => auth().signOut()}
      />

    </SafeAreaView>
  );
};

export default MorePage;
