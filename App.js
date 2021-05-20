import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Button,
  TextInput,
  ScrollView,
} from "react-native";
import GoalItem from "./components/Goalitem";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [listGoals, setGoals] = useState([]);

  const inputGoalHandler = (enteredText) => {
    if (enteredText != "") {
      setEnteredGoal(enteredText);
    }
  };

  const addGoalHandler = () => {
    if (enteredGoal != "") {
      setGoals((currentGoals) => [...currentGoals, enteredGoal]);
      setEnteredGoal("");
    }
  };

  const resetGoalHandler = () => {
    setGoals([]);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Add your goal"
          style={styles.input}
          onChangeText={inputGoalHandler}
          value={enteredGoal}
        />
        <Button title="ADD" onPress={addGoalHandler} />
        <Button title="RESET" onPress={resetGoalHandler} />
      </View>
      <ScrollView>
        {listGoals.map((goal) => (
          <GoalItem Goal={goal} />
        ))}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: "60%",
    borderBottomColor: "black",
    borderWidth: 1,
    padding: 10,
  },
});
