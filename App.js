// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      {/* TASK SECTION */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.todos}>My tasks</Text>
      </View>

      <View style={styles.todoItem}>
        {/* Place for tasks */}


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
    paddingHorizontal: 20,
  },
  todos: {

  },
  todoItem: {

  }
});
