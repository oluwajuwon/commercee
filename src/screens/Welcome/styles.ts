import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("screen");
export default () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 30,
      justifyContent: "center",
    },
    safeArea: {
      flex: 1,
    },
  });
};
