import './App.css'
import Banner from './components/Banner/Banner'
import Main from './components/Main/Main'
import Navbar from './components/Navbar/Navbar'

function App() {


  return (
    <div className='px-10'>
      <Navbar></Navbar>
      <Banner></Banner>
      <Main></Main>
    </div>
  )
}

export default App
