import Quotes from './Quotes'
// import React, { useState } from 'react'

const Cards = ({ card, index, toggleCards }) => {
  // const [count, setCount] = useState(1)
  // function increment() {
  //   setCount((prevCount) => prevCount + 1)
  //   console.log()
  // }

  return (
    <div
      className={'categorys ' + (card.open ? 'open' : '')}
      key={index}
      onClick={() => toggleCards(index)}>
      <div className='category-name'>{card.category}</div>
      {card.cards.map((quote, i) => (
        <Quotes quotes={quote} i={i} />
      ))}
    </div>
  )
}

export default Cards
