import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerTask: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    backgroundColor: "#262626",
    padding: 12,

    marginBottom: 8,
    borderRadius: 8,
  },

  textTaskNew: {
    fontSize: 16,
    color: "#F2F2F2",
  },

  textTaskConcluida: {
    fontSize: 16,
    color: "#808080",
    textDecorationLine: "line-through",
  },
});
