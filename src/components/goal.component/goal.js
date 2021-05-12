import React from 'react';
import { 
    View, 
    Text,
    TouchableOpacity
 } from 'react-native';
import styles from './goal.style';

const GoalComponent = ({ goal, onDelete }) => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onDelete.bind(this, goal.id)}>
            <View style={styles.goalCard}>
                <Text>{goal.title}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default GoalComponent;