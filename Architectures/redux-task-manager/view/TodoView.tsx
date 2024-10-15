import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux'; 
import { addTodo, removeTodo, Todo } from '../redux/todoSlice';
import store from '../redux/store'; 

type RootState = ReturnType<typeof store.getState>;

const TodoView = () => {
  const dispatch = useDispatch(); 
  const todos = useSelector((state: RootState) => state.todos.todos); 
  const [newTodo, setNewTodo] = useState<string>(''); 

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      dispatch(addTodo(newTodo)); 
      setNewTodo(''); 
    }
  };

  const handleRemoveTodo = (id: number) => {
    dispatch(removeTodo(id)); 
  };

  const renderTodo = ({ item }: { item: Todo }) => (
    <View style={styles.todoContainer}>
      <Text>{item.title}</Text>
      <TouchableOpacity onPress={() => handleRemoveTodo(item.id)} style={styles.deleteButton}>
        <FontAwesome name="times" size={24} color="red" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Lista de Tareas</Text>
      <TextInput
        style={styles.input}
        placeholder="Agregar nueva tarea"
        placeholderTextColor="lightgray"
        value={newTodo}
        onChangeText={setNewTodo} 
      />
      <Button title="Agregar" onPress={handleAddTodo} />
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderTodo} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 8,
    marginBottom: 16,
    borderRadius: 4,
  },
  todoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  deleteButton: {
    marginLeft: 16,
  },
});

export default TodoView;
