import { IoMdHeartEmpty } from "react-icons/io"; 
import soap from '../assets/images/cera.png'; 


const Product = () => {
    return (
        <>
        <div className="box">
            <IoMdHeartEmpty size={20} style={{position: 'absolute', right: '70%'}}/>
            <img src={soap} alt="" className='boxImg' />
            <div className="product-info">
                <h3 className='boxTitle'>Cerave Foaming Cleanser 16 FL OZ/473ml</h3>
                <p className='boxPrice'> #14,499</p>
                <div className="product-button">
                    <button style={{marginRight: 14}} className="button-increment"> - 1 + </button>
                    <button className='button-cart'><span>ADD TO CART</span></button>
                </div>
            </div>
        </div>
    </>
    )
}

export default Product