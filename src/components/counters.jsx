import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onReset, onIncrement, onDelete, counters } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            // value={counter.value}
            // selected={true}
            // id={counter.id}
            onDelete={() => onDelete(counter.id)}
            onIncrement={() => onIncrement(counter)}
          >
            {/* <h6>Counter #{counter.id}</h6> */}
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
