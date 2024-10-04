import { StyleSheet, Text, View, TextInput, Pressable, FlatList, Alert } from 'react-native';
import { useState, useEffect } from 'react';

export default function App() {
  return (
        <TaskScreen />
  );
}

// TaskScreen component (Single screen for task management)
const TaskScreen = () => {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Task Manager</Text>
            
            <TextInput
                style={styles.input}
                placeholder='Enter task'
                value={task}
                onChangeText={setTask}
            />
            
            <Pressable style={styles.button} onPress={undefined}>
                <Text style={styles.buttonText}>Add Task</Text>
            </Pressable>
            
            <FlatList
                data={tasks}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.taskContainer}>
                        <Text style={styles.taskText}>{item.task}</Text>
                        <Pressable style={styles.deleteButton} onPress={() => deleteTask(item.id)}>
                            <Text style={styles.deleteButtonText}>Delete</Text>
                        </Pressable>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingVertical: 40,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        marginVertical: 5,
        borderRadius: 5,
    },
    button: {
        backgroundColor: 'blue',
        padding: 10,
        marginVertical: 10,
        width: '100%',
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
    },
    taskContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#ccc',
        width: '100%',
    },
    taskText: {
        fontSize: 18,
    },
    deleteButton: {
        backgroundColor: 'red',
        padding: 5,
        borderRadius: 5,
    },
    deleteButtonText: {
        color: 'white',
    }
});
