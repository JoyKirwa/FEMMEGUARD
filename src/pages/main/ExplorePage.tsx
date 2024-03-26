import {
  View,
  Text,
  ScrollView,
  Image,
  RefreshControl,
  SafeAreaView,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";

import firestore from "@react-native-firebase/firestore";
import { ArrowRight } from "phosphor-react-native";
import { formatTimeStamp } from "@/utils/strings";
import { useNavigation } from "@react-navigation/native";
import Routes from "@/constants/routes";

const ExplorePage = () => {
  const navigation = useNavigation();

  const [posts, setPosts] = useState([] as any[]);
  const [loading, setLoading] = useState(false);

  const init = async () => {
    setLoading(true);

    try {
      const res = await firestore().collection("blog_posts").get();
      setPosts(res.docs.map((doc) => doc.data()));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <SafeAreaView className="bg-slate-200 flex-1">
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={init} />
        }
        contentContainerStyle={{
          padding: 10,
          gap: 10,
        }}
      >
        {posts.map((post, index) => (
          <Pressable
            onPress={() => {
              navigation.navigate(Routes.BlogPost, { post });
            }}
            key={index}
            className="border-2 rounded-lg bg-white p-2"
            style={{ gap: 12 }}
          >
            <Image
              source={{ uri: post?.image }}
              height={240}
              style={{
                borderRadius: 4,
                borderWidth: 2,
                borderColor: "black",
              }}
            />
            <View>
              <Text className="text-xl font-bold">{post?.title}</Text>
              <Text>{post?.description}</Text>
            </View>
            <View className="justify-between flex-row">
              <Text>{formatTimeStamp(post?.date ?? "")}</Text>
              <ArrowRight weight="bold" />
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ExplorePage;
