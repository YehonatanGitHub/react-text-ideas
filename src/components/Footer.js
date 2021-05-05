import Button from './Button'

const Footer = ({ title }) => {
  const onClick = ({ title }) => {
    console.log('clicked')
  }

  return (
    <footer className='footer'>
      <h3>{title}</h3>
      <Button color='green' text='Add One' onClick={onClick} />
    </footer>
  )
}

export default Footer
