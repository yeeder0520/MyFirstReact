import React, { Component } from "react";
import "./index.css";

export default class Footer extends Component {
  render() {
    //接App傳過來的todo內容
    const { todos } = this.props;

    const doneTode = todos.filter(todoObj =>{
      return todoObj.done===true
    })

    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" checked={doneTode.length===todos.length? true:false }/>
        </label>
        <span>
          <span>已完成{doneTode.length}</span> / {todos.length}
        </span>
        <button className="btn btn-danger">清除已完成任务</button>
      </div>
    );
  }
}
