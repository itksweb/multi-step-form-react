import React from "react";

const StepContainer = ({ children, title, descr }) => {
  return (
    <div className="w-[95%] sm:w-[85%] ">
      <h1 className="text-[var(--Blue-950)] text-2xl font-bold mt-5  ">
        {title}
      </h1>
      <p className="mb-10 text-[var(--Grey-500)]">{descr}</p>
      <div className="ll"></div>
      {children}
    </div>
  );
};

export default StepContainer;
