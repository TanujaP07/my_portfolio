import React from "react";

export default function SectionHeading({ children }) {
  return (
    <h2 className="text-3xl font-medium uppercase mb-8 text-center text-purple-800">
      {/* <h2 className="text-xl tracking-widest uppercase text-purple-800"> */}
      {children}
    </h2>
  );
}
