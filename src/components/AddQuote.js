import { useState } from 'react'

const AddQuote = ({ onAdd }) => {
  const [text, setText] = useState('')
  const [day, setAuthor] = useState('')
  const [category, setCategory] = useState(false)

  const onSubmint = (e) => {
    e.preventDefault()

    if (!text) {
      alert('Please add a Quote')
      return
    }

    onAdd({ text, day, category })

    setText('')
    setAuthor('')
    setCategory(false)
  }

  return (
    <form className='add-form' onSubmit={onSubmint}>
      <div className='form-control'>
        <label>Quote</label>
        <input
          type='text'
          placeholder='Add Quote'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Author</label>
        <input
          type='text'
          placeholder='Author'
          value={day}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <div className='form-control form-control-check'>
        <label>Set Category</label>
        {/* <input
          type='select'
          value={category}
          onChange={(e) => setCategory(e.currentTarget.checked)}
        /> */}
        <select id='cars' name='cars'>
          <option value='volvo'>Volvo</option>
          <option value='saab'>Saab</option>
          <option value='fiat'>Fiat</option>
          <option value='audi'>Audi</option>
        </select>
      </div>
      <input type='submit' value='Save Quote' className='btn btn-block' />
    </form>
  )
}

export default AddQuote
