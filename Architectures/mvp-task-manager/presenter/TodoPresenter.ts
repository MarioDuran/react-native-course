import { TodoModel, Todo } from '../model/Todo';

export interface TodoViewInterface {
  showTodos(todos: Todo[]): void;
}

export class TodoPresenter {
  private model: TodoModel;
  private view: TodoViewInterface;

  constructor(view: TodoViewInterface) {
    this.model = new TodoModel();
    this.view = view;
  }

  loadTodos(): void {
    const todos = this.model.getTodos();
    this.view.showTodos(todos);
  }

  addTodo(title: string): void {
    if (title.trim()) {
      this.model.addTodo(title);
      this.loadTodos();  
    }
  }

  removeTodo(id: number): void {
    this.model.removeTodo(id);
    this.loadTodos();  
  }

  toggleTodo(id: number): void {
    this.model.toggleTodo(id);
    this.loadTodos();  
  }
}
