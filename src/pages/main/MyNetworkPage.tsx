import { View, Text } from "react-native";
import React, { useEffect } from "react";
import FAB from "@/components/lib/FAB";
import { ListPlus } from "phosphor-react-native";

const MyNetworkPage = () => {
  return (
    <View className="flex-1">
      <Text>MyNetworkPage</Text>

      <FAB title="Add new contact" icon={ListPlus} />
    </View>
  );
};

export default MyNetworkPage;
