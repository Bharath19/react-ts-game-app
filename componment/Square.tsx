import * as React from 'react';

export default function Square(props) {
  const [stateValue, setStateValue] = React.useState({ value: props.value });

  return (
    <button className="square" onClick={() => setStateValue({ value: 'X' })}>
      {stateValue.value}
    </button>
  );
}
