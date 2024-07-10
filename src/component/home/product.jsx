import '../../css/home/product.css'
import productData from '../../data/productData'

const Product = ()=>{
    return(
        <div className="product">
            <div className='first-div'>
                <h2>Our Products</h2>
                <p>
                    Our products are designed with attention to detail and made from premium materials, 
                    ensuring both comfort and durability.
                </p>
                <button>Shop All</button>
            </div>
            <div className='product-cards' >
            {
                productData.map((category)=>(
                    <div className='product-card'>
                        <img src={category.imgUrl} alt={category.desc} />
                        <p>{category.desc}</p>
                        <p className='price'>{category.price}</p>
                    </div>
                ))
            }
            </div>
        </div>
    )
}

export default Product