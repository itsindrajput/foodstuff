import React, { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Sign Up");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  // Handle input change for form data
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form reload
    if (!agreedToTerms) {
      alert("Please agree to the terms and conditions.");
      return;
    }

    if (currState === "Login") {
      console.log("Logging in:", formData);
    } else {
      console.log("Signing up:", formData);
    }
    setShowLogin(false); // Close the popup after submission
  };

  return (
    <div className="login-popup">
      <div className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt="Close"
            className="close-icon"
          />
        </div>

        <form className="login-popup-inputs" onSubmit={handleSubmit}>
          {currState === "Sign Up" && (
            <input
              type="text"
              placeholder="Your name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          )}
          <input
            type="email"
            placeholder="Your email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            autoComplete="email"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
            autoComplete="current-password"
          />
          <button type="submit">
            {currState === "Login" ? "Login" : "Create account"}
          </button>
        </form>

        <div className="login-popup-condition">
          <input
            type="checkbox"
            id="terms"
            checked={agreedToTerms}
            onChange={() => setAgreedToTerms(!agreedToTerms)}
          />
          <label htmlFor="terms">
            By continuing, I agree to the terms of use & privacy policy.
          </label>
        </div>

        <p className="toggle-auth">
          {currState === "Login" ? (
            <>
              Create a new account?{" "}
              <span
                onClick={() => setCurrState("Sign Up")}
                className="toggle-link"
              >
                Click here
              </span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span
                onClick={() => setCurrState("Login")}
                className="toggle-link"
              >
                Login here
              </span>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default LoginPopup;
