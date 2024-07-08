import banner1 from '../assets/images/banner1.jpeg'; 
import Collection from '../components/collection';
import Product from '../components/product';
import Reviews from '../components/reviews';
import arrow from '../assets/icons/arrow.png'; 



const Home = () => {
  return (
    <>
        <div className='home'>
            <div className='home_left'>
                <div className='homeText'>
                    <h1 className='home_header'> Your Skin,  <br/>Our <span className='orange'>Treasure</span></h1>
                    <br/>
                    <p className='para2'>Taking your Skin To Greater Heights is Our Outmost Priority. <br/>
                    Explore the shop and get your affordable skincare online</p>
                    <br/>
                </div>
                <button className='home-click'><span>SHOP NOW</span></button>
            </div>
            <div className='home_right'>
                <img src={banner1} width={530} alt="banner" className='homeImg'/>
            </div>
        </div>
        <div className='product'>
            <div style={{marginBottom: 51}}>
                <h3 style={{fontWeight: 600, fontSize: 24, lineHeight: "36px", textAlign: 'center'}}>
                    OUR PRODUCTS
                </h3>
            </div>
            <div style={{display: 'flex', marginLeft: 50}} className=''>
                <Product/>
                <Product/>
                <Product/>
            </div>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 35}}>
                <button style={{backgroundColor: '#333232', paddingLeft: 102, paddingRight: 102}} className='home-click'><span>VIEW ALL</span></button>   
            </div>
        </div>
        <div className='collection' >
            <div style={{marginBottom: 31, marginTop: 30}}>
                <h3 style={{fontWeight: 600, fontSize: 24, lineHeight: "36px", textAlign: 'center'}}>
                    OUR COLLECTIONS
                </h3>
            </div>
            <div style={{display: 'flex', flexWrap: 'wrap', marginLeft: 50}}>
                <Collection/>
                <Collection/>
                <Collection/>
                <Collection/>
                <Collection/>  
            </div>
        </div>
        <div>
            <div style={{display: 'flex', justifyContent: 'space-between', marginLeft: 40, marginRight: 80}}>
                <div style={{}}>
                    <h3 style={{fontSize: 36, fontWeight: 600, lineHeight: '44px'}}>Our Happy Clients</h3>
                    <p style={{fontSize: 16, fontWeight: 400, lineHeight: '26px', }}>Hear what our customers have to say about our services</p>
                </div>
                <button style={{backgroundColor: '#000000', borderRadius: 50, padding: "16px 36px"}} className='button-cart'><span><img src={arrow} alt="" /></span></button>
            </div>
            <div style={{display: 'flex',  marginTop: 89, gap: 122, marginLeft: 40, marginBottom: 268}}>
                <Reviews/>
                <Reviews/>
                <Reviews/>
            </div>
        </div>
    </>
  )
}

export default Home