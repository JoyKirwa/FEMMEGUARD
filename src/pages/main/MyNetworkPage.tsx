import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import { ArrowRight, ListPlus, UserCircle } from "phosphor-react-native";
import { useNavigation } from "@react-navigation/native";

import ListTile from "@/components/lib/ListTile";
import Routes from "@/constants/routes";

const MyNetworkPage = () => {
  const navigation = useNavigation();
  const [users, setUsers] = useState([] as any[]);

  useEffect(() => {
    const unsubscribe = firestore()
      .collection("user_profiles")
      .onSnapshot((querySnapshot) => {
        const users = querySnapshot.docs.map((doc) => {
          return { ...doc.data(), uid: doc.id };
        });

        setUsers(users.filter((e) => e.uid !== auth().currentUser?.uid));
      });

    return () => unsubscribe();
  });

  return (
    <View className="flex-1 bg-slate-200 p-2">
      <FlatList
        data={users}
        renderItem={({ item, index }) => (
          <View
            className={`bg-white border-l-2 border-r-2  
                ${
                  index === 0
                    ? "rounded-t-xl border-y-2"
                    : index === users.length - 1
                      ? "rounded-b-xl  border-b-4"
                      : "border-b-2"
                }
`}
          >
            <ListTile
              leading={<UserCircle weight="duotone" color="gray" size={32} />}
              title={item?.username}
              style={{ borderBottom: 2, borderColor: "black" }}
              onClick={() =>
                navigation.navigate(Routes.DirectMessage, { user: item })
              }
              trailing={<ArrowRight weight="bold" size={24} color="gray" />}
            />
          </View>
        )}
      />
    </View>
  );
};

export default MyNetworkPage;
