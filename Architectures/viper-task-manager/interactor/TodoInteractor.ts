import { TodoModel } from '../entity/TodoModel';
import { Todo } from '../entity/Todo';

export interface TodoInteractorProtocol {
  fetchTodos(): Todo[];
  createTodo(title: string): void;
  toggleTodoCompletion(id: number): void;
  deleteTodo(id: number): void;
}

export class TodoInteractor implements TodoInteractorProtocol {
  private todoModel: TodoModel;

  constructor(todoModel: TodoModel) {
    this.todoModel = todoModel;
  }

  fetchTodos(): Todo[] {
    return this.todoModel.getTodos();
  }

  createTodo(title: string): void {
    this.todoModel.addTodo(title);
  }

  toggleTodoCompletion(id: number): void {
    this.todoModel.toggleTodo(id);
  }

  deleteTodo(id: number): void {
    this.todoModel.removeTodo(id);
  }
}
