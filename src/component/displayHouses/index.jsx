import React from 'react'

const DisplayHouses = ({houses}) => {
  return (
    <div>
    <h1>Rene's Spectacular House Sale!</h1>
    {houses.map((house, index) => (
      <div key={index}>
        <h2>{house.name}</h2>
        <div>${house.price}</div>
        <div>{house.isSold ? "Sold" : "Still for Sale!"}</div>
      </div>
    ))}
  </div>
  )
}

export default DisplayHouses
