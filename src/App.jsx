
import './App.css'
import About from './section/About'
import CompanySucces from './section/CompanySucces'
import ContactUs from './section/ContactUs'
import Footer from './section/Footer'
import Hero from './section/Hero'
import Orkeys from './section/Orkeys'
import Oursevices from './section/Oursevices'
import Testimonial from './section/Testimonial'

function App() {

  return (
   <div className=''>
    <Hero/>
    <About/>
    <CompanySucces/>
    <Oursevices/>
    <Orkeys/>
    <Testimonial/>
    <ContactUs/>
    <Footer/>
   </div>
  )
}

export default App
