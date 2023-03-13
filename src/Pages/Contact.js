import "../App.css";
import { Link } from "react-router-dom";
import React from "react";


import { Component } from 'react';
import { FormErrors } from './FormErrors';




class Contact extends Component {
  
  constructor (props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
      formErrors: {name: '', email: '', subject: '', message: ''},
      nameValid: false,
      emailValid: false,
      subjectValid: false,
      messageValid: false,
      formValid: false
    }
  }
  
  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
                  () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let nameValid = this.state.nameValid;
    let emailValid = this.state.emailValid;
    let subjectValid = this.state.subjectValid;
    let messageValid = this.state.messageValid

    switch(fieldName) {
      case 'name':
        nameValid = value.length >= 3;
        fieldValidationErrors.name = nameValid ? '': ' is too short';
        break;
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'subject':
        subjectValid = value.length >= 5;
        fieldValidationErrors.subject = subjectValid ? '': ' is too short';
        break;
      case 'message':
        messageValid = value.length >= 9;
         fieldValidationErrors.message = messageValid ? '': ' is too short';
         break;      
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    nameValid: nameValid,
                    emailValid: emailValid,
                    subjectValid: subjectValid,
                    messageValid: messageValid
                  }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.nameValid && this.state.emailValid && this.state.passwordValid && this.state.messageValid});
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }

  render () {
    return (
      <div>
      <nav className="menu-bar-div-row">
        <Link to="/Home" className="fa fa-solid fa-bars" id="menubars"></Link>
        <p role='paragraph'>Contact Us</p>
      </nav>
      <div className="contact-row">

      <form className="contact-Form">
        <h3>Send us a message!</h3>
        <div className="panel panel-default">
          <FormErrors formErrors={this.state.formErrors}/>
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.name)}`}>
          <label htmlFor="name">Name</label>
          <input type="name" id="name" className="form-control" name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleUserInput}  required/>
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" className="form-control" name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleUserInput}  required/>
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.subject)}`}>
          <label htmlFor="subject">Subject</label>
          <input type="subject" id="subject" className="form-control" name="subject"
            placeholder="Subject"
            value={this.state.subject}
            onChange={this.handleUserInput}  required/>
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.message)}`}>
          <label htmlFor="message">Message</label>
          <textarea type="message" id="message" className="form-control" name="message"
            placeholder="Message here"
            value={this.state.message}
            onChange={this.handleUserInput} required />
        </div>
        <button type="submit" className="btn btn-primary" >Submit</button>
      </form>

      <div className="contact-details">
          <h5>Phone</h5> 
          <p role='paragraph'>(04) 384 8395</p> <br />
          <h5>email</h5>
          <p role='paragraph'>
            <a href="mailto:info@vorstermans.co.nz">info@vorstermans.co.nz</a>
          </p>
          <br />
          <h5>Street address</h5>
          <br />
          <p role='paragraph'>
            First floor, 262 Wakefield St, Wellington
            <br />
            Postal address
            <br />
            PO Box 19 084, Wellington
          </p>
        </div>
      </div>
      <div className="contact-gmap">
        <iframe className="gmap" name='gmap' role="gmaps"          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.7551905589626!2d174.78018211515922!3d-41.292432179272986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d38afd06d7760f9%3A0x5842225d83e2f887!2sVorstermans%20Architects!5e0!3m2!1sen!2snz!4v1668206190729!5m2!1sen!2snz"
          style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>

    )
  }
}





const Contact1 = () => {
  return (
    <div>
      <nav className="menu-bar-div-row">
        <Link to="/Home" className="fa fa-solid fa-bars" id="menubars"></Link>
        <p role='paragraph'>Contact Us</p>
      </nav>
      <div className="contact-row">

        <div className="email-container">
          <p role='paragraph'>Send us a message!</p>
          <form
            target="_blank"
            action="https://formsubmit.co/20220552@mywhitecliffe.com"
            method="POST"
          >
            <div className="form-group">
              <div className="form-row">
                <div className="col">
                <label htmlFor="name">Name</label>
                  <input
                    type="name"
                    id="name"
                    name="name"
                    className="form-control"
                    placeholder="Full Name"
                    required
                  />
                </div>
                <div className="col">
                <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="eamil"
                    name="email"
                    className="form-control"
                    placeholder="Email Address"
                    required
                  />
                </div>
                <div className="col">
                <label htmlFor="subject">Subject</label>
                  <input
                    type="subject"
                    id="subject"
                    name="subject"
                    className="form-control"
                    placeholder="Subject"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
            <label htmlFor="message">Message</label>
              <textarea
                placeholder="Your Message"
                className="form-control"
                name="message"
                id="message"
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-lg btn-dark btn-block">
              Submit Form
            </button>
          </form>
        </div>
        
        <div className="contact-details">
          <h5>Phone</h5> 
          <p role='paragraph'>(04) 384 8395</p> <br />
          <h5>email</h5>
          <p role='paragraph'>
            <a href="mailto:info@vorstermans.co.nz">info@vorstermans.co.nz</a>
          </p>
          <br />
          <h5>Street address</h5>
          <br />
          <p role='paragraph'>
            First floor, 262 Wakefield St, Wellington
            <br />
            Postal address
            <br />
            PO Box 19 084, Wellington
          </p>
        </div>
      </div>
      <div className="contact-gmap">
        <iframe className="gmap" name='gmap' role="gmaps"          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.7551905589626!2d174.78018211515922!3d-41.292432179272986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d38afd06d7760f9%3A0x5842225d83e2f887!2sVorstermans%20Architects!5e0!3m2!1sen!2snz!4v1668206190729!5m2!1sen!2snz"
          style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
};
export default Contact;
