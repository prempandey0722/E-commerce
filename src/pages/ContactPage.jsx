import React , { useRef }from "react";
import emailjs from "@emailjs/browser";
import { Footer, Navbar } from "../components";

const d = process.env.REACT_APP_EMAILJS_SERVICE_ID
const ContactPage = () => {
  const formRef = useRef();

  console.log(d,"data")
  const sendEmail = (e) => {

    e.preventDefault();

    

    emailjs.sendForm(
      "service_yb555ih",
      "template_gx24jhj",
      formRef.current,
      "r9OS5AHyK7QgLZ3tk"
    )
    .then(
      (result) => {
        alert("Email Sent Successfully!");
        console.log(result.text);
      },
      (error) => {
        alert("Failed to Send Email!");
        console.log(error.text);
      }
    );

    e.target.reset();
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Contact Us</h1>
        <hr />
        <div class="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
           
              <div className="form my-3">
                <label for="Name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="Name"
                  name="name"
                  placeholder="Enter your name"
                />
              </div>

              <form ref={formRef} onSubmit={sendEmail}>
              <div className="form my-3">
                <label for="Email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="Email"
                  name="email"
                  placeholder="name@example.com"
                />
              </div>
              <div className="form  my-3">
                <label for="Password">Message</label>
                <textarea
                  rows={5}
                  class="form-control"
                  id="Password"
                  name="message"
                  placeholder="Enter your message"
                />
              </div>
              <div className="text-center">
                <button
                  className="my-2 px-4 mx-auto btn btn-dark"
                  type="submit"
                  // disabled
                >
                  submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
