import whatsapp from './whatsapp.png'
import { BrowserView, MobileView } from 'react-device-detect'

const Quotes = ({ quotes, i }) => {
  return (
    <div className='quote' key={i}>
      <div className='quote-content'>"{quotes.content}"</div>
      <div className='quote-author'>- {quotes.author} -</div>
      <MobileView>
        <a
          href={
            'whatsapp://send?text=' +
            quotes.content +
            ' - ' +
            quotes.author +
            ' - built by https://yrwebdev.com'
          }
          className='ns_btn'
          data-action='share/whatsapp/share'
          target='_blank'
          rel='noreferrer'>
          <img src={whatsapp} width='35' height='35' alt='whatsapp-icon' />
        </a>
      </MobileView>
      <BrowserView>
        <a
          href={
            'https://web.whatsapp.com/send?text=' +
            quotes.content +
            ' - ' +
            quotes.author +
            ' - built by https://yrwebdev.com'
          }
          className='ns_btn'
          data-action='share/whatsapp/share'
          target='_blank'
          rel='noreferrer'>
          <img src={whatsapp} width='35' height='35' alt='whatsapp-icon' />
        </a>
      </BrowserView>

      <hr />
    </div>
  )
}

export default Quotes
