import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { ThemedText, ThemedView } from "../../../Theme/ThemedComponents";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../../../Theme/ThemeProvider";
import { tabStore } from "../../../store/tabStore";
import tokenStore from "../../../store/tokenStore";
import TabBar from "../../TabBar";

const Home = () => {
  const navigation = useNavigation<any>();
  const setTab = tabStore((state) => state.setTab);
  const { theme } = useTheme();

  const [refreshing, setRefreshing] = useState(false);

  const accessToken = tokenStore((state) => state.accessToken);

  useEffect(() => {
    if (!accessToken) {
      navigation.navigate('AuthModal');
    }
  }, [accessToken]);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.header}>
        <Ionicons
          name="layers-outline"
          size={30}
          style={[
            theme.backgroundColor === "#1b1b1b"
              ? { color: "white" }
              : { color: "#000" },
            { marginRight: 5 },
          ]}
        />
        <ThemedText style={styles.logoText}>STOCKER</ThemedText>
      </ThemedView>
      <ScrollView
        style={styles.dashboard}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("MyStock");
          }}
        >
          <View
            style={[
              styles.item,
              { backgroundColor: theme.boxColor, height: 130 },
            ]}
          >
            <ThemedText style={styles.itemTitle}>내 증권</ThemedText>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setTab("errand");
            navigation.navigate("SettingScreen");
          }}
        >
          <View
            style={[
              styles.item,
              { backgroundColor: theme.boxColor, height: 70 },
            ]}
          >
            <ThemedText style={styles.itemTitle}>심부름</ThemedText>
            <ThemedText style={styles.itemContent}>
              0개의 새로운 심부름 요청
            </ThemedText>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setTab("myStock");
            navigation.navigate("ProfileScreen");
          }}
        >
          <View
            style={[
              styles.item,
              { backgroundColor: theme.boxColor, height: 200 },
            ]}
          >
            <ThemedText style={styles.itemTitle}>증권시장</ThemedText>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Account");
          }}
        >
          <View
            style={[
              styles.item,
              { backgroundColor: theme.boxColor, height: 120 },
            ]}
          >
            <ThemedText style={styles.itemTitle}>스톡머니</ThemedText>
          </View>
        </TouchableOpacity>
      </ScrollView>
      <TabBar />
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  header: {
    width: "100%",
    height: 50,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    marginTop: 40,
    paddingHorizontal: 10,
    top: 0,
    zIndex: 99,
  },
  logoText: {
    fontSize: 20,
    fontWeight: "condensedBold",
  },
  dashboard: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 20,
    marginTop: 90,
  },
  item: {
    width: "100%",
    marginBottom: 10,
    borderRadius: 15,
    display: "flex",
    padding: 12,
    paddingHorizontal: 15,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  itemTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  itemContent: {
    fontSize: 12,
    fontWeight: 300,
  },
});

export default Home;
