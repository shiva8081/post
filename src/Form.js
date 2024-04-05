import React from 'react'
import { Button } from './Button'

export const Form = ({reqType,setreqType}) => {
  return (
    <form className="flex   " onSubmit={(e)=>e.preventDefault}>
       <Button buttonText='users' reqType={reqType} setreqType={setreqType} />
       <Button buttonText='posts' reqType={reqType} setreqType={setreqType} />
       <Button buttonText='comments' reqType={reqType} setreqType={setreqType} />


    </form>
  )
}
