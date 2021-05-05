const quotes = [
  {
    id: 1,
    text: 'Give me a fish and I eat for a day. Teach me to fish and I eat for a lifetime.',
    genre: 'Ancient Chinese',
    by: '',
    favorite: true,
  },
  {
    id: 2,
    text: "Life is what happens when you're busy making other plans.",
    genre: 'Life',
    by: 'John Lennon',
    favorite: false,
  },
  {
    id: 3,
    text: 'Whoever is happy will make others happy too.',
    genre: 'Happiness',
    by: 'SiAnne Frankngers',
    favorite: true,
  },
  {
    id: 4,
    text: 'The purpose of our lives is to be happy.',
    genre: 'Happiness',
    by: 'Dalai Lama',
    favorite: true,
  },
]
const Quotes = () => {
  return (
    <>
      {quotes.map((quote) => (
        <h3>{quote.text}</h3>
      ))}
    </>
  )
}

export default Quotes
