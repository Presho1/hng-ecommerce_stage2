import { IoMdHeartEmpty } from "react-icons/io"; 
import { useEffect, useState } from "react";
// import { soap } from '../assets/images/cera.png'

const Product = () => {
    const [ products, setProducts ] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.timbu.cloud/products?organization_id=b2c3981fbb5b472884e05363b368ad66&APP_ID=6RH94XVS3N23MWL&API_KEY=c122f80bd91e497e8dae9854632158f220240713183306648782');
                const jsonResult = await response.json();
                setProducts(jsonResult);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        }

        fetchData();
    }, []);

    return (
        <>
            <div className="product-list">
                {products.map((product) => (
                    <div key={product.id} className="box">
                        <IoMdHeartEmpty size={20} style={{position: 'absolute', right: '70%'}} />
                        <img src={product.image} alt={product.name} className='boxImg' />
                        <div className="product-info">
                            <h3 className='boxTitle'>{product.name}</h3>
                            <p className='boxPrice'>{product.price}</p>
                            <div className="product-button">
                                <button style={{marginRight: 14}} className="button-increment"> - 1 + </button>
                                <button className='button-cart'><span>ADD TO CART</span></button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Product;