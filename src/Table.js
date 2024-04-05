import React from 'react'
import { Row } from './Row'

export const Table = ({items}) => {
  return (
    <table className='' >
        <tbody>

        {items.map((item)=>(<Row key={item.id} item={item} />))}
        </tbody>

    </table>
  )
}
