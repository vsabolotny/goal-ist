import React from "react";
import { View, Text, StyleSheet } from "react-native";

const GoalItem = (props) => {
    return (
    <View key={Math.random().toString(36).substr(2, 9)} style={styles.listItem}>
      <Text>{props.Goal}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 5,
    marginVertical: 5,
    backgroundColor: "#CCC",
  },
});

export default GoalItem;
