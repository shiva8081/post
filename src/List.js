import React from 'react'
import { Listitem } from './Listitem'


export const List = ({items}) => {
  return (
    <div>
        {items.map((item)=>(
            <Listitem key={item.id} item={item}/>
        ))}
    </div>
  )
}
