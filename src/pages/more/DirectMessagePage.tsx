import {
  View,
  Text,
  ScrollView,
  TextInput,
  Pressable,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import auth from "@react-native-firebase/auth";
import firestore, { Filter } from "@react-native-firebase/firestore";
import { PaperPlaneTilt } from "phosphor-react-native";
import { formatTimeStamp, formatTimeStampRelativeTime } from "@/utils/strings";
import { showToast } from "@/utils/toast";

const DirectMessagePage = () => {
  const route = useRoute();
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([] as any[]);

  async function sendMessage() {
    try {
      if (text && auth().currentUser?.uid) {
        const msg = {
          sender: auth().currentUser?.uid,
          receiver: route.params?.user?.uid,
          text,
          location: null,
          timestamp: firestore.FieldValue.serverTimestamp(),
        };

        const res = await firestore().collection("direct_messages").add(msg);
        setText("");
      }
    } catch (e) {
      showToast(e);
    }
  }

  useEffect(() => {
    const subscribe = firestore()
      .collection("direct_messages")
      .onSnapshot((querySnapshot) => {
        const messages = querySnapshot?.docs?.map((doc) => doc.data());
        if (messages) {
          setMessages(messages);
        }
      });

    return () => subscribe();
  }, []);



  function getMergedMessages() {
    return messages
      .sort((a, b) => a.timestamp - b.timestamp)
      .filter(
        (e) =>
          (
            (e.receiver === route.params?.user?.uid &&
              e.sender === auth().currentUser?.uid))
          ||
          (e.sender === route.params?.user?.uid &&
            e.receiver === auth().currentUser?.uid),
      );
  }

  return (
    <View className="flex-1">
      {/*Messages*/}
      <View className="flex-1 bg-green-100 p-2">
        <FlatList
          data={getMergedMessages()}
          renderItem={({ item }) => (
            <Message
              message={item}
              isOwnedByMe={item.sender === auth().currentUser?.uid}
            />
          )}
        />
      </View>

      {/*Message box*/}
      <View className="border-t-2 border-black flex-row h-[64]">
        <TextInput
          value={text}
          onChangeText={(text) => setText(text)}
          className="h-full flex-1 p-4 px-6 bg-white"
          placeholder="Say something"
        />
        <Pressable
          onPress={sendMessage}
          className="h-full border-l-2 py-4 px-6 items-center justify-center bg-green-400"
        >
          <PaperPlaneTilt size={32} weight="bold" color="green" />
        </Pressable>
      </View>
    </View>
  );
};

function Message({ message, isOwnedByMe }) {
  return (
    <View
      className={`
      bg-white px-4 py-2 my-1 border-2 border-b-4 rounded-xl max-w-[80%] w-fit
      ${isOwnedByMe ? "self-end items-end" : "self-start bg-slate-400"}
`}
    >
      <Text
        className={`font-bold ${isOwnedByMe ? "text-black" : "text-slate-900"}`}
      >
        {message.text}
      </Text>
      <Text className="text-gray-500 text-sm">
        {formatTimeStampRelativeTime(message.timestamp)}
      </Text>
    </View>
  );
}

export default DirectMessagePage;
