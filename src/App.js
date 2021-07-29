import Header from './components/Header'
import Footer from './components/Footer'
import Cards from './components/Cards'
import { useState } from 'react'
import AddQuote from './components/AddQuote'

function App() {
  const [showAddQuote, setShowAddQuote] = useState(false)
  const [data, setData] = useState([
    {
      category: 'Love',
      open: false,
      cards: [
        {
          id: 3,
          content:
            'Let us always meet each other with smile, for the smile is the beginning of love.',
          author: 'Mother Teresa',
        },
        {
          id: 4,
          content:
            "Love is always bestowed as a gift - freely, willingly and without expectation. We don't love to be loved; we love to love.",
          author: 'Leo Buscaglia',
        },
        {
          id: 9,
          content: "Love isn't something you find. Love is something that finds you.",
          author: 'Loretta Young',
        },
      ],
    },
    {
      category: 'Inspirational',
      open: false,
      cards: [
        {
          id: 1,
          content:
            'The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.',
          author: 'Helen Keller',
        },
        {
          id: 2,
          content: 'We know what we are, but know not what we may be.',
          author: 'William Shakespeare',
        },
        {
          id: 10,
          content: 'It is during our darkest moments that we must focus to see the light.',
          author: 'Aristotle Onassis',
        },
        {
          id: 11,
          content: "If opportunity doesn't knock, build a door.",
          author: 'Milton Berle',
        },
        {
          id: 12,
          content: 'Change your thoughts and you change your world.',
          author: 'Norman Vincent Peale',
        },
      ],
    },
    {
      category: 'Chinese Proverbs',
      open: false,
      cards: [
        {
          id: 5,
          content: 'Be not afraid of growing slowly, be afraid only of standing still.',
          author: 'Chinese Proverb',
        },
        {
          id: 6,
          content: 'Your teacher can open the door, but you must enter by yourself.',
          author: 'Chinese Proverb',
        },
        {
          id: 13,
          content:
            'Give me a fish and I will eat for a day. Teach me to fish and I eat for a lifetime.',
          author: 'Chinese Proverb',
        },
        {
          id: 14,
          content:
            'If you plan for one year, plant rice. If you plan for ten years, plant trees, If you plan for 100 years, educate mankind.',
          author: 'Chinese Proverb',
        },
        {
          id: 15,
          content: 'The temptation to quit will be greatest just before you are about to succeed.',
          author: 'Chinese Proverb',
        },
      ],
    },
    {
      category: 'Bible',
      open: false,
      cards: [
        {
          id: 7,
          content: 'A righteous man falls down seven times and gets up.',
          author: 'King Solomon, Proverbs, 24:16',
        },
        {
          id: 8,
          content: "Gam zu l'tova. This too is for the good.",
          author: 'Nachum Ish Gamzu, Talmud, Taanit, 21a',
        },
        {
          id: 16,
          content:
            "People often avoid making decisions out of fear of making a mistake. Actually the failure to make decisions is one of life's biggest mistakes.",
          author: 'Rabbi Noah Weinberg',
        },
        {
          id: 17,
          content: 'Say little and do much, and receive all men with a pleasant countenance.',
          author: 'Shammai, Pirkei Avot, 1:15',
        },
        {
          id: 18,
          content: 'In a place where there are no men, strive to be a man.',
          author: 'Pirkei Avot, 2:5',
        },
        {
          id: 19,
          content: 'Study is not the most important thing, but actions.',
          author: 'Shimon ben Gamaliel, Pirkei Avot, 1:17',
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
      <Header title='Share Great Quotes' />
      <div className='accordion'>
        <p className='accordion-title'>Select from the list of categories:</p>
        {data.map((card, i) => (
          <Cards card={card} index={i} key={i} toggleCards={toggleCards} />
        ))}
      </div>
      <Footer
        onAdd={() => setShowAddQuote(!showAddQuote)}
        title='Share Great Quotes'
        showAdd={showAddQuote}
      />
      {showAddQuote && <AddQuote onAdd={AddToQuotes} />}
    </div>
  )
}

export default App
