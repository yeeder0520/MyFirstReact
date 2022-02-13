import React, { Component } from "react";
import { nanoid } from "nanoid";
import "./index.css";

export default class Header extends Component {

  //儲存輸入框的值
  state = { inputValue: "" };
  handlerChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  //當按下鍵盤，且按鍵談起來之後的監聽
  handlerKeyUp = (event) => {
    //取出鍵盤按鍵代碼
    const { keyCode } = event;
    //取出輸入框的值
    const { inputValue } = this.state;

    if (keyCode === 13) {
      if (inputValue === "") {
        alert("任務內容不得為空！");
        return;
      }

      //把資訊回傳給父組件
      this.props.addTodo({
        id: nanoid(),
        name: inputValue,
        done: false,
      });

      //結束之後清空輸入欄
      this.setState({ inputValue: "" });
    }
  };

  //按下enter 新增todo的事件方法
  handlerClick = (event) => {
    //取出輸入框的值
    const { inputValue } = this.state;
    this.props.addTodo({ id: nanoid(), name: inputValue.value, done: false });
  };

  render() {
    return (
      <div className="todo-header">
        <input
          type="text"
          placeholder="請輸入要加入的代辦事項"
          value={this.state.inputValue}
          onKeyUp={this.handlerKeyUp}
          onChange={this.handlerChange}
        />
        <button onClick={this.handlerClick}>加入任務</button>
      </div>
    );
  }
}
