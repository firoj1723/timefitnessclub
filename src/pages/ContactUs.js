import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase';
import { getAuth } from 'firebase/auth';
import './ContactUs.css';

function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");
  const [shift, setShift] = useState("morning");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const auth = getAuth();
    if (!auth.currentUser) {
      alert("You must be logged in to submit the form.");
      return;
    }

    try {
      await addDoc(collection(db, "Contacts"), {
        name,
        email,
        mobile: mobile.toString(),
        message,
        preferredShift: shift,
      });
      alert("Thank you for contacting us!");
      setName("");
      setEmail("");
      setMobile("");
      setMessage("");
      setShift("morning");
    } catch (error) {
      console.error("Error storing contact information:", error);
      alert("Error submitting form, please try again.");
    }
  };

  const handleCancel = () => {
    setName("");
    setEmail("");
    setMobile("");
    setMessage("");
    setShift("morning");
  };

  return (
    <div className="contact-form">
      <h2>Contact Us</h2>
      <p>Get in touch to start your fitness journey with us.</p>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label>Mobile Number</label>
          <input
            type="tel"
            className="form-control"
            placeholder="Enter your mobile number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label>Message</label>
          <textarea
            className="form-control"
            placeholder="Write your message here"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>Preferred Gym Shift</label>
          <select
            className="form-control"
            value={shift}
            onChange={(e) => setShift(e.target.value)}
          >
            <option value="morning">Morning</option>
            <option value="evening">Evening</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <button type="button" className="btn btn-secondary" onClick={handleCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default ContactUs;
