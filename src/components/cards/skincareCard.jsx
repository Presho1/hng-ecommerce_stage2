import { IoMdHeartEmpty } from "react-icons/io"; 
import soap from '../../assets/images/toner.png'; 


const SkincareCard = () => {
    return (
        <>
        <div className="skincare-box">
            <IoMdHeartEmpty size={20} style={{position: 'relative', left: '90%'}}/>
            <img src={soap} alt="" className='boxImg' />
            <div className="skincare-info">
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

export default SkincareCard