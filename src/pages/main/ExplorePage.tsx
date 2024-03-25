import { View, Text, ScrollView, Image } from "react-native";
import React, { useEffect, useState } from "react";


import firestore from "@react-native-firebase/firestore";
import { ArrowRight } from "phosphor-react-native";

const ExplorePage = () => {
  const [posts, setPosts] = useState([] as any[]);

  const init = async () => {
    const res = await firestore().collection("blog_posts").get();
    setPosts(res.docs.map((doc) => doc.data()));
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <ScrollView
      
      contentContainerStyle={{
        padding: 10,
        gap: 10,
      }}
    >
      {posts.map((post, index) => (
        <View key={index} className="border-2 rounded-lg bg-white p-2" style={{ gap: 2 }}>
          <Image className="rounded-md mb-4" source={{ uri: post?.image }} width={"100%"} height={160}/>
          <View>
          <Text className="text-xl font-bold">{post?.title}</Text>
          <Text>{post?.description}</Text>
          </View>
          <View className="justify-between flex-row">
            <Text>{post?.date?.toDate().toString()}</Text>
            <ArrowRight />
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default ExplorePage;
