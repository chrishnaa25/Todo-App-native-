import React, {useState} from 'react';
import {Button, FlatList, StatusBar, StyleSheet, View} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState<
    Array<{text: string; key: string}>
  >([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  };

  const endAddGoalHandler = () => {
    setModalIsVisible(false);
  };

  function addGoalHandler(enteredGoalText: string) {
    setCourseGoals(prev => [
      ...prev,
      {text: enteredGoalText, key: Math.random().toString()},
    ]);
    endAddGoalHandler();
  }

  function deleteGoalHandler(id: string) {
    setCourseGoals(prev => {
      return prev.filter(goal => goal.key !== id);
    });
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.appContainer}>
        <Button
          title="Add a new goal"
          color="#5e0acc"
          onPress={startAddGoalHandler}
        />
        <GoalInput
          addGoal={addGoalHandler}
          visible={modalIsVisible}
          onCancel={endAddGoalHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={itemData => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.key}
                  onDeleteItem={deleteGoalHandler}
                />
              );
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#311b6b',
  },
  goalsContainer: {
    flex: 5,
    marginTop: 20,
  },
});
