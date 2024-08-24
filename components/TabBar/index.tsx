import { useNavigation, useRoute } from '@react-navigation/native';
import * as S from './style';
import { Ionicons } from '@expo/vector-icons';
import { tabStore } from '../../store/tabStore';
import { useTheme } from '../../Theme/ThemeProvider';
import { ThemedView } from '../../Theme/ThemedComponents';
import { StyleSheet } from "react-native";
import { useEffect } from 'react';

const TabBar = () => {

  const navigation = useNavigation<any>();
  const route = useRoute();

  const setTab = tabStore(state=>state.setTab);
  const tab = tabStore(state=>state.tab);

  const { theme } = useTheme();

  useEffect(() => {
    if (tab === 'home') {
      setTab('HomeScreen');
      navigation.navigate("HomeScreen");
    } else {
      setTab(route.name); 
    }
  }, [route.name]);

  const navTo = (screen: string) => {
    navigation.navigate(screen);
    setTab(screen);
  };

  return (
    <ThemedView style={styles.container}>
      <S.Container borderColor={theme.borderColor}>
        <S.MenuBox
          onPress={() => {
            navTo("HomeScreen");
          }}
          activeOpacity={1}
        >
          <Ionicons
            name={tab === "HomeScreen" ? "home" : "home-outline"}
            size={25}
            style={
              tab === "HomeScreen"
                ? { color: theme.iconColor }
                : { color: "gray" }
            }
          />
          <S.MenuText
            style={
              tab === "HomeScreen"
                ? { color: theme.iconColor }
                : { color: "gray" }
            }
          >
            홈
          </S.MenuText>
        </S.MenuBox>
        <S.MenuBox
          onPress={() => {
            navTo("SettingScreen");
          }}
          activeOpacity={1}
        >
          <Ionicons
            name={tab === "SettingScreen" ? "layers" : "layers-outline"}
            size={25}
            style={
              tab === "SettingScreen"
                ? { color: theme.iconColor }
                : { color: "gray" }
            }
          />
          <S.MenuText
            style={
              tab === "SettingScreen"
                ? { color: theme.iconColor }
                : { color: "gray" }
            }
          >
            증권
          </S.MenuText>
        </S.MenuBox>
        <S.MenuBox
          onPress={() => {
            navTo("SettingScreen");
          }}
          activeOpacity={1}
        >
          <Ionicons
            name={tab === "SettingScreen" ? "construct" : "construct-outline"}
            size={25}
            style={
              tab === "SettingScreen"
                ? { color: theme.iconColor }
                : { color: "gray" }
            }
          />
          <S.MenuText
            style={
              tab === "SettingScreen"
                ? { color: theme.iconColor }
                : { color: "gray" }
            }
          >
            심부름
          </S.MenuText>
        </S.MenuBox>
        <S.MenuBox
          onPress={() => {
            navTo("ProfileScreen");
          }}
          activeOpacity={1}
        >
          <Ionicons
            name={tab === "ProfileScreen" ? "person" : "person-outline"}
            size={25}
            style={
              tab === "ProfileScreen"
                ? { color: theme.iconColor }
                : { color: "gray" }
            }
          />
          <S.MenuText
            style={
              tab === "ProfileScreen"
                ? { color: theme.iconColor }
                : { color: "gray" }
            }
          >
            프로필
          </S.MenuText>
        </S.MenuBox>
        <S.MenuBox
          onPress={() => {
            navTo("SettingScreen");
          }}
          activeOpacity={1}
        >
          <Ionicons
            name={tab === "SettingScreen" ? "settings" : "settings-outline"}
            size={25}
            style={
              tab === "SettingScreen"
                ? { color: theme.iconColor }
                : { color: "gray" }
            }
          />
          <S.MenuText
            style={
              tab === "SettingScreen"
                ? { color: theme.iconColor }
                : { color: "gray" }
            }
          >
            설정
          </S.MenuText>
        </S.MenuBox>
      </S.Container>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 80,
  },
});

export default TabBar;