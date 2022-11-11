import { defineStore } from "pinia";

export const useTodoListStore = defineStore("todoList", {
  //State
  state: () => ({
    todoList: [],
  }),
  //Getters
  //action
  actions: {
    addTodo(item) {
      this.todoList.push({ item, id: this.id++, completed: false });
    },
    deletTodo(item) {
      this.todoList = this.todoList.filter((object) =>{
        return object.id !== itemId
      });
    },
  },
});
