import React, { Component } from "react";
import "./index.css";

export default class Item extends Component {
  render() {

    //從List取得測試資料
    const {id,name,done} = this.props.todos

    return (
      <li>
        <label>
          <input type="checkbox" defaultChecked={done}/>
          <span>{name}</span>
        </label>
        <button className="btn btn-danger" style={{ display: "none" }}>
          删除
        </button>
      </li>
    );
  }
}
