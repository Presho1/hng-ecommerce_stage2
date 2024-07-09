import cleanser from '../assets/images/cleanser.png'; 
import toner from '../assets/images/toner.png';
import essence from '../assets/images/essence.png';
import serum from '../assets/images/serum.png';
import sunscreen from '../assets/images/sunscreen.png';
import SkincareCard from './cards/skincareCard';
import arrow from '../assets/icons/arrow2.png'; 
import { Link } from 'react-router-dom';

const Skincare = () => {
    return (
        <>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 43}}>
                <div>
                    <img src={cleanser} alt="" />
                    <h4 style={{fontSize: 24, fontWeight: 500, lineHeight:'36px'}}> Cleanser</h4>
                </div>
                <div>
                    <img src={toner} alt="" />
                    <h4 style={{fontSize: 24, fontWeight: 500, lineHeight:'36px', paddingLeft: 20}}>Toner</h4>
                </div>
                <div>
                    <img src={serum} alt="" />
                    <h4 style={{fontSize: 24, fontWeight: 500, lineHeight:'36px', paddingLeft: 20}}>Serum</h4>
                </div>
                <div>
                    <img src={essence} alt="" />
                    <h4 style={{fontSize: 24, fontWeight: 500, lineHeight:'36px'}}>Essence</h4>
                </div>
                <div>
                    <img src={sunscreen} alt="" />
                    <h4 style={{fontSize: 24, fontWeight: 500, lineHeight:'36px'}}>Sunscreen</h4>
                </div>
            </div>
            <div style={{display: 'flex', marginLeft: 80, marginTop: 115}}>
                <div  style={{paddingRight: 100,  }}>
                    <h4  style={{fontSize: 22, fontWeight: 500, lineHeight: '36px', width: 260}}>Filter By</h4>
                    <div>
                        <h4 style={{fontSize: 22, fontWeight: 400, lineHeight: '36px'}}>Price +</h4>                 
                        <h4 style={{fontSize: 22, fontWeight: 400, lineHeight: '36px'}}>Ingredients+</h4> 
                        <h4 style={{fontSize: 22, fontWeight: 400, lineHeight: '36px', marginRight: 15}}>Specific concerns+</h4>
                        <h4 style={{fontSize: 22, fontWeight: 400, lineHeight: '36px'}}>Brand +</h4>
                        <h4 style={{fontSize: 22, fontWeight: 400, lineHeight: '36px'}}>Categories+</h4>
                    </div>
                </div>
                <div className="products-list">
                    <div style={{display:'flex', gap:10, flexWrap: 'wrap'}}>
                        <SkincareCard /> 
                        <SkincareCard />
                        <SkincareCard /> 
                        <SkincareCard /> 
                        <SkincareCard /> 
                        <SkincareCard /> 
                        <SkincareCard /> 
                        <SkincareCard /> 
                        <SkincareCard /> 
                    </div>
                    <div style={{display: 'flex', alignItems:'center', justifyContent: 'center', gap: 42, marginTop: 120}}>
                        <button style={{backgroundColor: '#D9D9D9', borderRadius: 10, padding: "2px 17px"}} className='button-cart'><span style={{color: '#000000'}}>1</span></button>
                        <button style={{backgroundColor: '#D9D9D9', borderRadius: 10, padding: "2px 17px"}} className='button-cart'><span style={{color: '#000000'}}>2</span></button>
                        <button style={{backgroundColor: '#D9D9D9', borderRadius: 10, padding: "2px 17px"}} className='button-cart'><span style={{display: 'flex', alignItems: 'center', justifyContent: 'center',  padding: "2px 0"}}><img src={arrow} alt="" /></span></button>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 32, marginBottom: 180}}>
                        <Link to='/checkout'><button className='button-cart'><span>CHECKOUT</span></button> </Link>
                    </div>
                </div>
            </div>
        </>
        
        
       

    )
}

export default Skincare