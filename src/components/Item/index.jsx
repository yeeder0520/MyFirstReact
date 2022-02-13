import React, { Component } from "react";
import "./index.css";

export default class Item extends Component {
  //控制刪除按鍵顯示的狀態
  state = { showBtn: false };

  //滑鼠進來-顯示"刪除"按鈕
  handlerMouseOver = () => {
    this.setState({ showBtn: true });
  };

  //滑鼠出去-隱藏"刪除"按鈕
  handlerMouseLeave = () => {
    this.setState({ showBtn: false });
  };

  //控制"刪除按鈕"的功能
  handlerOnClick = (id) => {
    this.props.deleteTodo(id);
  };

  //控制"勾選"的事件
  handlerChecked = (event, id) => {
    //取出是否被勾選的事件
    const { checked } = event.target;
    console.log(checked)
    this.props.checkedTodo(id, checked);
  };

  render() {
    //從List取得測試資料
    const { id, name, done } = this.props.todos;

    //從List取得"刪除按鈕"顯示與隱藏
    const { showBtn } = this.state;

    return (
      <li
        onMouseOver={this.handlerMouseOver}
        onMouseLeave={this.handlerMouseLeave}
      >
        <label>
          <input
            type="checkbox"
            checked={done}
            onChange={(event) => this.handlerChecked(event, id)}
          />
          <span>{name}</span>
        </label>
        <button
          className="btn btn-danger"
          style={{ display: showBtn ? "block" : "none" }}
          onClick={() => this.handlerOnClick(id)}
        >
          删除
        </button>
      </li>
    );
  }
}
