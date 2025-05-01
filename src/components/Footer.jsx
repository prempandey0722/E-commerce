import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="mb-0 text-center">
        <div className="d-flex align-items-center justify-content-center pb-5">
          <div className="col-md-6">
            <p className="mb-3 mb-md-0">Made with ❤️ by {" "}
              <a href=" " className="text-decoration-underline text-dark fs-5" target="_blank" rel="noreferrer">Prem Pandey</a>
            </p>
            <a className="text-dark fs-4" href=" " target="_blank" rel="noreferrer">
              <i className="fa fa-github"></i>
            </a>
          </div>
        </div>
        <div className="d-flex flex-column align-items-center justify-content-center pt-3">
          <div className="mb-3">
            <a href="/about" className="text-dark text-decoration-none mx-2">About Us</a>
            <a href="/contact" className="text-dark text-decoration-none mx-2">Contact</a>
            <a href="/privacy" className="text-dark text-decoration-none mx-2">Privacy Policy</a>
          </div>
          <div>
            <p className="text-muted small">© {new Date().getFullYear()} Your Company. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
