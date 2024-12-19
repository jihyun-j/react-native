import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Subtitle = ({ children }) => {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
};

export default Subtitle;

const styles = StyleSheet.create({
  subtitleContainer: {
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
    margin: 4,
    padding: 6,
    marginHorizontal: 12,
  },
  subtitle: {
    // color: "white",
    fontSize: 18,
    padding: 6,
    fontWeight: "bold",
    textAlign: "center",
  },
});
