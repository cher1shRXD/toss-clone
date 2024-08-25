import { StyleSheet, TouchableOpacity } from "react-native";
import { ThemedText, ThemedView } from "../../../Theme/ThemedComponents";
import { userStore } from "../../../store/userStore";
import TabBar from "../../TabBar";
import tokenStore from "../../../store/tokenStore";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import useAuthMe from "../../../hooks/auth/useAuthMe";

const Profile = () => {
  const clearUser = userStore((state) => state.clearUser);
  const user = userStore((state) => state.user);
  const clearToken = tokenStore((state) => state.clearTokens);
  const accessToken = tokenStore((state) => state.accessToken);

  const navigation = useNavigation<any>();
  const { ...auth } = useAuthMe();

  useEffect(() => {
    if (accessToken) {
      auth.authMe();
    }
  }, [accessToken]);

  const logOut = () => {
    clearToken();
    clearUser();
    navigation.navigate("Home");
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.container}>
        <ThemedText>{user.username}</ThemedText>
        <ThemedText>프로필</ThemedText>
        <TouchableOpacity onPress={logOut}>
          <ThemedText>로그아웃</ThemedText>
        </TouchableOpacity>
      </ThemedView>
      <TabBar />
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  main: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Profile;
