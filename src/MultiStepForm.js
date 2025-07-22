import React, { useState } from "react";
import RoleSelector from "./RoleSelector.js";
import BasicInfo1 from "./Basic-info-1.js";
import BasicInfo2 from "./Basic-info-2.js";
import arrowRight from "./keyboard-arrow-left.png";

function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    role: "",
    firstName: "",
    lastName: "",
    gender: "",
    otherGender: "",
    phoneNumber: "",
    countryCode: "",
    categories: [],
    email: "",
    password: "",
  });

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox" && name === "categories") {
      setFormData((prev) => ({
        ...prev,
        categories: checked
          ? [...prev.categories, value]
          : prev.categories.filter((cat) => cat !== value),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const isLastStep = step === 3;
  const isFirstStep = step === 1;

  const renderButtons = () => (
    <div className="navigation-buttons">
      {!isFirstStep && (
        <button type="button" onClick={handleBack} id="button-previous">
          <img src={arrowRight} alt="" />
          Previous
        </button>
      )}
      {!isLastStep ? (
        <button type="button" onClick={handleNext} id="button-continue">
          Continue
        </button>
      ) : (
        <button type="button" onClick={handleSubmit} id="button-continue">
          Submit
        </button>
      )}
    </div>
  );

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      {step === 1 && (
        <RoleSelector formData={formData} setFormData={setFormData} />
      )}
      {step === 2 && (
        <BasicInfo1 formData={formData} handleChange={handleChange} />
      )}
      {step === 3 && (
        <BasicInfo2 formData={formData} handleChange={handleChange} />
      )}
      {renderButtons()}
    </form>
  );
}
export default MultiStepForm;
