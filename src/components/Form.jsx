import React, { useState } from "react";
import axios from "axios";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Invalid email format";
    }
    if (!formData.phone.trim()) {
      errors.phone = "phone is required";
    }

    if (!formData.subject.trim()) {
      errors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents default form submission
    if (validateForm()) {
      try {
        const response = await axios.post(
          "http://localhost:8000/contact/postcontact/",
          formData
        );
        console.log("form submitted", response.data);
        alert("Message sent successfully");
        // Page reload
        window.location.reload();
      } catch (error) {
        console.error("Error submitting form", error);
      }
      // Processing the information not the endpoint
      //alert('Message sent successfully')
      //console.log(formData);

      // To redirect to another page
      //window.location.href= 'contact';
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="d-flex mt-3">
          <div className="flex-grow-1 me-2">
            <input
              type="text"
              name="name"
              value={formData.name}
              placeholder="Name"
              className={`form-control ${errors.name ? "is-invalid" : ""}`}
              onChange={handleChange}
            />
            {errors.name && (
              <div className="invalid-feedback">{errors.name}</div>
            )}
          </div>
          <div className="flex-grow-1 ms-2">
            <input
              type="text"
              name="email"
              value={formData.email}
              placeholder="Email"
              className={`${errors.email ? "form-control is-invalid" : "form-control"}`}
              onChange={handleChange}
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email}</div>
            )}
          </div>
        </div>
        <div className="d-flex mt-3">
          <div className="flex-grow-1 me-2">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              placeholder="Phone (Optional)"
              className={`form-control ${errors.phone && "is-invalid"}`}
              onChange={handleChange}
            />
          </div>
          <div className="flex-grow-1 ms-2">
            <input
              type="text"
              name="subject"
              value={formData.subject}
              placeholder="Subject"
              className={`form-control ${errors.subject && "is-invalid"}`}
              onChange={handleChange}
            />
            {errors.subject && (
              <div className="invalid-feedback">{errors.subject}</div>
            )}
          </div>
        </div>
        <textarea
          id=""
          cols="30"
          rows="10"
          className={`form-control mt-3 ${errors.message && "is-invalid"}`}
          onChange={handleChange}
          name="message"
          value={formData.message}
          placeholder="Enter your message Here"
        ></textarea>
        <button type="submit" className="btn btn-danger mt-3">
          Submit
        </button>
      </form>
    </>
  );
}

export default Form;