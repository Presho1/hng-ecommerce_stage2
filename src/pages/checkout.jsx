import checkout from '../assets/images/checkout.png'; 
// import { useState } from 'react';
import serum from '../assets/images/serum.png';
import atm from '../assets/images/atm.png';
import gift from '../assets/images/gift.png';



const Checkout = () => {
        // const [isChecked, setIsChecked] = useState(false);
      
        // const handleCheckboxChange = () => {
        //   setIsChecked(!isChecked);
        // };
      
    return (
        <div style={{marginBottom: 100}}>
            <div className='checkout' >
                <img src={checkout} alt="" className='checkout-img' />
            </div>
            <div style={{display: 'flex'}}>
                <div className='checkout-left'>
                    <h3 style={{fontSize: 24, fontWeight: 500, marginLeft: 82, marginTop: 92}}>Personal data</h3>
                    <form action="">
                        <div className="form-group">
                            <label htmlFor="firstName" className="form-label">Full Name</label>
                            <input type="text" className="form-control" style={{width: '100%'}}  />
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputEmail4" className="form-label">Email Address</label>
                            <input type="email" className="form-control" style={{width: '100%'}}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="phonenumber" className="form-label">Phone Number</label>
                            <input type="number" className="form-control" style={{width: '100%'}} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="firstName" className="form-label">Address</label>
                            <input type="text" className="form-control" style={{width: '100%'}}/>
                        </div>
                        <div className='form-group'>
                            <label htmlFor="state" className="form-label">State</label>
                            <input type="text" className="form-control"style={{width: '100%'}} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="firstName" className="form-label">Address</label>
                            <input type="text" className="form-control"style={{width: '100%'}} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="city" className='form-label'>City</label>
                            <input type="text" className="form-control" style={{width: '100%'}} />
                        </div>
                    </form>
                    <div style={{marginLeft:82, display:'flex', alignItems: 'center'}} className="custom-checkbox">
                        <input
                            type="checkbox"
                            // checked={isChecked}
                            // onChange={handleCheckboxChange}
                            style={{width: 25, height: 25, borderRadius: 20, backgroundColor: 'red'}}
                        />
                        <label style={{fontSize: 16, fontWeight: 400, paddingLeft: 10}}>Create account</label>
                    </div>
                </div>
                <div className='checkout-right'>
                    <h3 style={{fontSize: 24, fontWeight: 500, marginLeft: 82, marginTop: 92}}>Order Summary</h3>
                    <div style={{marginLeft: 82, backgroundColor: '#C7C7C7', }} className="checkout-box">
                        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around'}} className="checkout-info">
                            <img src={serum} alt="" style={{width: 90, height: 90}}/>
                            <h3 className='checkoutTitle'>Cerave Foaming Cleanser 16 FL OZ/473ml</h3>
                            <p className='checkoutPrice'> #14,499</p>
                        </div>
                        <div style={{display: 'flex',justifyContent: 'space-between', padding: 20}}>
                            <h3 style={{fontSize: 16, fontWeight: 400, lineHeight: '24px'}}>Subtotal</h3>
                            <h3 style={{fontSize: 16, fontWeight: 400, lineHeight: '24px'}}>#21,375</h3>
                        </div>
                        <div  style={{display: 'flex',justifyContent: 'space-between', paddingLeft: 20, paddingRight:20}}>
                            <h3 style={{fontSize: 16, fontWeight: 400, lineHeight: '24px'}}>Paystack fees</h3>
                            <h3 style={{fontSize: 16, fontWeight: 400, lineHeight: '24px'}}>#345</h3>
                        </div>
                        <div  style={{display: 'flex',justifyContent: 'space-between', padding: 20, marginBottom: 92}}>
                            <h3 style={{fontSize: 16, fontWeight: 400, lineHeight: '24px'}}>Total</h3>
                            <h3 style={{fontSize: 16, fontWeight: 400, lineHeight: '24px'}}>#21,375</h3>
                        </div>
                        <div className="product-button">
                            <button className='button-cart'><span>Back to shopping</span></button>
                        </div> 
                    </div>
                
                    <div style={{ display:'flex', alignItems:'center', marginLeft: 82, backgroundColor: '#C7C7C7', borderRadius: 10, padding: 21}} className="checkout-box">
                        <p style={{paddingLeft: 10}} className='checkoutPrice'> Redeem Gift Card</p>
                        <img src={gift} alt="" />
                    </div>
                    
                </div>
            </div>
            <div style={{display: 'flex'}}>
                <div className='checkout-left'>
                    <h3 style={{fontSize: 24, fontWeight: 500, marginLeft: 82, marginTop: 92}}>Delivery options</h3>
                    <div style={{marginLeft: 72, backgroundColor: '#C7C7C7', width: 560, paddingBottom: 34, paddingTop: 34, paddingLeft: 11, paddingRight: 53}} className="checkout-box">
                        <div className='delivery' style={{display: 'flex' , alignItems:'center', justifyContent: 'space-between', marginBottom: 14}}>
                            <div style={{display: 'flex' , alignItems: 'center'}}>
                                <div style={{paddingLeft: 11}}>
                                    <input type="checkbox" style={{width: 25, height: 25, }}/>
                                </div>
                                <div style={{paddingLeft: 12, marginTop: 11, marginBottom: 11, }}>
                                    <h3 style={{fontSize: 16, fontWeight: 400, lineHeight: '24px'}}>GIG logistics</h3>
                                    <h3 style={{fontSize: 16, fontWeight: 400, lineHeight: '24px'}}>#5 - 7 working days</h3>
                                </div>
                            </div>
                            <div style={{marginRight: 11}}>
                                <h3 style={{fontSize: 16, fontWeight: 400, lineHeight: '24px'}}>#8,600</h3>
                            </div>
                        </div>
                        <div className='delivery' style={{display: 'flex' , alignItems:'center', justifyContent: 'space-between',}}>
                            <div style={{display: 'flex' , alignItems: 'center'}}>
                                    <div style={{paddingLeft: 11}}>
                                        <input type="checkbox" style={{width: 25, height: 25, }}/>
                                    </div>
                                    <div style={{paddingLeft: 12, marginTop: 11, marginBottom: 11, }}>
                                        <h3 style={{fontSize: 16, fontWeight: 400, lineHeight: '24px'}}>GIG logistics</h3>
                                        <h3 style={{fontSize: 16, fontWeight: 400, lineHeight: '24px'}}>#5 - 7 working days</h3>
                                    </div>
                                </div>
                                <div style={{marginRight: 11}}>
                                    <h3 style={{fontSize: 16, fontWeight: 400, lineHeight: '24px'}}>#8,600</h3>
                                </div>
                            </div>  
                    </div>
                    <div style={{marginLeft:82, display:'flex', alignItems: 'center'}} className="custom-checkbox">
                        <input
                            type="checkbox"
                            className='checkbox'
                            style={{width: 35, height: 35, borderRadius: 20, backgroundColor: 'red'}}
                        />
                        <label style={{fontSize: 16, fontWeight: 400, paddingLeft: 10}}>I have read and understood how the skin care is sourced and agree to all terms and conditions of personal data</label>
                     </div>
                    </div>
                    <div className='checkout-right'>
                        <h3 style={{fontSize: 24, fontWeight: 500, marginLeft: 82, marginTop: 92}}>Payment</h3>
                        <div style={{marginLeft: 82, backgroundColor: '#C7C7C7'}} className="checkout-box">
                            <div style={{}} className="checkout-info">
                                <p className='checkoutPrice'> We accept bank transfer, USSD, Debit/Credit cards</p>
                            </div>
                            <div style={{ paddingBottom:80}}>
                                <img src={atm} alt="" />
                            </div>
                            <p style={{paddingBottom: 38}} className='checkoutPrice'> Kindly wait for confirmation of payment before closing browser, or page</p>
                            

                            <div className="product-button">
                                <button className='button-cart'><span>Place Order</span></button>
                            </div> 
                        </div>
                    </div>
            </div>
            
        </div>
    )
}

export default Checkout