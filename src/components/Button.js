const Button = ({ color, text, onClick }) => {
  return (
    <button onClick={onClick} className='btn' style={{ backgroundColor: color }}>
      {text}
    </button>
  )
}
Button.defultProps = {
  color: 'steelblue',
}
export default Button
