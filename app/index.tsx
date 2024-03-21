// this is the project root

import { useNavigation } from "expo-router";
import { useEffect } from "react";
import { Text, View } from "react-native";

export default function Root() {
  const navigation = useNavigation();

  // FIXME : implement actual auth state management
  const signedUp = false;

  useEffect(() => {
    console.log("Handling auth state navigation");
    if (signedUp) {
      navigation.navigate("(tabs)");
    } else {
      navigation.navigate("auth/signup");
    }
  }, []);

  return (
    <View>
      <Text> Root page </Text>
    </View>
  );
}
