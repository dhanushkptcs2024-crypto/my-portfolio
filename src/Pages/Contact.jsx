import React from "react";
import Navbar from "../Navbar";

function Contact() {

  function handleSubmit(event) {
    event.preventDefault();

    alert("Thank you! Your message has been submitted.");
  }

  return (

    <div className="page">

      <Navbar />

      <main className="inner-page">

        <div className="page-card glass contact-card">

          <div className="contact-left">

            <p className="small-title">
              GET IN TOUCH
            </p>

            <h1>
              Let's <span>Connect</span>
            </h1>

            <p className="contact-description">
              Have a project idea, question, or simply
              want to connect? Send me a message.
            </p>

            <div className="contact-info">

              <div className="contact-item glass">

                <div className="contact-symbol">
                  @
                </div>

                <div>
                  <small>Email</small>
                  <p>
                    dhanushbajpe47@gmail.com
                  </p>
                </div>

              </div>

              <div className="contact-item glass">

                <div className="contact-symbol">
                  in
                </div>

                <div>
                  <small>LinkedIn</small>
                  <p>
                    Your LinkedIn
                  </p>
                </div>

              </div>

            </div>

          </div>

          <form
            className="contact-form glass"
            onSubmit={handleSubmit}
          >

            <label>
              Your Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              required
            />

            <label>
              Your Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              required
            />

            <label>
              Your Message
            </label>

            <textarea
              placeholder="Write your message..."
              rows="5"
              required
            ></textarea>

            <button
              type="submit"
              className="btn primary-btn"
            >
              Send Message
              <span>→</span>
            </button>

          </form>

        </div>

      </main>

    </div>

  );
}

export default Contact;
