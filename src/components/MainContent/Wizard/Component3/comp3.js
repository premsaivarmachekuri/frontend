import React, { useState } from 'react';
import './comp3.css';

const Component3 = ({ changeId, onSubmit }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [manage, setManage] = useState(null);

  // Function to navigate to the previous component
  const prevComponent = () => {
    changeId(2);
  };

  // Function to handle option click and update the state accordingly
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setManage(option === 'yes');
  };

  // Function to submit the form data to the parent component
  const handleSubmit = () => {
    onSubmit({ manage: manage });
  };

  return (
    <div className="component3">
      <h2>Create a project</h2>
      <br />
      <div className="button-group">
        <button
          className={`option-button ${selectedOption === 'yes' ? 'selected-yes' : 'unselected'}`}
          onClick={() => handleOptionClick('yes')}
        >
          Yes
        </button>
        <button
          className={`option-button ${selectedOption === 'no' ? 'selected-no' : 'unselected'}`}
          onClick={() => handleOptionClick('no')}
        >
          No
        </button>
      </div>
      <button className="prev-button" onClick={prevComponent}>
        Previous
      </button>
      <button className="save-button" onClick={handleSubmit} disabled={!selectedOption}>
        Submit
      </button>
    </div>
  );
};

export default Component3;
