import { Image, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation, useNavigationBuilder, useRoute } from "@react-navigation/native";

import Markdown from "react-native-markdown-display";
import { formatTimeStamp } from "@/utils/strings";
import FAB from "@/components/lib/FAB";
import { ArrowLeft } from "phosphor-react-native";

const BlogPostPage = () => {
  const navigation = useNavigation()
  const route = useRoute();
  const post = route.params?.post;

  if (!post) {
    return (
      <View>
        <Text> 404 </Text>
      </View>
    );
  }

  return (
    <View className="flex-1">
      <ScrollView>
        {post?.image && <Image source={{ uri: post?.image }} height={300} />}

        <View className="p-4 bg-white border-t-2 border-t-black mt-[-20]  rounded-t-2xl pb-24" style={{ gap: 20 }}>
          <Text className="text-4xl font-bold">{post?.title}</Text>
          <View className="flex-row justify-between items-center">
            <Text className="italic font-bold"> by {post?.author} </Text>
            <Text className="font-bold"> {formatTimeStamp(post?.timestamp)} </Text>
          </View>
          <Text className="text-lg font-bold text-gray-600 uppercase underline">{post?.description}</Text>

          {/*Content*/}
          <Markdown>{post?.content}</Markdown>
        </View>
      </ScrollView>
      <FAB title="Go back" icon={<ArrowLeft weight="bold" size={20}/>} onClick={navigation.goBack}/>
    </View>
  );
};

export default BlogPostPage;

const styles = StyleSheet.create({});
