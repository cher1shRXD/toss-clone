import { Ionicons } from '@expo/vector-icons';
import { ThemedText } from '../../Theme/ThemedComponents';
import { useTheme } from '../../Theme/ThemeProvider';
import * as S from './style';
import { useNavigation } from '@react-navigation/native';

const Header = (props:{title:string}) => {

  const { theme } = useTheme();
  const navigation = useNavigation<any>();

  return (
    <S.Container themeColor={theme.backgroundColor}>
      <S.BackButton onPress={()=>{navigation.goBack()}}>
        <Ionicons
          name="chevron-back-outline"
          size={25}
          style={theme.backgroundColor === "#1b1b1b" ? { color: "white" } : {}}
        />
        <ThemedText style={{ fontSize: 16, fontWeight: 700 }}>
          {props.title}
        </ThemedText>
      </S.BackButton>
    </S.Container>
  );
}

export default Header