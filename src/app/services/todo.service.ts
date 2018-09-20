import { todoList } from "./data";
import { Todo } from "./todo";

export class TodoService {

    todoList: Todo[] = todoList;

    get(): Todo[] {
        return this.todoList;
    }
}