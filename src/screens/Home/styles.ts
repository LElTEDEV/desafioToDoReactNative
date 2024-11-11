import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 175,

    backgroundColor: "#0D0D0D",

    alignItems: "center",
    justifyContent: "center",
  },

  input: {
    width: "90%",
    height: 54,

    alignSelf: "center",
    flexDirection: "row",

    marginTop: -26,
    marginBottom: 32,

    gap: 4,
  },

  inputNewTask: {
    backgroundColor: "#262626",
    color: "#F2F2F2",

    width: 271,

    flex: 1,
    padding: 16,

    borderRadius: 6,
  },

  containerButtonAddTask: {
    backgroundColor: "#1E6F9F",
    height: 52,
    width: 52,

    borderRadius: 6,

    alignItems: "center",
    justifyContent: "center",
  },

  textButton: {
    color: "#ffffff",
    fontSize: 16,
  },

  containerTasks: {
    width: "90%",

    alignSelf: "center",
  },

  infosTasks: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    marginBottom: 20,
  },

  containerInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  textInfoCriada: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4EA8DE",
  },

  textInfoConcluida: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#8284FA",
  },

  textAmountInfo: {
    backgroundColor: "#333333",
    color: "#D9D9D9",
    borderRadius: 99,
    paddingHorizontal: 8,
  },

  empytTasks: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 48,
  },

  textPrimaryEmpty: {
    marginTop: 16,

    fontWeight: "bold",

    color: "#808080",

    fontSize: 16,
  },

  textSecondaryEmpty: {
    color: "#808080",

    fontSize: 16,
  },
});
