import React from 'react';
import './comp4.css'
const Component4 = (props) => {
    const { changeId } = props;

    const prevComponent = () => {
      changeId(3);
    }
  return (
    <div className="component2">
      <h2>Working on ...</h2>
      <button className="prev-button" onClick={prevComponent}>Previous</button>
    </div>
  );
};

export default Component4;
