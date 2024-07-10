import '../../css/home/categories.css'
import categoriesData from '../../data/catejoriesData'

const Categories = ()=>{
    return(
        <div className='categories'>
            <div className='first-div'>
                <h2>Categories</h2>
                <p>
                    Explore our curated collection of contemporary fashion apparel and accessories. 
                    Find the perfect outfit for any occasion.
                </p>
                <button>Shop All</button>
            </div>
            <div className='category-cards' >
            {
                categoriesData.map((category)=>(
                    <div className='category-card'>
                        <img src={category.imgUrl} alt={category.desc} />
                        <p>{category.desc}</p>
                    </div>
                ))
            }
            </div>
        </div>
    )
}

export default Categories