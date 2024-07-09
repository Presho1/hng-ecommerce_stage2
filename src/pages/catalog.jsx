import { Link } from "react-router-dom"
import Skincare from "../components/skincare"


const Catalog = () => {
    return (
      <div>
        <div style={{display: 'flex', paddingLeft: 72}}>
          <Link to='/'><p>Home / </p></Link>
          <p>Catalog /</p>
          <p>Skincare</p>
        </div>
        <div style={{marginTop: 146}}>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', paddingBottom: 16}}>
            <h3 style={{fontSize: 36, fontWeight: 500, lineHeight: '42px'}}>SKINCARE</h3>
          </div>
          <div>
            <Skincare/>
          </div>
        </div>
        
      </div>
  )
}

export default Catalog