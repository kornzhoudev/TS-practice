import { FetchTodosAction, DeleteTodoAction } from "./todos";

export enum ActionTypes {
    fetchTodos = "fetch_TODOS",
    deleteTodo = "delete_TODO",
}

export type Action = FetchTodosAction | DeleteTodoAction;
