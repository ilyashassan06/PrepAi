import React from 'react'
import Card from '../Card/Card'

function DetailsGrid() {
  return (
    <div className="grid grid-cols-2 xl:grid-cols-4  w-full gap-5">
  <Card />
  <Card />
  <Card />
  <Card />
</div>
  )
}

export default DetailsGrid
