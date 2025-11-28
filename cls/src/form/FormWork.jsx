import React, { useState } from "react";
import "./style.css";

const FormWork = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    address: "",
    position: "",
    info: "",
    cv: null
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const validate = () => {
    const newErrors = {};
    const { firstName, lastName, email, phone, country, city, address, position } = formData;

    if (!firstName.trim()) newErrors.firstName = "First name is required";
    if (!lastName.trim()) newErrors.lastName = "Last name is required";

    if (!email.trim()) newErrors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(email)) newErrors.email = "Invalid email";

    if (!phone.trim()) newErrors.phone = "Phone is required";
    else if (!/^[0-9]{7,15}$/.test(phone)) newErrors.phone = "Phone must be 7–15 digits";

    if (!country) newErrors.country = "Country is required";
    if (!city.trim()) newErrors.city = "City is required";
    if (!address.trim()) newErrors.address = "Address is required";

    if (!position) newErrors.position = "Position is required";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      alert("Form submitted successfully");

      console.log("Form Data:", formData);

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        country: "",
        city: "",
        address: "",
        position: "",
        info: "",
        cv: null
      });
    }
  };

  return (
    <div className="form-wrapper">
      <h2>Job Application Form Widget</h2>

      <form onSubmit={handleSubmit} className="job-form">
        {/* Row 1 */}
        <div className="row">
          <div className="input-group">
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && <p className="error">{errors.firstName}</p>}
          </div>

          <div className="input-group">
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && <p className="error">{errors.lastName}</p>}
          </div>
        </div>

        {/* Row 2 */}
        <div className="row">
          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          <div className="input-group">
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && <p className="error">{errors.phone}</p>}
          </div>
        </div>

        {/* Country */}
        <div className="input-group">
          <select name="country" value={formData.country} onChange={handleChange}>
            <option value="">Select country</option>
            <option>India</option>
            <option>USA</option>
            <option>UAE</option>
            <option>Canada</option>
          </select>
          {errors.country && <p className="error">{errors.country}</p>}
        </div>

        {/* City */}
        <div className="input-group">
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
          />
          {errors.city && <p className="error">{errors.city}</p>}
        </div>

        {/* Address */}
        <div className="input-group">
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
          />
          {errors.address && <p className="error">{errors.address}</p>}
        </div>

        {/* Position */}
        <div className="input-group">
          <select name="position" value={formData.position} onChange={handleChange}>
            <option value="">Choose desired position</option>
            <option>Developer</option>
            <option>Designer</option>
            <option>Manager</option>
          </select>
          {errors.position && <p className="error">{errors.position}</p>}
        </div>

        {/* Additional Info */}
        <textarea
          name="info"
          placeholder="Additional info"
          value={formData.info}
          onChange={handleChange}
        ></textarea>

        {/* CV Upload */}
        <div className="file-row">
          <label>Add your CV</label>
          <input type="file" name="cv" onChange={handleChange} />
        </div>

        {/* Submit Buttons */}
        <div className="btn-group">
          <button type="reset" className="reset-btn">Reset</button>
          <button type="submit" className="send-btn">Send</button>
        </div>
      </form>
    </div>
  );
};

export default FormWork;
