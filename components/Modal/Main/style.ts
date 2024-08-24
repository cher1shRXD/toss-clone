import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "space-between",
    position: "relative",
  },
  buttonWrap: {
    width: "100%",
    height: 130,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    marginBottom: 20,
  },
  button: {
    width: "100%",
    height: 45,
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  titleWrap: {
    width: "100%",
    height: 200,
    marginTop:35,
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  logoText: {
    fontSize: 40,
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
});