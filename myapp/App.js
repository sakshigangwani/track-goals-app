import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, ScrollView, Pressable, Modal, Image } from 'react-native';
import GoalItem from './components/GoalItem';

export default function App() {
  const [goalhandler, setGoalHandler] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function StartAddGoalHandler() {
    setModalIsVisible(true);
  }

  function EndAddGoalHandler() {
    setModalIsVisible(false);
  }

  function handleGoal(enteredText){
    setGoalHandler(enteredText); 
  }

  function addGoalHandler() {
    const newGoal = {
      id: courseGoals.length === 0 ? 1 : courseGoals[courseGoals.length - 1].id + 1,
      goalName: goalhandler,
    };
    setCourseGoals((currentCourseGoals) => [...currentCourseGoals, newGoal]);
    setGoalHandler('');
    EndAddGoalHandler();
  }

  function deleteGoal(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
  <View style={styles.appContainer}>
    <View style={styles.addNewGoal}>
      <Button title='Add New Goal' color="white" onPress={StartAddGoalHandler}/>
    </View>
    {modalIsVisible && <Modal animationType='slide'>
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('.//assets//images//goal.png')} />
        <TextInput style={styles.textInput} placeholder='Your course goal!' onChangeText={handleGoal} value={goalhandler}/>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonAdd}>
            <Button color='white' title='Add Goal' onPress={addGoalHandler}/>
          </View>
          <View style={styles.buttonCancel}>
            <Button color='white' title='Cancel' onPress={EndAddGoalHandler}/>
          </View>
        </View>
      </View>
    </Modal>}
      <View style={styles.goalsContainer}>
      <ScrollView>
          {courseGoals.map((goal) => (
            <Pressable key={goal.id} onPress={() => deleteGoal(goal.id)}>
              <View style={styles.goalText}>
                <Text style={{ color: '#5e0acc' }}>{goal.goalName}</Text>
              </View>
            </Pressable>
          ))}
        </ScrollView>
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
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#311b6b'
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  buttonAdd: {
    width: '30%',
    marginHorizontal: 8,
    backgroundColor: '#5e0acc',
  },
  buttonCancel: {
    width: '30%',
    marginHorizontal: 8,
    backgroundColor: '#f31282',
  },
  textInput: {
    borderWidth: 2,
    borderColor: '#e6e6fa',
    width: '100%',
    backgroundColor: '#e6e6fa',
    borderRadius: 8,
    padding: 15,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20
  },
  goalsContainer: {
    flex: 5
  },
  goalText: {
    backgroundColor: '#e6e6fa',
    padding: 16,
    borderRadius: 10,
    marginTop: 14,
  },
  addNewGoal: {
    marginTop: 30,
    backgroundColor: '#5e0acc',
    borderRadius: 5,
  }
});
