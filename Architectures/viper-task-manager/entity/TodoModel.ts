import { Todo } from './Todo';

export class TodoModel {
  private todos: Todo[] = [];
  private nextId: number = 1;

  getTodos(): Todo[] {
    return this.todos;
  }

  addTodo(title: string): void {
    const newTodo: Todo = {
      id: this.nextId,
      title,
      completed: false,
    };
    this.todos.push(newTodo);
    this.nextId++;
  }

  toggleTodo(id: number): void {
    const todo = this.todos.find((todo) => todo.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
  }

  removeTodo(id: number): void {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
}
