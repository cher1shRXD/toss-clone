import { StyleSheet } from "react-native";
import { ThemedView } from "../../../Theme/ThemedComponents";
import Header from "../../Header";

const Account = () => {

  return (
    <ThemedView style={styles.container}>
      <Header title="스톡머니"/>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    paddingTop: 50,
  },
});

export default Account;
