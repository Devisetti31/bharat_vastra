import { Link } from 'react-router-dom';
import Products from '../data/products';

function Mens() {
    const mensproducts = Products.filter((p) => p.category === 'Men');

    return (
        <div className='page'>
            <h1>Men's category</h1>
            <div className='product-grid'>
                {mensproducts.map((product) => (
                    <div className='product-card' key={product.id}>
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>₹{product.price}</p>

                        <Link to={`/product/${product.id}`}>View Details</Link>
                    </div>
                ))}

            </div>
        </div >
    )
}

export default Mens;