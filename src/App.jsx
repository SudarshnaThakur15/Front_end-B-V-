
import { BrowserRouter } from 'react-router-dom'
import './components/components.css'
import Navigation from './components/Navigation.jsx'
import Header from './components/Header'
import BrandLogo from './components/BrandLogo'
import HeadingAndSubheading from './components/HeadingAndSubheading'
import CardSection from './components/CardSection'
import ProcessBlock from './components/ProcessBlock'
import Footer from './components/Footer'
import TestimonialCarousel from './components/Crousels'
function App() {


  return (
   
    <BrowserRouter>
    <Navigation place="header"/>
    <Header/>
    <BrandLogo/>
    <HeadingAndSubheading 
    heading="Services" 
    subheading="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:" width="580px" />


    <CardSection/>
    <HeadingAndSubheading 
    heading="Our Working Process " 
    subheading="Step-by-Step Guide to Achieving Your Business Goals" 
    width="292px" />
   
    <ProcessBlock/>

    <HeadingAndSubheading 
    heading="Testimonials" 
    subheading="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services" 
    width="473px" />
     
     <TestimonialCarousel/>
     <Footer/>
    </BrowserRouter>
    
    
  )
}

export default App
