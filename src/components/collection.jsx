import cream from '../assets/images/collection.png'; 


const Collection = () => {
    return (
        <div className="box">
            <img src={cream} alt="" className='boxImg' style={{paddingLeft: 40}} /> 
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 20}} className="product-button">
                    <button className='button-cart'><span>ADD TO CART</span></button>
                </div>
        </div>
    )
}

export default Collection