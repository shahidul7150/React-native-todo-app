import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Today's Task */}
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's task</Text>

        <View style={styles.items}>
          {/* This is where the task will got */}
          <Task text={'Task 1'} />
          <Task text={'Task 2'} />
          <Task text={'Props is working Task 3'} />

        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEAED',
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,

  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 30,
  },
});
