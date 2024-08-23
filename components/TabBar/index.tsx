import { useNavigation } from '@react-navigation/native';
import * as S from './style';
import { Ionicons } from '@expo/vector-icons';
import { tabStore } from '../../store/tabStore';
import { useTheme } from '../../Theme/ThemeProvider';
import { ThemedView } from '../../Theme/ThemedComponents';
import { StyleSheet } from "react-native";

const TabBar = () => {

  const navigation = useNavigation<any>();
  const setTab = tabStore(state=>state.setTab);
  const tab = tabStore(state=>state.tab);

  const { theme } = useTheme();

  const navTo = (screen:string,tab:string) => {
    navigation.navigate(screen);
    setTab(tab);
  }

  return (
    <ThemedView style={styles.container}>
      <S.Container borderColor={theme.borderColor}>
        <S.MenuBox
          onPress={() => {
            navTo("HomeScreen", "home");
          }}
        >
          <Ionicons
            name={tab === "home" ? "home" : "home-outline"}
            size={25}
            style={
              tab === "home" ? { color: theme.iconColor } : { color: "gray" }
            }
          />
          <S.MenuText
            style={
              tab === "home" ? { color: theme.iconColor } : { color: "gray" }
            }
          >
            홈
          </S.MenuText>
        </S.MenuBox>
        <S.MenuBox
          onPress={() => {
            navTo("SettingScreen", "myStock");
          }}
        >
          <Ionicons
            name={tab === "myStock" ? "layers" : "layers-outline"}
            size={25}
            style={
              tab === "myStock" ? { color: theme.iconColor } : { color: "gray" }
            }
          />
          <S.MenuText
            style={
              tab === "myStock" ? { color: theme.iconColor } : { color: "gray" }
            }
          >
            증권
          </S.MenuText>
        </S.MenuBox>
        <S.MenuBox
          onPress={() => {
            navTo("SettingScreen", "errand");
          }}
        >
          <Ionicons
            name={tab === "errand" ? "construct" : "construct-outline"}
            size={25}
            style={
              tab === "errand" ? { color: theme.iconColor } : { color: "gray" }
            }
          />
          <S.MenuText
            style={
              tab === "errand" ? { color: theme.iconColor } : { color: "gray" }
            }
          >
            심부름
          </S.MenuText>
        </S.MenuBox>
        <S.MenuBox
          onPress={() => {
            navTo("ProfileScreen", "profile");
          }}
        >
          <Ionicons
            name={tab === "profile" ? "person" : "person-outline"}
            size={25}
            style={
              tab === "profile" ? { color: theme.iconColor } : { color: "gray" }
            }
          />
          <S.MenuText
            style={
              tab === "profile" ? { color: theme.iconColor } : { color: "gray" }
            }
          >
            프로필
          </S.MenuText>
        </S.MenuBox>
        <S.MenuBox
          onPress={() => {
            navTo("SettingScreen", "setting");
          }}
        >
          <Ionicons
            name={tab === "setting" ? "settings" : "settings-outline"}
            size={25}
            style={
              tab === "setting" ? { color: theme.iconColor } : { color: "gray" }
            }
          />
          <S.MenuText
            style={
              tab === "setting" ? { color: theme.iconColor } : { color: "gray" }
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