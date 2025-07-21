import React, { useState } from "react";

function BasicInfo2() {
  return (
    <form className="BasicInfo2">
      <h2>Basic information about you</h2>
      <h3 className="h3-basicInfo2">Categories you work with</h3>
      <div className="categories-list">
        <label className="category-item">
          <input type="checkbox" />
          Economy
        </label>
        <label className="category-item">
          <input type="checkbox" />
          Business
        </label>
        <label className="category-item">
          <input type="checkbox" />
          Trading
        </label>
        <label className="category-item">
          <input type="checkbox" />
          Communications
        </label>
      </div>
      <div className="email-password-container">
        <input
          type="email"
          id="email"
          autoComplete="true"
          placeholder="Email"
        />
        <input type="password" id="password" placeholder="Password" />
        <p className="password-instruction"> 
          The password has to be at least 8 characters long and contain at least
          one upper case letter.
        </p>
      </div>
      <div className="buttons-previous-submit">
        <button type="button">Previous</button>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default BasicInfo2;
