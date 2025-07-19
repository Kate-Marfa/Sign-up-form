import React, { useState } from "react";
// import RoleSelector from "./RoleSelector.js";
import BasicInfo1 from "./Basic-info-1.js";

function MultiStepForm() {
  const [step, setStep] = useState(1);

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);

  //   const handleChange = (e) => {};

  return (
    <div className="form-container">
      {/* {step === 1 && <RoleSelector />} */}
      {/* {step === 2 && <BasicInfo1 />} */}
      <BasicInfo1 />
    </div>
  );
}
export default MultiStepForm;
