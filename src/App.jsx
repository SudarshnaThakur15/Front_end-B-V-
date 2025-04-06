
import { BrowserRouter } from 'react-router-dom'
import './components/components.css'
import Navigation from './components/navigation'
import Header from './components/Header'

function App() {


  return (
   
    <BrowserRouter>
    <Navigation/>
    <Header/>
    </BrowserRouter>
    
  )
}

export default App
