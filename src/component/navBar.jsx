import '../css/navbar.css'
import { IoSearchOutline } from "react-icons/io5"
import { PiHandbagSimple } from "react-icons/pi"

const Navbar = ()=>{
    return(
        <nav>
            <div>
                <h1>steeze</h1>
                <ul className='navigation'>
                    <li>Home</li>
                    <li>New Arrival</li>
                    <li>Sales</li>
                    <li>Categories</li>
                </ul>
            </div>
            <div>
                <div className='search'>
                    <IoSearchOutline className='search-icon' size={13}/>
                    <input type="text" placeholder='Search'/>
                </div>
                <ul className='others'>
                    <li>
                        <PiHandbagSimple style={{marginRight:'3px'}}  size={18}/>
                        <p>Account</p>
                    </li>
                    <li>
                        <PiHandbagSimple style={{marginRight:'3px'}}  size={18}/>
                        <p>Help</p>
                    </li>
                    <li>
                        <PiHandbagSimple  style={{marginRight:'3px'}} size={18}/>
                        <p>Cart</p>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar