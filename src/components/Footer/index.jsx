import React, { Component } from "react";
import "./index.css";

export default class Footer extends Component {
  //點下去，代辦事項全部打勾或取消
  handlerChange = (event) => {
    if(event.target.checked){
      this.props.changeAllTodoChecked(true);
    }else{
      this.props.changeAllTodoChecked(false);
    }
  };

  //清除所有打勾的事項
  clearAllTodo=()=>{
    //App傳過來的資料
    const { todos } = this.props;
    //把有勾選的東西傳回去跟App說不要顯示
    const newTodos = todos.filter(todoObj =>{
      return todoObj.done === false;
    })
    this.props.clearAllTodo(newTodos)
  }
  render() {
    //接App傳過來的todo內容
    const { todos } = this.props;

    //計算被打勾的代辦事項
    const doneTode = todos.filter((todoObj) => {
      return todoObj.done === true;
    });
    return (
      <div className="todo-footer">
        <label>
          <input
            type="checkbox"
            checked={
              doneTode.length === todos.length && todos.length !== 0
                ? true
                : false
            }
            onChange={this.handlerChange}
          />
        </label>
        <span>
          <span>已完成{doneTode.length}</span> / {todos.length}
        </span>
        <button className="btn btn-danger" onClick={this.clearAllTodo}>清除已完成任务</button>
      </div>
    );
  }
}
