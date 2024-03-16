"use client";

import React, { useState } from "react";

export default function ContactForm() {
//   const [formData, setFormData] = useState({
//     email: "",
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSent, setIsSent] = useState(false);

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (event) => {
//     setIsSubmitting(true);

//     setTimeout(() => {
//       console.log("Sent :" + formData);
//       setIsSubmitting(false);
//       setIsSent(true);
//     }, 5000);
//   };

return (
  <div className="form__container">
    {!isSent ? (
      <form className="form__wrap">
        <input
          type="email"
          name="email"
          placeholder="Your email"
          id="email"
          className="form__field"
        />

        <div className="btn__wrap form">
          <div className="btn__line"></div>
          <button type="button" className="link__btn form link">
            {isSubmitting ? "..." : "Submit"}
          </button>
        </div>
      </form>
    ) : (
      <div className="text__wrap">
        <h2 className="subheading">Form Sent</h2>
      </div>
    )}
  </div>
);
