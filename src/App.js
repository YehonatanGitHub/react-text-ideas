import Header from './components/Header'
import Footer from './components/Footer'
import Cards from './components/Cards'
import addQuote from './components/AddQuote'
import { useState } from 'react'
import AddQuote from './components/AddQuote'

function App() {
  const [data, setData] = useState([
    {
      category: 'Famous Quotes',
      open: false,
      cards: [
        {
          content:
            '1Imagination is more important than knowledge. For while knowledge defines all we currently know and understand, imagination points to all we might yet discover and create.',
          author: 'Albert Einstein',
        },
        {
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
          content:
            '3Imagination is more important than knowledge. For while knowledge defines all we currently know and understand, imagination points to all we might yet discover and create.',
          author: 'Albert Einstein',
        },
        {
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
          content:
            '5Imagination is more important than knowledge. For while knowledge defines all we currently know and understand, imagination points to all we might yet discover and create.',
          author: 'Albert Einstein',
        },
        {
          content:
            '6Imagination is more important than knowledge. For while knowledge defines all we currently know and understand, imagination points to all we might yet discover and create.',
          author: 'Albert Einstein',
        },
      ],
    },
  ])

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
      <Header title='Text Great Quotes' />
      <AddQuote />
      <div className='accordion'>
        {data.map((card, i) => (
          <Cards card={card} index={i} toggleCards={toggleCards} />
        ))}
        <Footer title='Have Great Ideas?' />
      </div>
    </div>
  )
}

export default App
