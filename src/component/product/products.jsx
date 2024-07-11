import Footer from "../footer"
import NavbarDesktop from "../navBardesktop"
import NavbarMobile from "../navBarMobile"
import { IoCheckmarkSharp } from "react-icons/io5";
import "./products.css"

const Products = ()=>{
    return(
        <div>
            <NavbarDesktop />
            <NavbarMobile />
            <section id="products"  >
                <div className="first-div">
                    <h2>Our Products</h2>
                    <p>
                        Our fashion brand offers a range of personalized services to enhance your shopping experience. 
                        From expert styling advice to custom tailoring, 
                        we are here to help you look and feel your best.
                    </p>
                </div>
                <div className="products">
                    <div className="filter">
                        <div style={{display:'flex', alignItems:'center'}}>
                            <h4>Filters</h4>
                            <h4>Clear filters</h4>
                        </div>
                        <div className="categorie">
                            <h5>Categories</h5>
                            <ul>
                                <li>
                                    <div  className="check">
                                        <IoCheckmarkSharp />
                                    </div>
                                    <p>All</p>
                                </li>
                                <li>
                                    <div  className="check"></div>
                                    <p>Women's Wear</p>
                                </li>
                                <li>
                                    <div  className="check"></div>
                                    <p>Men's Wear</p>
                                </li>
                                <li>
                                    <div  className="check"></div>
                                    <p>Men's Accessories</p>
                                </li>
                                <li>
                                    <div  className="check"></div>
                                    <p>Women's Accessories</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Products