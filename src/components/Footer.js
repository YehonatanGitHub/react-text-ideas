import Button from './Button'

const Footer = ({ title, onAdd, showAdd }) => {
  return (
    <footer className='footer'>
      <div className='add-quote'>
        <p>Have A Great Quote?</p>
        <Button
          color={showAdd ? 'red' : 'green'}
          text={showAdd ? 'Close' : 'Add One'}
          onClick={onAdd}
        />
      </div>
    </footer>
  )
}

export default Footer
