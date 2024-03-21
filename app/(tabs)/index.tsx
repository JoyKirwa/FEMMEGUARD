import { StyleSheet, View, Text } from "react-native";

// this is the default screen

export default function ExplorePage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Exploration</Text>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa ducimus
        nulla tenetur distinctio veniam cum. Facilis quisquam distinctio dolore
        ipsam numquam soluta explicabo dolorum laudantium in, esse accusamus,
        doloribus hic?{" "}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
