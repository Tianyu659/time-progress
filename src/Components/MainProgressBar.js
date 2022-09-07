import React from "react";

export default function MainProgressBar({ percent }) {

  return (
    <>
      <progress
        className="progress progress-primary w-4/5 h-10 border-2 border-primary rounded-full"
        value={percent < 1 ? percent : 1}
        max="1"
      ></progress>
    </>
  );
}
