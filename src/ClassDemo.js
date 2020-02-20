import * as React from "react";
import { ClassDemo2 } from "./ClassDemo2";

export class ClassDemo extends React.Component {
  render() {
    return (
      <div>
        {this.props.flipped}
        {new Array(10).fill(0).map((item, index) => {
          return <ClassDemo2 />;
        })}
      </div>
    );
  }
}
