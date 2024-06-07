import React from "react";
import "./css/button.css"

function Button({  label }) {
  return (
      <button className="button">{label}</button>
  );
}

export default Button;