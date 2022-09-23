import React from "react";

function Buttons({ styles }) {
  return (
    <button
      type="button"
      className={`px-6 py-4 bg-blue-gradient font-poppins font-medium
    text-[18px] text-primary outline-none ${styles} rounded-[10px]`}
    >
      Get Started
    </button>
  );
}

export default Buttons;
