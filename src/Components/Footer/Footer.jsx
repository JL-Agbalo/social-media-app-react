import React from "react";

function Footer() {
  return (
    <footer className="footer bg-light text-center py-3">
      <div className="container">
        <p className="m-0">
          &copy; 2024 Social Media App. All Rights Reserved.
        </p>
        <div>
          <a href="/about">About</a> | <a href="/contact">Contact Us</a> |{" "}
          <a href="/privacy">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
