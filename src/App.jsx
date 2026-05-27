import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import CaseStudies from './components/CaseStudies'
import Blog from './components/Blog'
import About from './components/About'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-[#F4F8F1] text-violet min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Work />
        <CaseStudies />
        <Blog />
        <About />
      </main>
      <Footer />
    </div>
  )
}
