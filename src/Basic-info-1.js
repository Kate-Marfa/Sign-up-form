import rectangle from "./Rectangle.png"

function BasicInfo1({
  formData,
  handleChange,
}) {

  return (
    <div className="BasicInfo-1" onSubmit={(e) => e.preventDefault()}>
      <h2>Basic information about you</h2>
      <div className="stage-of-form-container">
        <p className="circle-blue">1</p>
        <img src={rectangle} alt="" width="90px"/>
        <p className="circle-no-color">2</p>
      </div>
      <div className="info-list">
        <span className="name-container">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            id="firstName"
            onChange={handleChange}
            placeholder="First name"
          ></input>
          <input
            type="text"
            value={formData.lastName}
            id="lastName"
            onChange={handleChange}
            name="lastName"
            placeholder="Last name"
          ></input>
        </span>

        <h3 className="gender-h3">Gender</h3>
        <span className="gender-list">
          <label className="gender-items">
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === "male"}
              onChange={handleChange}
            />
            Male
          </label>
          <label className="gender-items">
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.value === "female"}
              onChange={handleChange}
            />
            Female
          </label>
          <label className="gender-items">
            <input
              type="radio"
              name="gender"
              value="no-answer"
              checked={formData.value === "no-answer"}
              onChange={handleChange}
            />
            I prefer not to say
          </label>
          <label className="gender-items">
            <input
              type="radio"
              name="gender"
              value="other"
              checked={formData.value === "other"}
              onChange={handleChange}
            />
            Other
          </label>
          {formData.gender === "other" && (
            <input
              type="text"
              name="otherGender"
              value={formData.otherGender}
              onChange={handleChange}
              id="other-gender-container"
            />
          )}
        </span>
      </div>
      <label className="phone-container">
        <select
          className="select-container"
          name="countryCode"
          value={formData.contryCode}
          onChange={handleChange}
        >
          <option value="+1">+1</option>
          <option value="+44">+44</option>
          <option value="+46">+46</option>
          <option value="+49">+49</option>
          <option value="+380">+380</option>
        </select>
        <input
          type="tel"
          name="phoneNumber"
          className="phoneNumber-container"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder="Business phone number"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        />
      </label>
    </div>
  );
}

export default BasicInfo1;
