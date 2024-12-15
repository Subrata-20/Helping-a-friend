import { useState } from 'react'
import Pricing from './components/Pricing'
import FAQ from './components/PricingFAQ';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Pricing/>
    <FAQ/>
    </>
  )
}

export default App
