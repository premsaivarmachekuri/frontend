import React, { useState } from 'react';
import './comp2.css';

const Component2 = ({ changeId, onSubmit }) => {
  const [formData, setFormData] = useState({
    organization_name: ''
  });

  const prevComponent = () => {
    changeId(1);
  };

  const handleSubmit = () => {
    if (formData.organization_name.trim() !== '') {
      changeId(3);
    }
    onSubmit({ organization_name: formData.organization_name });
  };

  const handleOrganizationChange = (e) => {
    const { value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      organization_name: value
    }));
  };

  return (
    <div className="component2">
      <h2>Enter Your Organization Details</h2>
      <br />
      <h3>Organization Name</h3>
      <input
        className="input-box"
        value={formData.organization_name}
        onChange={handleOrganizationChange}
      />

      <button className="prev-button" onClick={prevComponent}>
        Previous
      </button>
      <button className="save-button" onClick={handleSubmit} disabled={!formData.organization_name.trim()}>
        Save and Proceed
      </button>
    </div>
  );
};

export default Component2;
