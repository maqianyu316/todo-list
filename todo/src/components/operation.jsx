/*
 * @Description:
 * @Author: xiaoma
 * @Date: 2019-11-27 17:40:09
 * @LastEditTime: 2019-11-29 16:25:16
 * @LastEditors: xiaoma
 */
import React, { Component } from "react";
import "./operation.css";

class Operation extends Component {
  //清除所有完成项
  clearFinished() {
    this.props.onClearFinished();
  }
  //改变展示项
  changeStatusAction = status => {
    this.props.onChangeStatus(status);
  };

  render() {
    let btns = [
      { title: "all", status: "all" },
      { title: "finished", status: "finished" },
      { title: "todo", status: "todo" }
    ];
    let { data } = this.props;
    let newArr = data.filter(item => {
      return item.status === "finished";
    });
    let all = data.length,
      finished = newArr.length,
      radio = (finished / all) * 100;
    return (
      <div className="statics">
        <ul className="operations">
          {btns.map(item => {
            return (
              <li
                key={item.status}
                onClick={() => this.changeStatusAction(item.status)}
              >
                {item.title}
              </li>
            );
          })}
        </ul>
        <div className="clear">
          <p>
            完成度：{finished} / {all}
          </p>
          <div className="progress">
            {all === 0 ? (
              <div
                className="progress-bar progress-bar-warning progress-bar-striped"
                role="progressbar"
                aria-valuenow="0"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "0%" }}
              ></div>
            ) : (
              <div
                className="progress-bar progress-bar-warning progress-bar-striped"
                role="progressbar"
                aria-valuenow=""
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: `${radio}%` }}
              ></div>
            )}
          </div>
          <button
            type="button"
            className="btn btn-info"
            onClick={() => {
              this.clearFinished();
            }}
          >
            清除完成项
          </button>
        </div>
      </div>
    );
  }
}

export default Operation;
