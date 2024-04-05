import React from 'react'

export const Button = ({reqType,setreqType,buttonText}) => {
  return (
    <div className={`cursor-pointer flex-grow h-[3rem] text-center content-center text-[2rem] bg-black text-white border-2  border-black ${buttonText===reqType?"bg-blue-500 text-white ":null}`} type="button" onClick={()=>setreqType(buttonText)} >{buttonText}</div>
  )
}
