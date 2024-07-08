import profile from '../assets/images/picture.png'; 
import ReactStars from "react-rating-stars-component";

const Reviews = () => {
    return (
        <div className="testimonial-col">
            <img src={profile} alt=""/>
            <div style={{width: 211}}>
                <p style={{fontSize: 16, fontWeight: 400, lineBreak:'24px'}}>Wastes no time. I bought 
                    and paid on the same day 
                    and my delivery literally 
                    came two days after
                </p>
                <h3 style={{fontSize: 16, fontWeight: 400, lineBreak:'24px'}}>Betty Lopez</h3>
                <ReactStars
                count={5}
                size={24}
                activeColor="#AFAD81"/>
            </div>
        </div>
    )
}

export default Reviews