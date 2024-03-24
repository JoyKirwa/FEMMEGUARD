import React, { useEffect } from "react";
import IonIcons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";

import Colors from "@/constants/Colors";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof IonIcons>["name"];
  color: string;
}) {
  return <IonIcons size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.white,
        tabBarInactiveTintColor: Colors.blue[100],
        tabBarStyle: { backgroundColor: Colors.primary[500] },
      }}
    >
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="compass" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="network"
        options={{
          title: "Network",
          tabBarIcon: ({ color }) => <TabBarIcon name="people" color={color} />,
        }}
      />
      <Tabs.Screen
        name="more"
        options={{
          title: "Settings & More",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ellipsis-horizontal-sharp" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
