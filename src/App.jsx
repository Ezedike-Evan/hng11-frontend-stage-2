import './App.css'
import NavbarMobile from './component/navBarMobile'
import NavbarDesktop from './component/navBardesktop'
import Footer from './component/footer'
import Discover from './component/home/discover'

const App = ()=>{

  return (
    <>
      <NavbarDesktop />
      <NavbarMobile />
      <Discover />
      <Footer />
    </>
  )
}

export default App
