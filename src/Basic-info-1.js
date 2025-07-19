import React, { useState } from "react";
import arrowRight from "./keyboard-arrow-left.png";

function BasicInfo1() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(0);

  return (
    <div>
      <form className="BasicInfo-1">
        <h2>Basic information about you</h2>
        <div className="info-list">
          <span className="name-container">
            <input type="text" id="firstName" placeholder="First name"></input>
            <input type="text" id="lastName" placeholder="Last name"></input>
          </span>

          <h3 className="gender-h3">Gender</h3>
          <span className="gender-list">
            <label className="gender-items">
              <input type="radio" name="gender" value="male" />
              Male
            </label>
            <label className="gender-items">
              <input type="radio" name="gender" value="female" />
              Female
            </label>
            <label className="gender-items">
              <input type="radio" name="gender" value="no-answer" />I prefer not
              to say
            </label>
            <label className="gender-items">
              <input type="radio" name="gender" value="other" />
              Other
              <input type="text" id="other-gender-container" />
            </label>
          </span>
        </div>
        <label className="phone-container">
          <select className="select-container">
            <option>+1</option>
            <option>+44</option>
            <option>+46</option>
            <option>+49</option>
            <option>+380</option>
          </select>
          <input
            type="tel"
            className="phoneNumber-container"
            placeholder="Business phone number"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          />
        </label>
        <div className="buttons-prev-cont-container">
          <button type="submit" id="button-previous">
            <img src={arrowRight} alt="" />
            Previous
          </button>
          <button type="submit" id="button-continue">
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}

export default BasicInfo1;
