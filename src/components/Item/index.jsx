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
          <input type="checkbox" defaultChecked={done} />
          <span>{name}</span>
        </label>
        <button
          className="btn btn-danger"
          style={{ display: showBtn ? "block" : "none" }}
        >
          删除
        </button>
      </li>
    );
  }
}
