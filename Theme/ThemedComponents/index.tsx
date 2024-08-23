import React from "react";
import { View, Text, ViewStyle, TextStyle } from "react-native";
import { useTheme } from "../ThemeProvider"; 

type ThemedViewProps = {
  style?: ViewStyle | ViewStyle[];
  children: React.ReactNode;
};

export const ThemedView: React.FC<ThemedViewProps> = ({ style, children }) => {
  const { theme } = useTheme();

  return (
    <View style={[{ backgroundColor: theme.backgroundColor }, style]}>
      {children}
    </View>
  );
};

type ThemedTextProps = {
  style?: TextStyle | TextStyle[];
  children: React.ReactNode;
};

export const ThemedText: React.FC<ThemedTextProps> = ({ style, children }) => {
  const { theme } = useTheme();

  return <Text style={[{ color: theme.textColor }, style]}>{children}</Text>;
};
