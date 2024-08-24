import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal:15
  },
  inputWrap: {
    width: "100%",
    height: 250,
    display: "flex",
    alignItems: "flex-start",
  },
  label: {
    fontSize: 17,
    color: "#E0E5B6",
  },
  input: {
    borderBottomColor: "#E0E5B6",
    borderBottomWidth: 1,
    width: "100%",
    fontSize: 20,
    paddingVertical: 10,
    marginBottom: 30,
  },
  logoText: {
    fontSize: 25,
    fontWeight: "condensedBold",
  },
  logoWrap: {
    width: "100%",
    height: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  button: {
    width: "100%",
    height: 45,
    backgroundColor: "#E0E5B6",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: "auto",
    borderRadius: 10,
    marginBottom: 40,
  },
});
