import '../css/navbarmobile.css'
import { GoSearch } from "react-icons/go"
import { PiUserCircleLight , PiShoppingCartThin } from "react-icons/pi"
import { VscThreeBars } from "react-icons/vsc";
import { CiHeart } from "react-icons/ci"

const NavbarMobile = ()=>{
    return(
        <nav className='navMobile'>
            <h1>Steeze</h1>
            <div>
                <ul className='mobile-icons'>
                    <li><GoSearch size={35}/></li>
                    <li><PiUserCircleLight size={35}/></li>
                    <li><CiHeart size={35}/></li>
                    <li className='cart'>
                        <PiShoppingCartThin size={35}/>
                        <p>14</p>
                    </li>
                </ul>
                <div className='burger-menu'>
                    <VscThreeBars color='white' size={20}/>
                </div>
            </div>
        </nav>
    )
}

export default NavbarMobile