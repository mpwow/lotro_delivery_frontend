import React from "react";

const SearchIcon = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    {/* Круг лупы */}
    <circle
      cx="28"
      cy="28"
      r="18"
      stroke="#ffc404"
      strokeWidth="4"
      fill="none"
    />
    {/* Ручка лупы */}
    <line
      x1="41"
      y1="41"
      x2="54"
      y2="54"
      stroke="#ffc404"
      strokeWidth="4"
      strokeLinecap="round"
    />
  </svg>
);

export default SearchIcon;
