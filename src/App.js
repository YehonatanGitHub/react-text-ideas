import Header from './components/Header'
import Footer from './components/Footer'
import Cards from './components/Cards'

function App() {
  return (
    <div className='container'>
      <Header title='Text Great Ideas' />
      <Cards />
      <Footer title='Have Great Ideas?' />
    </div>
  )
}

export default App
