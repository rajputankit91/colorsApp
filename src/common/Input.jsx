import React from "react";
import "./input.css"

const ReusableInput = ({...props}) =>{
  return (
    <>
    <div className="input_wrap">
      <div className="input_container" id="inputContainer">
        {
          props.icon &&
          <div className="input_icon">
            {props.icon}
          </div>
        }
        <input
          type={props.type}
          placeholder={props.placeholder}
          onChange={props.onChange}
          onKeyUp={props.keyupfunction}
          />
      </div>
    </div>
    </>
  )
}

export default ReusableInput;