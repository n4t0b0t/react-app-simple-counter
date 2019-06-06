import React from "react";
import Display from "./Display";
import Button from "./Button";
import "../styles/Counter.css";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: props.count };
  }

  incrementCount() {
    this.setState(state => {
      return { count: state.count + 1 };
    });
  }

  decrementCount() {
    this.setState(state => {
      return { count: state.count - 1 };
    });
  }

  render() {
    return (
      <div>
        <div className="counter">
          <Display count={this.state.count} />
          <Button
            text="Increment"
            class="positive display"
            handleClick={this.incrementCount.bind(this)}
          />
          <Button
            text="Decrement"
            class="negative display"
            handleClick={this.decrementCount.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default Counter;
