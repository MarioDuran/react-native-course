import { TodoInteractor, TodoInteractorProtocol } from '../interactor/TodoInteractor';
import { TodoModel } from '../entity/TodoModel';
import { Todo } from '../entity/Todo';

export interface TodoViewProtocol {
  displayTodos(todos: Todo[]): void;
}

export class TodoPresenter {
  private view: TodoViewProtocol;
  private interactor: TodoInteractorProtocol;

  constructor(view: TodoViewProtocol) {
    this.view = view;
    const todoModel = new TodoModel();
    this.interactor = new TodoInteractor(todoModel);
    this.loadTodos();
  }

  loadTodos(): void {
    const todos = this.interactor.fetchTodos();
    this.view.displayTodos(todos);
  }

  addTodo(title: string): void {
    this.interactor.createTodo(title);
    this.loadTodos();
  }

  removeTodo(id: number): void {
    this.interactor.deleteTodo(id);
    this.loadTodos();
  }
}
