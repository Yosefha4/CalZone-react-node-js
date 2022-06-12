import React ,{useEffect, useState} from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Product from './components/Product'
import Demo from './components/Demo'
import Footer from './components/Footer'
import F2 from './components/F2'
import PricingBox from './components/PricingBox';
import News from './components/News'
import Sender from './components/Sender'







function App() {

  const [backendData, setBackendData] = useState([{}])

    useEffect(() =>{

      fetch("/api").then(
        response => response.json()
    ).then(

        data =>{
          setBackendData(data)
        }
    )
    }, [])

  return (
    <div>
      <Navbar />
      <Hero />
      <Product />
      <About />
      <Demo />
      <News/>
      <F2/>
      <Footer />
    </div>
  );
}

export default App;
