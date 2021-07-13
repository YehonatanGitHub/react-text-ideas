import whatsapp from './whatsapp.png'

const Quotes = ({ quotes, i }) => {
  return (
    <div className='quote' key={i}>
      <div className='quote-content'>"{quotes.content}"</div>
      <div className='quote-author'>- {quotes.author} -</div>
      <a
        href={'https://web.whatsapp.com/send?text=' + quotes.content + ' - ' + quotes.author}
        className='ns_btn'
        data-action='share/whatsapp/share'
        target='_blank'
        rel='noreferrer'>
        <img src={whatsapp} width='35' height='35' alt='whatsapp-icon' />
      </a>
      <hr />
    </div>
  )
}

export default Quotes
