import React, { useState } from "react";
import "./index.css";

export default function App() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [isValid, setIsValid] = useState(false);
  const [isSubmitted, setSubmitted] = useState(false);

  const firstNameHandler = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      firstName: event.target.value,
    }));
  };
  const lastNameHandler = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      lastName: event.target.value,
    }));
  };
  const emailHandler = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      email: event.target.value,
    }));
  };

  const handleRegister = (event) => {
    event.preventDefault();
    if (values.firstName && values.lastName && values.email) {
      setIsValid(true);
    }
    setSubmitted(true);
  };

  return (
    <div className="form-container">
      <form className="register-form">
        {/* Uncomment the next line to show the success message */}
        {isValid && (
          <div className="success-message">
            Success! Thank you for registering
          </div>
        )}
        <input
          id="first-name"
          className="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
          value={values.firstName}
          onChange={firstNameHandler}
        />
        {/* Uncomment the next line to show the error message */}
        {isSubmitted && !values.firstName && (
          <span id="first-name-error">Please enter a first name</span>
        )}
        <input
          id="last-name"
          className="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={values.lastName}
          onChange={lastNameHandler}
        />
        {/* Uncomment the next line to show the error message */}
        {isSubmitted && !values.lastName && (
          <span id="last-name-error">Please enter a last name</span>
        )}{" "}
        <input
          id="email"
          className="form-field"
          type="text"
          placeholder="Email"
          name="email"
          value={values.email}
          onChange={emailHandler}
        />
        {/* Uncomment the next line to show the error message */}
        {isSubmitted && !values.email && (
          <span id="email-error">Please enter an email address</span>
        )}{" "}
        <button className="form-field" type="submit" onClick={handleRegister}>
          Register
        </button>
      </form>
    </div>
  );
}
