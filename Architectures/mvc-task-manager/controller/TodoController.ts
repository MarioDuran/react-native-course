import { TodoModel, Todo } from '../model/Todo';

export class TodoController {
  private model: TodoModel;

  constructor() {
    this.model = new TodoModel();
  }

  getTodos(): Todo[] {
    return this.model.getTodos();
  }

  addTodo(title: string): void {
    this.model.addTodo(title);
  }

  toggleTodo(id: number): void {
    this.model.toggleTodo(id);
  }

  removeTodo(id: number): void {
    this.model.removeTodo(id);
  }
}