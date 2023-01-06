import "./App.css"
import Header from "./components/header/Header"
import Hero from "./components/Hero/Hero"
import Products from "./components/Products/Products.jsx"
import Slider from "./components/Slider/Slider"
import Testimonial from "./components/Testimonial/Testimonial"
import Virtual from "./components/Virtual/Virtual"

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Slider />
      <Virtual />
      <Products />
      <Testimonial />
    </div>
  )
}

export default App
