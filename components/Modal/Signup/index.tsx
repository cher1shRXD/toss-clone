import React from 'react'
import { ThemedView } from '../../../Theme/ThemedComponents'
import { Keyboard, Pressable, TouchableOpacity, View } from 'react-native'
import { styles } from './style'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'
import { useTheme } from '../../../Theme/ThemeProvider'

const Signup = () => {

  const navigation = useNavigation<any>();
  const { theme } = useTheme();

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
          
        </View>
      </Pressable>
    </ThemedView>
  );
}

export default Signup