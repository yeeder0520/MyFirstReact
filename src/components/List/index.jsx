import React, { Component } from "react";
import Item from "../Item";
import "./index.css";
export default class List extends Component {
  render() {
    //從App取得測試資料
    const todoArray = this.props.todos;
    return (
      <ul className="todo-main">
        {todoArray &&
          todoArray.map((todo) => {
            return <Item key={todo.id} todos={todo}/>;
          })}
      </ul>
    );
  }
}
