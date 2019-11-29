/*
 * @Description:
 * @Author: xiaoma
 * @Date: 2019-11-27 16:49:44
 * @LastEditTime: 2019-11-29 15:41:39
 * @LastEditors: xiaoma
 */
import React, { Component } from "react";
import Handle from "./components/handle.jsx";
import Show from "./components/show.jsx";
import Operation from "./components/operation.jsx";
import "./app.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      status: "all"
    };
  }
  // 处理添加的数据的事件
  handleAdd = value => {
    let info = {
      value,
      status: "todo"
    };
    this.setState({ data: [...this.state.data, info] });
  };
  // 处理单项完成的事件
  handleFinishItem = index => {
    // todo ---> finished
    let newArr = this.state.data.map((item, i) => {
      if (index !== i) {
        return item;
      } else {
        return {
          ...item,
          status: "finished"
        };
      }
    });
    this.setState({ data: newArr });
  };
  // 处理单项删除的事件
  handleDeleteItem = index => {
    let newArr = this.state.data.filter((item, i) => {
      return index !== i;
    });
    this.setState({ data: newArr });
  };
  //撤销单项完成操作
  handleWithdrawItem = index => {
    // finished ---> todo
    let newArr = this.state.data.map((item, i) => {
      if (index !== i) {
        return item;
      } else {
        return {
          ...item,
          status: "todo"
        };
      }
    });
    this.setState({ data: newArr });
  };
  //处理Show组件分类展示的标签
  handleChangeStatus = flag => {
    this.setState({ status: flag });
  };
  //删除所有完成项
  handleClearFinished = () => {
    let newArr = this.state.data.filter(item => {
      return item.status !== "finished";
    });
    this.setState({ data: newArr });
  };
  //将全部设置为完成项
  handleFininshAll = () => {
    let newArr = this.state.data.map(item => {
      return {
        ...item,
        status: "finished"
      };
    });
    this.setState({ data: newArr });
  };
  //撤销全部完成操作
  handleWithdrawAll = () => {
    let newArr = this.state.data.map(item => {
      return {
        ...item,
        status: "todo"
      };
    });
    this.setState({ data: newArr });
  };

  render() {
    let { data, status } = this.state;
    // 过滤数据，分类展示不同标签的列表
    let newData = data.filter(item => {
      if (status === "all") {
        return true;
      } else {
        return item.status === status;
      }
    });

    return (
      <div className="app">
        <Handle onAdd={this.handleAdd} />
        {this.state.data.length === 0 ? null : (
          <div>
            <Show
              data={newData}
              dataTotal={data}
              onFinishItem={this.handleFinishItem}
              onDeleteItem={this.handleDeleteItem}
              onWithdrawItem={this.handleWithdrawItem}
              onFininshAll={this.handleFininshAll}
              onWithdrawAll={this.handleWithdrawAll}
            />
            <Operation
              data={data}
              onChangeStatus={this.handleChangeStatus}
              onClearFinished={this.handleClearFinished}
            />
          </div>
        )}
      </div>
    );
  }
}

export default App;
