import React, {useState} from 'react';
import styles from './add-new-goal-form.style';

import {
    View,
    TextInput,
    Button,
    Modal,
    SafeAreaView
} from 'react-native'

const AddNewGoalForm = ({isVisible, onStoreGoal, onCancel}) => {

    const [goalTitle, setGoalTitle] = useState('')

    const inputGoalTitle = (value) => {
        setGoalTitle(value);
    } 

    const saveGoal = () => {
        onStoreGoal({
            id: Math.random().toString(),
            title: goalTitle
        })
        setGoalTitle('');
    }

    const cancelGoalAdding = () => {
        setGoalTitle('');
        onCancel();
    }

    return (
        <Modal visible={isVisible} animationType="slide">
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.form}>
                    <View style={styles.cancelContainer}>
                        <Button title="Cancel" onPress={cancelGoalAdding} />
                    </View>
                    <View style={{width: '100%'}}>
                        <TextInput 
                            style={styles.input} 
                            placeholder="Input new goal" 
                            onChangeText={inputGoalTitle} 
                            value={goalTitle}    
                        />
                        <Button onPress={saveGoal} title="Add goal" />
                    </View>
                    <View></View>
                </View>
            </SafeAreaView>
        </Modal>
    )
};

export default AddNewGoalForm;