import {BsLinkedin, BsGithub, BsYoutube, BsInstagram } from 'react-icons/bs';


const Footer = () => {
  return (
    <>
      <footer className='footer'>
        <div className="footer_left">
            <div>
                <p className='footer_description'> Subscribe to our newsletter </p>
            </div>
            <div>
                <p className='footer-sub_description'>Get 10% off your first order</p>
            </div>
            <div className="input-form">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Email Address" aria-label="Your Email Address" aria-describedby="basic-addon2"/>
                <span className="input-group-text p-2" id="basic-addon2">
                  Enter
                </span>
              </div>
            </div> 
            <div className='contact_container'>
                <BsLinkedin size={20} className='contact_social' />
                <BsGithub size={20} className='contact_social' />
                <BsYoutube size={20} className='contact_social' />
                <BsInstagram size={20} className='contact_social'/>
            </div>
        </div>

        <div className='footer_right'>
          <div>
            <h5 className='footer_title'>INFORMATION</h5>
            <p className='footer_para'>Home</p>
            <p className='footer_para'>Product</p>
            <p className='footer_para'>About Us</p>
            <p className='footer_para'>Contact</p>
          </div>
          <div>
            <h5 className='footer_title'>CUSTOMER SERVICES</h5>
            <p className='footer_para'>Shipping informationl</p>
            <p className='footer_para'>Return Policy</p>
            <p className='footer_para'>FAQs</p>
          </div>
          <div>
            <h5 className='footer_title'>LEGAL INFORMATION</h5>
            <p className='footer_para'>Privacy Policy</p>
            <p className='footer_para'>Terms and conditions</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer