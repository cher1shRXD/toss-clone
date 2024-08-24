import React, { useEffect, useState } from "react";
import {
  Alert,
  Keyboard,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { userStore } from "../../../store/userStore";
import { ThemedText, ThemedView } from "../../../Theme/ThemedComponents";
import { useTheme } from "../../../Theme/ThemeProvider";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./style";
import axios from "axios";
import tokenStore from "../../../store/tokenStore";
import { useNavigation } from "@react-navigation/native";
import { tabStore } from "../../../store/tabStore";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);

  const setAccessToken = tokenStore((state) => state.setAcessToken);
  const accessToken = tokenStore((state) => state.accessToken);
  const setRefreshToken = tokenStore((state) => state.setRefreshToken);

  const setTab = tabStore(state=>state.setTab);

  const { theme } = useTheme();
  const navigation = useNavigation<any>();

  const setUser = userStore((state) => state.setUser);

  const handleUsername = (e: string) => {
    setUsername(e);
  };

  const handlePassword = (e: string) => {
    setPassword(e);
  };

  const submit = async () => {
    setLoginLoading(true);
    try {
      const res = await axios.post("http://dgsw-local.mcv.kr:8080/auth/login", {
        email: username,
        password,
      });
      if (res) {
        const accessToken = res.data.accessToken;
        const refreshToken = res.data.refreshToken;
        setAccessToken(accessToken);
        setRefreshToken(refreshToken);
      }
    } catch (err) {
      Alert.alert("로그인 실패", "아이디 또는 비밀번호를 확인해주세요.");
    }
    setLoginLoading(false);
  };

  const getUser = async () => {
    try {
      const user = await axios.get("http://dgsw-local.mcv.kr:8080/auth/me", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (user) {
        setUser({
          id: user.data.id,
          username: user.data.email,
        });
        setUsername("");
        setPassword("");
        setTab('HomeScreen');
        navigation.navigate('Home');
      }
    } catch (err) {
      console.error("Failed to fetch user", err);
    }
  };

  useEffect(() => {
    if (accessToken) {
      getUser();
    }
  }, [accessToken]);

  return (
    <ThemedView style={styles.container}>
      <Pressable onPress={Keyboard.dismiss} style={{ flex: 1, width: "100%" }}>
        <View style={styles.inputWrap}>
          <View style={{ marginTop: 20, width: "100%" }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Auth");
              }}
            >
              <Ionicons
                name="chevron-back-outline"
                size={30}
                style={
                  theme.backgroundColor === "#1b1b1b"
                    ? { color: "white" }
                    : { color: "black" }
                }
              />
            </TouchableOpacity>
          </View>
          <View style={styles.logoWrap}>
            <Ionicons
              name="layers-outline"
              size={35}
              style={[
                theme.backgroundColor === "#1b1b1b"
                  ? { color: "white" }
                  : { color: "#000" },
                { marginRight: 5 },
              ]}
            />
            <ThemedText style={styles.logoText}>STOCKER</ThemedText>
          </View>
          <ThemedText style={styles.label}>아이디</ThemedText>
          <TextInput
            style={[
              styles.input,
              theme.backgroundColor === "#1b1b1b"
                ? { color: "white" }
                : { color: "#000" },
            ]}
            onChangeText={handleUsername}
            value={username}
          />
          <ThemedText style={styles.label}>비밀번호</ThemedText>
          <TextInput
            style={[
              styles.input,
              theme.backgroundColor === "#1b1b1b"
                ? { color: "white" }
                : { color: "#000" },
            ]}
            secureTextEntry
            textContentType="password"
            onChangeText={handlePassword}
            value={password}
          />
        </View>
      </Pressable>
      <TouchableOpacity
        style={styles.button}
        onPress={submit}
        disabled={loginLoading}
      >
        <Text style={{ fontSize: 17 }} disabled={loginLoading}>
          {loginLoading ? "로그인 중..." : "로그인"}
        </Text>
      </TouchableOpacity>
    </ThemedView>
  );
};

export default Login;
