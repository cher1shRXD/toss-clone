import React from "react";
import { StyleSheet } from "react-native";
import { ThemedText, ThemedView } from "../../../Theme/ThemedComponents";

const Profile = () => {
  return <ThemedView style={styles.container}>
    <ThemedText>프로필</ThemedText>
  </ThemedView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Profile;
