import { useNavigation } from '@react-navigation/native';
import { StyleSheet } from 'react-native'
import { ThemedText, ThemedView } from '../../../Theme/ThemedComponents';
import Header from '../../Header';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Detail = () => {
  
  const navigation = useNavigation<any>();

  return (
    <ThemedView style={styles.container}>
      <Header title='상세페이지'/>
      <ThemedText>ㅎㅇㅁㅇㅎㅁㄴ</ThemedText>
      <TouchableOpacity onPress={()=>{navigation.navigate('추가페이지')}}>
        <ThemedText>추가페이지</ThemedText>
      </TouchableOpacity>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position:'relative',
    paddingTop:50
  },
});

export default Detail