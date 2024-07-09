import { IoPersonOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="header">
        <div className="logo">
            <p>Skin.hub</p>
        </div>

        <nav className="navbar">
          <Link to='/'>Home</Link>
          <Link to='/catalog'>Catalog</Link>
          <a href="#">About us</a>
          <a href="#">Contact</a>
        </nav>

        <div className="icons">
          {/* burger button for responsivenes */}
          <div className="btn">
            <IoPersonOutline size={20} />
          </div>
          <div className="btn">
            <IoMdHeartEmpty size={20}/>
          </div>
          <div className="btn-cart"> 
            <MdOutlineShoppingCart size={20}/> 
          </div>    
        </div>
      </div>
    </>
  )
}

export default Navbar