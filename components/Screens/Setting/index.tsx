import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { ThemedText, ThemedView } from '../../../Theme/ThemedComponents';
import { useTheme } from '../../../Theme/ThemeProvider';
import TabBar from '../../TabBar';

const Setting = () => {

  const { toggleTheme } = useTheme();

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.container}>
        <TouchableOpacity onPress={toggleTheme}>
          <ThemedText>다크모드</ThemedText>
        </TouchableOpacity>
      </ThemedView>
      <TabBar />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Setting