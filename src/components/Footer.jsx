import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>DevendraSankhlaⓒ {year}</p>
    </footer>
  );
}

export default Footer;
