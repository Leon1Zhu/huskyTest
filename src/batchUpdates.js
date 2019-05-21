import React from "react";
import { unstable_batchedUpdates as batchedUpdate } from "react-dom";

export default class BatchedDemo extends React.Component {
  state = {
    number: 0
  };

  handleClick = () => {
    // 主动batchedUpdates
    // setTimeout(() => {
    //     // 1,2,3
    //   this.countNumber();
    // }, 0);

    // setTimeout中没有batchedUpdates
    // setTimeout(() => {
    //   // 0,0,0
    //   batchedUpdate(() => this.countNumber());
    // }, 0);

    // 事件处理函数自带batchedUpdates
    // 0,0,0
    this.countNumber();
  };

  countNumber = () => {
    const num = this.state.number;
    this.setState({
      number: num + 1
    });
    console.log(this.state.number);
    this.setState({
      number: num + 2
    });
    console.log(this.state.number);
    this.setState({
      number: num + 3
    });
    console.log(this.state.number);
  };

  render() {
    return <button onClick={this.handleClick}>Num: {this.state.number}</button>;
  }
}
