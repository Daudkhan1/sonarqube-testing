import React, { useState } from "react";
import emailjs from "emailjs-com";
import Footer from "../components/Footer";
import phone from "../assets/phone.png";
import mail from "../assets/mail.png";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "" || !validateEmail(email) || message.trim() === "") {
      setError(true);
      setSuccess(false);
      setTimeout(() => {
        setError(false);
      }, 4000);
      return;
    }

    const serviceID = "service_pzuv2vc";
    const templateID = "template_xz0g75c";
    const userID = "i57sCGlaaDbm4eG5H";

    const data = {
      name: name,
      email: email,
      message: message,
    };

    emailjs
      .send(serviceID, templateID, data, userID)
      .then((response) => {
        setSuccess(true);
        setName("");
        setEmail("");
        setMessage("");
        setError(false);
        setTimeout(() => {
          setSuccess(false);
        }, 4000);
      })
      .catch((error) => {
        setError(true);
        setSuccess(false);
        setTimeout(() => {
          setError(false);
        }, 4000);
      });
  };

  return (
    <>
      <section className="gap text-center">
        <div className="container pt-5 pb-5">
          <div>
            <h2 className="">Let's Build Something Big Together</h2>
            <p>
              Got a project in mind? We would love to hear about it. Share your
              thoughts, and let's explore <br /> how Maanz AI can bring your
              ideas to life.
            </p>
          </div>
        </div>
      </section>

      <section className="right-gradient">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12 text-center">
              <h2 className="heading mb-5 small-gap">Reach Out</h2>
              <form
                className="pr-lg-5 pr-sm-0 mt-5 pt-5"
                onSubmit={handleSubmit}
              >
                <div className="form-row">
                  <div className="form-group col-md-6 mb-5">
                    <input
                      type="text"
                      required
                      className="form-control border-0 border-bottom border-dark custom-input"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your name"
                    />
                  </div>

                  <div className="form-group col-md-6 mb-5">
                    <input
                      type="email"
                      required
                      className="form-control border-0 border-bottom border-dark custom-input"
                      id="email"
                      value={email}
                      pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                      placeholder="Enter your email"
                      onChange={(e) => setEmail(e.target.value)}
                      title="Please enter a valid email address"
                    />
                  </div>
                </div>

                <div className="form-group mb-5">
                  <textarea
                    required
                    className="form-control border-0 border-bottom border-dark custom-input"
                    id="message"
                    rows="1"
                    value={message}
                    placeholder="Type your message here"
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>

                <button type="submit" className="btn job-cta w-100 mb-5">
                  Submit
                </button>
                {success && (
                  <div className="alert alert-success mt-3" role="alert">
                    Email sent successfully!
                  </div>
                )}
                {error && (
                  <div className="alert alert-danger mt-3" role="alert">
                    Please fill in all fields correctly before submitting.
                  </div>
                )}
              </form>
              <div className="vertical-line d-none d-lg-block d-md-none"></div>
            </div>
            <div className="col-md-6 col-sm-12 pl-md-5">
              <h2 className="heading mb-5 text-center">Contact US</h2>
              <div className="mb-4 d-flex gap-3 align-items-center">
                <span className="mr-1">
                  <img src={phone} alt="phone-img" />
                </span>
                <h5>+92512895034</h5>
              </div>
              <h5 className="mb-5 d-flex gap-3">
                <span className="mr-1">
                  <img src={mail} alt="mail-icon" />
                </span>
                info@maanz-ai.com
              </h5>

              <h4>Head-Office</h4>
              <h5 className="contact-section-h">USA:</h5>
              <p className="contact-section-p mb-5">
                Maanz AI LLC 312 W 2nd St Unit #A3286 Casper, WY 82601
              </p>

              <h4>Development-Offices</h4>

              <h5 className="contact-section-h">Islamabad:</h5>
              <p className="contact-section-p">
                8th floor North Side, ISE Tower, Jinnah Avenue, Islamabad,
                Pakistan
              </p>
              <h5 className="contact-section-h">Lahore:</h5>
              <p className="contact-section-p">
                The Central 251 Block L - Phase 2, Johar Town, Lahore, Pakistan
              </p>
            </div>
          </div>
          <div className="map text-center pt-5">
            <div className="pt-5">
              <iframe
                title="address"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2925.1081554544735!2d-106.33164712347768!3d42.849449404042566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8760bca480ca44a5%3A0xfcb106b13f74bbc4!2s312%20W%202nd%20St%20a3286%2C%20Casper%2C%20WY%2082601%2C%20USA!5e0!3m2!1sen!2s!4v1704364934271!5m2!1sen!2s"
                width="100%"
                height="300px"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
