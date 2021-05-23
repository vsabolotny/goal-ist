import React, { useState } from "react";
import { StyleSheet, View, Button, FlatList } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = (goalTitle) => {
    if (goalTitle != "") {
      setCourseGoals((currentGoals) => [
        ...currentGoals,
        { id: Math.random().toString(), value: goalTitle },
      ]);
    }
    setIsAddMode(false);
  };

  const goalResetHandler = () => {
    setCourseGoals([]);
  };

  const deleteGoalHandler = (goalId) => {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <Button
        title="Add new goal"
        onPress={() => {
          setIsAddMode(true);
        }}
      />
      <Button title="Reset" onPress={goalResetHandler} />
      <GoalInput
        visible={isAddMode}
        onAddGoal={addGoalHandler}
        onResetGoals={goalResetHandler}
        onCancel={cancelGoalAdditionHandler}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.id}
            onDelete={deleteGoalHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
});
