import axios from 'axios';
import { useState } from 'react';
import tokenStore from '../../store/tokenStore';
import { Alert } from 'react-native';
import { tabStore } from '../../store/tabStore';
import { useNavigation } from '@react-navigation/native';

const useLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginLoading, setLoginLoading] = useState(false);
  const navigation = useNavigation<any>();

  const setAccessToken = tokenStore((state) => state.setAccessToken);
  const setRefreshToken = tokenStore((state) => state.setRefreshToken);
  const setTab = tabStore(state=>state.setTab);


  const handleUsername = (e:string) => {
    setUsername(e);
  }

  const handlePassword = (e:string) => {
    setPassword(e);
  } 

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
        setTab('HomeScreen');
        navigation.navigate('Home');
      }
    } catch (err) {
      Alert.alert("로그인 실패", "아이디 또는 비밀번호를 확인해주세요.");
    }
    setLoginLoading(false);
  }
  return {
    username,
    password,
    handleUsername,
    handlePassword,
    submit,
    loginLoading
  }
}

export default useLogin