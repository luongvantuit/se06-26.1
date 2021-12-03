import React from "react";
import '../../assets/css/button_green.css'

const ButtonGreen = (props: { name: string }) => {
  return (
    <div>
      <div className="button__green">{props.name}</div>
    </div>
  );
};

export default ButtonGreen;
