import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Task from "./components/Task";

export default function App() {
  return (
    <View style={styles.container}>
      {/* TASK SECTION */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.title}>My tasks</Text>

        <View style={styles.todoItem}>
          {/* Place for tasks */}
          <Task Text={"Task 1"} />
          <Task Text={"Task 2"} />
          <Task />
          <Task />
          <Task />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "silver",
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  todoItem: {
    marginTop: 30,
  },
});
