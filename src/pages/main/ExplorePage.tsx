import { View, Text, ScrollView, Image, RefreshControl, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";


import firestore from "@react-native-firebase/firestore";
import { ArrowRight } from "phosphor-react-native";
import { formatTimeStamp } from "@/utils/strings";

const ExplorePage = () => {
  const [posts, setPosts] = useState([] as any[]);
  const [loading, setLoading] = useState(false);

  const init = async () => {
    setLoading(true)

    try {
      const res = await firestore().collection("blog_posts").get();
      setPosts(res.docs.map((doc) => doc.data()));
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <SafeAreaView className="bg-slate-300 flex-1">
      <ScrollView
        refreshControl={<RefreshControl refreshing={loading} onRefresh={init} />}
        contentContainerStyle={{
          padding: 10,
          gap: 10,
        }}
      >
        {
          posts.map((post, index) => (
            <View key={index} className="border-2 rounded-lg bg-white p-2" style={{ gap: 2 }}>
              <Image source={{ uri: post?.image }} height={340} />
              <View>
                <Text className="text-xl font-bold">{post?.title}</Text>
                <Text>{post?.description}</Text>
              </View>
              <View className="justify-between flex-row">
                <Text>{formatTimeStamp(post?.date ?? '')}</Text>
                <ArrowRight />
              </View>
            </View>
          ))
        }
      </ScrollView >
    </SafeAreaView>
  );
};

export default ExplorePage;
