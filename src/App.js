import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import List from "./components/List";
import "./App.css";

export default class App extends Component {
  //測試用的資料
  state = {
    todos: [
      { id: 1, name: "吃飯", done: true },
      { id: 2, name: "睡覺", done: true },
      { id: 3, name: "打代碼", done: false },
      { id: 4, name: "做運動", done: true },
    ],
  };

  //增加TODO事件的方法
  addTodo = (todoObj) => {
    //取出原本的資料
    const { todos } = this.state;
    //做一個新的todos
    const newTodos = [todoObj, ...todos];
    //把Header新增的東西加進來
    this.setState({ todos: newTodos });
  };

  //刪除TODO事件的方法
  deleteTodo = (id) => {
    //取出原本的資料
    const { todos } = this.state;
    //把被刪除的TODO的id過濾掉
    const newTodos = todos.filter((todoObj) => {
      return todoObj.id !== id;
    });
    //把被刪掉的東西加進來
    this.setState({ todos: newTodos });
  };

  //變更被勾選的TODO事件狀態
  checkedTodo = (id, done) => {
    //取出原本的資料
    const { todos } = this.state;
    //更換被勾選的狀態，如果ID一樣，就更換他的done狀態
    const newTodos = todos.map((todoObj) => {
      if (todoObj.id === id) return { ...todoObj, done };
      else return todoObj;
    });
    //把被勾選的東西加進來
    this.setState({ todos: newTodos });
  };

  //變更被勾選的TODO事件狀態
  changeAllTodoChecked = (done) => {
    //取出原本的資料
    const { todos } = this.state;
    //更換被勾選的狀態，如果ID一樣，就更換他的done狀態
    const newTodos = todos.map((todoObj) => {
      return { ...todoObj, done };
    });
    //把全部的狀態加回去
    this.setState({ todos: newTodos });
  };

  //刪除所有以勾選的項目
  clearAllTodo = (todoObj) => {
    //取出原本的資料
    // const { todos } = this.state;
    //更換被勾選的狀態，如果ID一樣，就更換他的done狀態
    this.setState({ todos: todoObj });
  };

  render() {
    const { todos } = this.state;

    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List
            todos={todos}
            deleteTodo={this.deleteTodo}
            checkedTodo={this.checkedTodo}
          />
          <Footer
            todos={todos}
            changeAllTodoChecked={this.changeAllTodoChecked}
            clearAllTodo={this.clearAllTodo}
          />
        </div>
      </div>
    );
  }
}
