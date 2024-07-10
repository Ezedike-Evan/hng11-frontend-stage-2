import './App.css'
import NavbarMobile from './component/navBarMobile'
import NavbarDesktop from './component/navBardesktop'
import Footer from './component/footer'
import Discover from './component/home/discover'
import Categories from './component/home/categories'

const App = ()=>{

  return (
    <>
      <NavbarDesktop />
      <NavbarMobile />
      <Discover />
      <Categories />
      <Footer />
    </>
  )
}

export default App
