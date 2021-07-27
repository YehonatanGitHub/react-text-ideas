import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header>
      <h1 className='header'>{title}</h1>
      <div className='add-quote'>
        <p>Have A Great Quote To Share?</p>
        <Button
          color={showAdd ? 'red' : 'green'}
          text={showAdd ? 'Close' : 'Add One'}
          onClick={onAdd}
        />
      </div>
    </header>
  )
}

export default Header
