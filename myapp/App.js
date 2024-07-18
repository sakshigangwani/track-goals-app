import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {
  const [goalhandler, setGoalHandler] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  function handleGoal(enteredText){
    setGoalHandler(enteredText);
  }

  function addGoalHandler(){
    setCourseGoals((currentCourseGoals) => [...currentCourseGoals, goalhandler]);
    console.log(courseGoals);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Your course goal!' onChangeText={handleGoal}/>
        <Button title='Add Goal' onPress={addGoalHandler}/>
      </View>
      <View style={styles.goalsContainer}>
        {courseGoals.map((goal) => <View  style={styles.goalText}><Text style={{color: 'white'}}>{goal}</Text></View>)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  textInput: {
    borderWidth: 1,
    width: '70%',
    backgroundColor: '#e0ffff',
    padding: 15,
    marginRight: 8,
  },
  goalsContainer: {
    flex: 7
  },
  goalText: {
    backgroundColor: 'blue',
    padding: 16,
    borderRadius: 10,
    marginTop: 10,
  }
});
