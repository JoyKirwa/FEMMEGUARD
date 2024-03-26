import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import auth from "@react-native-firebase/auth";
import Button from "@/components/lib/Button";
import ListTile from "@/components/lib/ListTile";
import { ArrowRight, User } from "phosphor-react-native";
import { useNavigation } from "@react-navigation/native";
import Routes from "@/constants/routes";

const MorePage = () => {
  const navigation = useNavigation();

  const goto = (route: string) => {
    navigation.navigate(route);
  };

  return (
    <SafeAreaView className="bg-slate-200 flex-1 p-[10px]">
      <View className="flex-1 justify-between">
        {/* Options group  */}

        <View className="bg-white rounded-xl border-2 border-b-4">
          <ListTile
            title="Profile"
            subtitle="Edit your user information"
            leading={<User weight="bold" color="gray" />}
            trailing={<ArrowRight weight="bold" size={24} color="gray" />}
            onClick={() => goto(Routes.Profile)}
          />
        </View>

        <Button
          title="Sign out"
          onClick={() => auth().signOut()}
          style={{ backgroundColor: "pink" }}
        />
      </View>
    </SafeAreaView>
  );
};

export default MorePage;
