import '../../css/home/arrival.css'
import arrivalData from '../../data/arrivalData'

const Arrival = ()=>{
    return(
        <div className="arrival">
            <div className='first-div'>
                <h2>Our Latest Arrivals</h2>
                <p>
                Explore our showcase of up to 3 new arrivals or popular products. 
                Each item is carefully selected to reflect the latest trends in contemporary fashion apparel and accessories.
                </p>
                <button>Shop All</button>
            </div>
            <div className='arrival-cards' >
            {
                arrivalData.map((category)=>(
                    <div className='arrival-card'>
                        <img src={category.imgUrl} alt={category.desc} />
                    </div>
                ))
            }
            </div>
        </div>
    )
}

export default Arrival