import Header from './components/Header'
import Footer from './components/Footer'
import Cards from './components/Cards'
import { useState } from 'react'
import AddQuote from './components/AddQuote'

function App() {
  const [data, setData] = useState([
    {
      category: 'Famous Quotes',
      open: false,
      cards: [
        {
          id: 1,
          content:
            '1Imagination is more important than knowledge. For while knowledge defines all we currently know and understand, imagination points to all we might yet discover and create.',
          author: 'Albert Einstein',
        },
        {
          id: 2,
          content:
            '2Imagination is more important than knowledge. For while knowledge defines all we currently know and understand, imagination points to all we might yet discover and create.',
          author: 'Albert Einstein',
        },
      ],
    },
    {
      category: 'Technology',
      open: false,
      cards: [
        {
          id: 3,
          content:
            '3Imagination is more important than knowledge. For while knowledge defines all we currently know and understand, imagination points to all we might yet discover and create.',
          author: 'Albert Einstein',
        },
        {
          id: 4,
          content:
            '4Imagination is more important than knowledge. For while knowledge defines all we currently know and understand, imagination points to all we might yet discover and create.',
          author: 'Albert Einstein',
        },
      ],
    },
    {
      category: 'Inspiration',
      open: false,
      cards: [
        {
          id: 5,
          content:
            '5Imagination is more important than knowledge. For while knowledge defines all we currently know and understand, imagination points to all we might yet discover and create.',
          author: 'Albert Einstein',
        },
        {
          id: 6,
          content:
            '6Imagination is more important than knowledge. For while knowledge defines all we currently know and understand, imagination points to all we might yet discover and create.',
          author: 'Albert Einstein',
        },
      ],
    },
  ])

  // Add Quote
  const AddToQuote = (quote) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newQuote = { id, ...quote }
  }

  const toggleCards = (index) => {
    setData(
      data.map((card, i) => {
        if (i === index) {
          card.open = !card.open
        } else {
          card.open = false
        }
        return card
      })
    )
  }

  return (
    <div className='container'>
      <Header title='Share Great Quotes' />
      <Footer title='Have Great Ideas?' />
      <AddQuote onAdd={AddToQuote} />
      <div className='accordion'>
        {data.map((card, i) => (
          <Cards card={card} index={i} toggleCards={toggleCards} />
        ))}
      </div>
    </div>
  )
}

export default App
