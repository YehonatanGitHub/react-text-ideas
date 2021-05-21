import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Quotes from './Quotes'
// import { useState } from 'react'

const cards = [
  {
    id: '1',
    tag: 'famous-quotes',
    content: 'A house divided against itself cannot stand.',
    author: 'Abraham Lincoln',
    favorit: false,
  },
  {
    id: '2',
    tag: 'famous-quotes',
    content:
      'Imagination is more important than knowledge. For while knowledge defines all we currently know and understand, imagination points to all we might yet discover and create.',
    author: 'Albert Einstein',
    favorit: true,
  },
  {
    id: '3',
    tag: 'technology',
    content: "If you can't explain it simply, you don't understand it well enough.",
    author: 'Abraham Lincoln',
    favorit: true,
  },
]

const Cards = () => {
  return (
    <Accordion defaultActiveKey='0'>
      {cards.map((card) => (
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey={card.id}>
            {card.tag}
          </Accordion.Toggle>
          <Quotes key={card.id} card={card} />
        </Card>
      ))}
    </Accordion>
  )
}

export default Cards
