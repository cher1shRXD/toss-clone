import {
  Keyboard,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { ThemedText, ThemedView } from "../../../Theme/ThemedComponents";
import { useTheme } from "../../../Theme/ThemeProvider";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./style";
import useLogin from "../../../hooks/auth/useLogin";
import { useNavigation } from "@react-navigation/native";

const Login = () => {

  const { theme } = useTheme();
  const { ...login } = useLogin(); 
  const navigation = useNavigation<any>();

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
            onChangeText={login.handleUsername}
            value={login.username}
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
            onChangeText={login.handlePassword}
            value={login.password}
          />
        </View>
      </Pressable>
      <TouchableOpacity
        style={styles.button}
        onPress={login.submit}
        disabled={login.loginLoading}
      >
        <Text style={{ fontSize: 17 }} disabled={login.loginLoading}>
          {login.loginLoading ? "로그인 중..." : "로그인"}
        </Text>
      </TouchableOpacity>
    </ThemedView>
  );
};

export default Login;
