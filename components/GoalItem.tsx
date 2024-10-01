import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

interface GoalItemProps {
  text: string;
  onDeleteItem: (id: string) => void;
  id: string;
}

function GoalItem(props: GoalItemProps) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{color: '#210644'}}
        onPress={() => props.onDeleteItem(props.id)}>
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: 'white',
    padding: 8,
  },
});

export default GoalItem;
