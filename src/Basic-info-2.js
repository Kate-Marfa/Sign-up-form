import React, { useState } from "react";
// import { formData, handleChange, handleBack } from "./MultiStepForm.js";

function BasicInfo2({ formData, handleChange, handleBack }) {
  return (
    <div
      className="BasicInfo2"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <h2>Basic information about you</h2>
      <h3 className="h3-basicInfo2">Categories you work with</h3>
      <div className="categories-list">
        {["Economy", "Business", "Trading", "Communications"].map((cat) => (
          <label className="category-item" key={cat}>
            <input
              type="checkbox"
              name="categories"
              value={cat}
              checked={formData.categories.includes(cat)}
              onChange={handleChange}
            />
            {cat}
          </label>
        ))}
      </div>

      <div className="email-password-container">
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          autoComplete="true"
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          id="password"
          placeholder="Password"
        />
        <p className="password-instruction">
          The password has to be at least 8 characters long and contain at least
          one upper case letter.
        </p>
      </div>
      {/* <div className="buttons-previous-submit">
        <button type="button" onClick={handleBack}>
          Previous
        </button>
        <button type="submit">Submit</button>
      </div> */}
    </div>
  );
}

export default BasicInfo2;
