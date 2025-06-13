import React from "react";
import { useCart } from "../../../../context/CartContext";

const CauldronIcon = () => {
  const { cartCount } = useCart();
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 64 64"
      preserveAspectRatio="xMidYMid meet"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(0, -4)">
        {/* Ручка котелка */}
        <path
          d="M18 32 C18 12, 46 12, 46 32"
          stroke="#ffc404"
          strokeWidth="2"
          fill="none"
        />

        {/* Котелок */}
        <ellipse
          cx="32"
          cy="40"
          rx="22"
          ry="14"
          fill="#ffc404"
        />
        <rect
          x="10"
          y="40"
          width="44"
          height="18"
          rx="9"
          fill="#ffc404"
        />

        {/* Счётчик внутри котелка */}
        <text
          x="32"
          y="43"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="20"
          fontWeight="bold"
          fill="#000">
          {cartCount()}
        </text>
      </g>
    </svg>
  );
};

export default CauldronIcon;
