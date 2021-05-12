import React, {useState} from 'react';
import { View, Text, SafeAreaView, StyleSheet, FlatList, Button } from 'react-native';

import AddNewGoalForm from './src/components/add-new-goal-form/add-new-goal-form';
import GoalComponent from './src/components/goal.component/goal';

const App = () => {

  const [goals, setGoals] = useState([]);
  const [isAddGoalMod, setIsAddGoalMod] = useState(false);

  const onStoreGoal = (goal) => {
    setGoals([
      goal,
      ...goals
    ]);
    setIsAddGoalMod(false);
  }

  const deleteGoal = (id) => {
    setGoals(
      goals.filter((goal) => goal.id !== id)
    )
  }

  const generateGoal = ({ item }) => (
    <GoalComponent goal={item} onDelete={deleteGoal} />
  )

  const showAddGoalModal = () => {
    setIsAddGoalMod(true);
  }

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.addNewGoalButton}>
          <Button 
            onPress={showAddGoalModal}
            title="Add New Goal"
            />
        </View>
        <AddNewGoalForm
          onCancel={() => setIsAddGoalMod(false)} 
          isVisible={isAddGoalMod}
          onStoreGoal={onStoreGoal}
        />
        <View>
          <FlatList
            keyExtractor={item => item.id}
            data={goals}
            renderItem={generateGoal}
          />
        </View>
    </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
  addNewGoalButton: {
    marginTop: 20,
    marginBottom: 20
  }
})

export default App;
