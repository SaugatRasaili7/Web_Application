import React from "react";
export default function input({ type, placeholder}){
    return(
       <div>
      
        <input
          type={type}
          placeholder={placeholder}
          required
          className="w-full p-2 border rounded"
        />
        

        </div>
    )
}