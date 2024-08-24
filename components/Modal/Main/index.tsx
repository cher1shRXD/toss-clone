import { Text, TouchableOpacity, View } from "react-native";
import { ThemedText, ThemedView } from "../../../Theme/ThemedComponents";
import { styles } from "./style";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../../../Theme/ThemeProvider";

const ModalIndex = () => {

  const navigation = useNavigation<any>();
  const { theme } = useTheme();

  return (
    <ThemedView style={styles.container}>
      <View style={styles.titleWrap}>
        <View style={styles.logoWrap}>
          <Ionicons
            name="layers-outline"
            size={45}
            style={[
              theme.backgroundColor === "#1b1b1b"
                ? { color: "white" }
                : { color: "#000" },
              { marginRight: 5 },
            ]}
          />
          <ThemedText style={styles.logoText}>STOCKER</ThemedText>
        </View>
        <ThemedText style={{fontSize:20}}>김민규의 투자이야기</ThemedText>
      </View>
      <View style={styles.buttonWrap}>
        <TouchableOpacity style={[styles.button, { backgroundColor: "gray" }]}>
          <Text style={{ color: "white", fontSize: 17 }}>회원가입</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#E0E5B6" }]}
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text style={{ fontSize: 17 }}>로그인</Text>
        </TouchableOpacity>
      </View>
    </ThemedView>
  );
};

export default ModalIndex;
