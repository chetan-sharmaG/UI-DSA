import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  console.log(progress)
  return (
    <>
      <div>
        <button onClick={() => setProgress(progress+1)}>
          Add
        </button>
      </div>
      {Array(progress).fill(null).map((_,index)=>(
        <Bar key={index}/>
      ))}

    </>
  );
};

function Bar() {
   const [startTransition, setStartTransition] =
    useState(false);

  // Start transition after first render and never
  // apply this effect ever again.
  useEffect(() => {
    if (startTransition) {
      return;
    }

    setStartTransition(true);
  });

  return (
    <div className="bar">
      <div
        className={[
          'bar-contents',
          startTransition && 'bar-contents--filled',
        ]
          .filter(Boolean)
          .join(' ')}
      />{Math.random()}
    </div>
  );
}

export default ProgressBar;
