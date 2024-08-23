import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { ThemedText, ThemedView } from "../../../Theme/ThemedComponents";
import { userStore } from "../../../store/userStore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { modalStore } from "../../../store/modalStore";

const Profile = () => {

  const clearUser = userStore(state=>state.clearUser);
  const user = userStore(state=>state.user);
  const setIsModalVisible = modalStore(state=>state.setIsModalVisible);
  
  const logOut = async () => {
    await AsyncStorage.removeItem('ACCESS_TOKEN');
    await AsyncStorage.removeItem('REFRESH_TOKEN');
    clearUser();
    setIsModalVisible(true);
  }

  return <ThemedView style={styles.container}>
    <ThemedText>{user.username}</ThemedText>
    <ThemedText>프로필</ThemedText>
    <TouchableOpacity onPress={logOut}>
      <ThemedText>로그아웃</ThemedText>
    </TouchableOpacity>
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
