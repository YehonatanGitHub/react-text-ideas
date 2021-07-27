import Header from './components/Header'
import Footer from './components/Footer'
import Cards from './components/Cards'
import { useState } from 'react'
import AddQuote from './components/AddQuote'

function App() {
  const [showAddQuote, setShowAddQuote] = useState(false)
  const [data, setData] = useState([
    {
      category: 'famous_quotes',
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
        {
          id: 7,
          content: 'testete tetsete test et',
          author: 'Albert Einstein',
        },
      ],
    },
    {
      category: 'technology',
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
      category: 'inspiration',
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
  const AddToQuotes = (quote) => {
    let theData = [...data]
    let theQuote = { ...quote }
    console.log(theData)
    console.log('theQuote')
    console.log(theQuote)
    let id = Math.floor(Math.random() * 10000) + 1
    let newQute = {
      id: id,
      content: theQuote.quote,
      author: theQuote.author,
    }
    let selectQuote = theQuote.category
    console.log('newQute')
    console.log(newQute)
    console.log('selectQuote')
    console.log(selectQuote)

    let newData = theData.map((column) => {
      if (column.category !== selectQuote) return column
      return { ...column, cards: [...column.cards, newQute] }
    })
    console.log('newData')
    console.log(newData)
    setData(newData)
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
      <Header
        onAdd={() => setShowAddQuote(!showAddQuote)}
        title='Share Great Quotes'
        showAdd={showAddQuote}
      />
      {showAddQuote && <AddQuote onAdd={AddToQuotes} />}
      <div className='accordion'>
        {data.map((card, i) => (
          <Cards card={card} index={i} key={i} toggleCards={toggleCards} />
        ))}
      </div>
    </div>
  )
}

export default App
