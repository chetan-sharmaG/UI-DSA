import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const DigitalClock = () => {
  const date = useCurrentDate();
  const hours = date.getHours().toPrecision(2);
  const minutes = date.getMinutes().toString();
  const seconds = date.getSeconds();

  return (
    <div style={{ width: "100px", position: "absolute", top: 0, left: "50%",height:'40px',backgroundColor:'white',display:'flex',alignItems:'center',color:'black',justifyContent:'center' }}>
      <div>
        {hours}:{minutes}:{seconds}
      </div>
    </div>
  );
};

function useCurrentDate() {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    let timer = setInterval(() => {
      setDate(new Date());
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return date;
}

export default DigitalClock;
