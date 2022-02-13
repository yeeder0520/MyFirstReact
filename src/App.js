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

  addTodo = (todoObj) => {
    //取出原本的資料
    const { todos } = this.state;
    //做一個新的todos
    const newTodos = [todoObj, ...todos];
    //把Header新增的東西加進來
    this.setState({ todos: newTodos });
  };

  render() {
    const { todos } = this.state;

    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List todos={todos} />
          <Footer />
        </div>
      </div>
    );
  }
}
