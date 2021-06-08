import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Quotes from './Quotes'

const Cardscopy = () => {
  return (
    <Accordion defaultActiveKey='0'>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey='1'>
          Click me!
        </Accordion.Toggle>
        <Quotes />
        <Quotes />
        <Quotes />
        <Quotes />
      </Card>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey='2'>
          Funny
        </Accordion.Toggle>
        <Accordion.Collapse eventKey='2'>
          <Card.Body>Hello! I'm another body</Card.Body>
        </Accordion.Collapse>
        <Accordion.Collapse eventKey='2'>
          <Card.Body>Hello! I'm another body</Card.Body>
        </Accordion.Collapse>
        <Accordion.Collapse eventKey='2'>
          <Card.Body>Hello! I'm another body</Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey='3'>
          Romantic
        </Accordion.Toggle>
        <Accordion.Collapse eventKey='3'>
          <Card.Body>Hello! I'm another body</Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey='4'>
          Interesting Facts
        </Accordion.Toggle>
        <Accordion.Collapse eventKey='4'>
          <Card.Body>Hello! I'm another body</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  )
}

export default Cardscopy
