import React from 'react';
import './contact.css';
import { Link } from 'react-router-dom';
function Contact() {
  return (
    <>
      <div className='back'>
        <div className="contact-form">     
            <span className='topping'>Drop us a line</span>
          <div className="mb-3">
            <label className="label" htmlFor="firstName">First Name</label>
            <input className="input-field form-control" type="text" id="firstName" />
          </div>

          <div className="mb-3">
            <label className="label" htmlFor="lastName">Last Name</label>
            <input className="input-field form-control" type="text" id="lastName" />
          </div>

          <div className="mb-3">
            <label className="label" htmlFor="email">Email address</label>
            <input className="input-field form-control" type="email"id="email" />
          </div>
          <div className="mb-3">
            <label className="label" htmlFor="email">Subject</label>
            <input className="input-field form-control" type="text" />
          </div>
          <div className="mb-3">
            <label className="label" htmlFor="email">Comments</label>
            <input className="input-field form-control" type="text" />
          </div>

          <button type="button" className="btn btn-outline-success button">
          <Link className="link" to="/posts">
          Submit
        </Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default Contact;
