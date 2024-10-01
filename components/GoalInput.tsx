import React, {useState} from 'react';
import {Button, Image, Modal, StyleSheet, TextInput, View} from 'react-native';

interface GoalInputProps {
  addGoal: (enteredGoalText: string) => void;
  visible: boolean;
  onCancel: () => void;
}

function GoalInput(props: GoalInputProps) {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(enteredText: string) {
    setEnteredGoalText(enteredText);
  }

  const addGoalHandler = () => {
    props.addGoal(enteredGoalText);
    setEnteredGoalText('');
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../images/goal.png')} />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="cancel" onPress={props.onCancel} color="#f31282" />
          </View>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#5e0acc" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    padding: 16,
    backgroundColor: '#311b6b',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    width: '100%',
    padding: 16,
    borderRadius: 6,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  button: {
    marginHorizontal: 8,
    width: 100,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});

export default GoalInput;
