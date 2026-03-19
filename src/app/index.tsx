import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text className="text-amber-500 bg-black p-3 rounded-md font-bold text-2xl mb-5">
        MARWAN WARRADI
      </Text>
      <Image
        source={require("../../assets/images/icon.png")}
        style={{ width: 200, height: 200, borderRadius: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
