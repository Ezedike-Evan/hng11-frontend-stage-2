import './App.css'
import NavbarMobile from './component/navBarMobile'
import NavbarDesktop from './component/navBardesktop'
import Footer from './component/footer'
import Discover from './component/home/discover'
import Categories from './component/home/categories'
import Arrival from './component/home/arrival'

const App = ()=>{

  return (
    <>
      <NavbarDesktop />
      <NavbarMobile />
      <Discover />
      <Categories />
      <Arrival />
      <Footer />
    </>
  )
}

export default App
