import Header from './components/Header'
import Footer from './components/Footer'
import Cards from './components/Cards'
import { useState } from 'react'
import AddQuote from './components/AddQuote'

function App() {
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
    // const id = Math.floor(Math.random() * 10000) + 1
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
    // setData(
    //   theData.map((x) => {
    //     if (x.category !== selectQuote) return x
    //     return { ...x, cards: [...x.cards, newQute] }
    //   })
    // )

    let newData = theData.map((column) => {
      if (column.category !== selectQuote) return column
      return { ...column, cards: [...column.cards, newQute] }
    })
    let newData2 = [...data]
    console.log('newData2')
    console.log(newData2)
    console.log('newData')
    console.log(newData)
    setData([...data, newData])
    let newData3 = [...data]
    console.log('newData3')
    console.log(newData3)
    // const theData2 = [...data]
    // console.log(theData2)
    // const stuff = selected.filter(b => b)[0].sub this.setState({foo: stuff})
  }

  // const AddToQuotes = (quote) => {
  //   const id = Math.floor(Math.random() * 10000) + 1
  //   const newQuote = { ...quote }

  //   const newContent = newQuote.content
  //   const newAuthor = newQuote.author
  //   const newQuoteToAdd = { id, newAuthor, newContent }
  //   console.log(newQuoteToAdd)
  //   // setData([...data, cards: newQuote)

  //   setData((prevState) => {
  //     return { ...prevState, cards: newQuote }
  //   })

  //   // const stuff = selected.filter(b => b)[0].sub this.setState({foo: stuff})
  // }

  // const newData = theData.map((column) => {
  //   if (column.category !== theQuote.category) return column
  //   return { ...column, cards: [...column.cards, { newQute }] }
  // })
  // setData([...data, newData])
  // const theData2 = [...data]
  // console.log(theData2)

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
      <AddQuote onAdd={AddToQuotes} />
      <div className='accordion'>
        {data.map((card, i) => (
          <Cards card={card} key={i} toggleCards={toggleCards} />
        ))}
      </div>
    </div>
  )
}

export default App
