import { useState } from 'react'

const AddQuote = ({ onAdd }) => {
  const [quote, setQuote] = useState('')
  const [author, setAuthor] = useState('')
  const [category, setCategory] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    if (!quote) {
      alert('Please add a Quote')
      return
    }

    onAdd({ quote, author, category })

    setQuote('')
    setAuthor('')
    setCategory('')
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Quote</label>
        <input
          className='input-box'
          type='text'
          placeholder='Add Quote'
          value={quote}
          onChange={(e) => setQuote(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Author</label>
        <input
          className='input-box'
          type='text'
          placeholder='Author'
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <div className='form-control form-control-check'>
        <label>Set Category</label>
        <select
          className='category'
          name='category'
          value={category}
          onChange={(e) => setCategory(e.target.value)}>
          <option className='category'></option>
          <option className='category' value='famous_quotes'>
            Famous Quotes
          </option>
          <option className='category' value='technology'>
            Technology
          </option>
          <option className='category' value='inspiration'>
            Inspiration
          </option>
          <option className='category' value='morals'>
            Morals
          </option>
        </select>
      </div>
      <input type='submit' value='Save Quote' className='btn btn-block' />
    </form>
  )
}

export default AddQuote
