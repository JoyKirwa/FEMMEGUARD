import { View, Text } from "react-native";
import React from "react";
import { GenderFemale } from "phosphor-react-native";

/**
 * # Splash Page
 *
 * determines if user is logged in or not, and redirects to the appropriate page
 */

const Splash = () => {
  return (
    <View className="flex-1 items-center justify-center gap-8 bg-pink-200">
      <GenderFemale size={100} />
      <Text className="text-xl font-black">FEMME GUARD</Text>
    </View>
  );
};

export default Splash;
