import Header from "./components/Header"
import Features from "./components/Features"
import Products from "./components/Products"
import Testimonials from "./components/Testimonials"
import Footer from "./components/Footer"

const App = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 font-sans">
      <Header />
      <Features />
      <Products />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App