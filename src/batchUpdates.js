import * as React from "react";
import { DynamicLoader } from "./Loader";
import { ClassDemo } from "./ClassDemo";

export default class BatchedDemo extends React.Component {
  result0;
  result01;
  state = {
    number: 0,
    flipped: 0,
    flipped1: 1
  };

  testImport = async () => {
    this.result0 = await import("./ClassDemo.js");
    console.log(this.result0);
  };
  testImport1 = async () => {
    this.result01 = await import("./hookdDemo.js");
    console.log(this.result1);
  };

  handleClick = () => {
    console.log(2);
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

  handleClickBtn = () => {
    this.setState({ flipped1: Math.random() });
  };

  render() {
    Promise.all([
      DynamicLoader.readyClassDemo1(),
      DynamicLoader.readyClassDemo2()
    ]).then(() => {
      console.log(DynamicLoader.classDemo1);
      console.log(DynamicLoader.classDemo2);
    });
    return (
      <div>
        {Promise.all([
          DynamicLoader.readyClassDemo1(),
          DynamicLoader.readyClassDemo2()
        ]).then(() => {
          return <
        })}


        {/* <span onClick={this.handleClickBtn}>点击刷新一个无关变量</span>
        {new Array(50).fill(0).map((item, index) => {
          return <ClassDemo flipped={this.props.flipped} key={index} />;
        })} */}
      </div>
    );
  }
}
