import React from "react";
import { useRef } from "react";
import { IoRefresh } from "react-icons/io5";

const RestartButton = ({
  onRestart: handleRestart,
  className = "",
}: {
  onRestart: () => void;
  className?: string;
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const handleClick = () => {
    buttonRef.current?.blur();
    handleRestart();
  };

  return(
  <button
    ref={buttonRef}
    onClick={handleClick}
    className={`block rounded px-8 py-2 hover:bg-slate-700/50 ${className}`}
  >
    <IoRefresh className="w-6 h-6" />
  </button>
  );
};
export default RestartButton;
