import React from 'react'
import { Row } from './Row'

export const Table = (items) => {
  return (
    <div className='' >
        {items.map((item)=>(<Row key={items.id} item={item} />))}

    </div>
  )
}
