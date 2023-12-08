import React from "react";

const Button = (props) => {
    const name =props.name
    console.log(name)
    return(
    <div className="px-3 py-1 mx-2 my-3 border rounded-lg bg-gray-100 text-sm font-bold">
        <button>{name}</button>
    </div>
  )
}

export default Button;
