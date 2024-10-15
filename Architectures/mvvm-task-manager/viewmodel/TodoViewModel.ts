import { useState, useEffect } from 'react';
import { TodoModel, Todo } from '../model/Todo';

export const useTodoViewModel = () => {
  const [model] = useState(new TodoModel());
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');

  useEffect(() => {
    setTodos(model.getTodos());
  }, [model]);

  const addTodo = () => {
    if (newTodo.trim()) {
      model.addTodo(newTodo);
      setNewTodo('');
      setTodos([...model.getTodos()]);
    }
  };

  const toggleTodo = (id: number) => {
    model.toggleTodo(id);
    setTodos([...model.getTodos()]);
  };

  const removeTodo = (id: number) => {
    model.removeTodo(id);
    setTodos([...model.getTodos()]);
  };

  return {
    todos,
    newTodo,
    setNewTodo,
    addTodo,
    toggleTodo,
    removeTodo,
  };
};
