"use client";

import { CustomButtonProps } from "@/types";

const CustomButton = ({
  title,
  containersStyles,
  handleClick,
  btnType,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containersStyles}`}
      onClick={() => {
        handleClick;
      }}
    >
      <span className={`flex-1 `}>{title}</span>
    </button>
  );
};

export default CustomButton;
