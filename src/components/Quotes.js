import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import whatsapp from './whatsapp.png'

const Quotes = ({ card }) => {
  return (
    <Accordion.Collapse eventKey='1'>
      <Card.Body>
        {card.content}
        <a
          href='https://web.whatsapp.com/send?text= הי, אני השארתי פרטים, מה איתך? '
          class='ns_btn'
          data-action='share/whatsapp/share'
          target='_blank'
          rel='noreferrer'>
          <img src={whatsapp} width='50' height='50' alt='whatsapp-icon' />
        </a>
      </Card.Body>
    </Accordion.Collapse>
  )
}

export default Quotes
