import React from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Todo } from '../model/Todo';
import { FontAwesome } from '@expo/vector-icons'; 
import { useTodoViewModel } from '../viewmodel/TodoViewModel';

const TodoView = () => {
  const {
    todos,
    newTodo,
    setNewTodo,
    addTodo,
    removeTodo,
  } = useTodoViewModel();

  const handleAddTodo = () => {
    addTodo();
  };

  const handleRemoveTodo = (id: number) => {
    removeTodo(id);
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
      <Text style={styles.header}>To-Do List</Text>
        <TextInput
          style={styles.input}
          placeholder="Add new task"
          placeholderTextColor="lightgray"
          value={newTodo}
          onChangeText={setNewTodo}
        />
        <Button title="Add" onPress={handleAddTodo} />
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
