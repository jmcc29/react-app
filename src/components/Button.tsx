import React, { useState } from "react";

type ButtonProps = {
  children?: React.ReactNode;
};

function Button({children}: ButtonProps) {
  const [isActive, setIsActive] = useState(false);
  const handleButtonClick = () => setIsActive(!isActive);
  return (
    <button
      disabled={isActive!}
      onClick={handleButtonClick}
      type="button"
      className={`btn btn-${!isActive ? "primary" : "secondary"}`}
    >
      {isActive ? "Cargando..." : children}
    </button>
  );
}

export default Button;
