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
        <label>Select Category</label>
        <select
          className='category'
          name='category'
          value={category}
          onChange={(e) => setCategory(e.target.value)}>
          <option className='category'></option>
          <option className='category' value='Inspirational'>
            Inspirational
          </option>
          <option className='category' value='Love'>
            Love
          </option>
          <option className='category' value='Chinese Proverbs'>
            Chinese Proverbs
          </option>
          <option className='category' value='Bible'>
            Bible
          </option>
        </select>
      </div>
      <div>
        <input id='submit-btn' type='submit' value='Save Quote' className='btn btn-block' />
      </div>
    </form>
  )
}

export default AddQuote
