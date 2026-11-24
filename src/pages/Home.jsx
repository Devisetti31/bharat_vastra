
import { Link } from 'react-router-dom';
import Products from '../data/products';
import ProductCard from '../components/ProductCard';
import Offers from './Offers';
import ReviewsSection from '../components/ReviewsSection';
import About from '../pages/About';
import Contact from './Contact';

import '../App.css';

function Home() {

    const menProducts = Products.filter((p) => p.category === 'Men');
    const womenProducts = Products.filter((p) => p.category === 'Women');
    const kidsProducts = Products.filter((p) => p.category === 'Kids');

    const MenProducts = menProducts.slice(0, 4);
    const WomenProducts = womenProducts.slice(0, 4);
    const KidsProducts = kidsProducts.slice(0, 4);


    return (<div className='AAAA'>

        {/* hero section*/}
        <section className="hero-section">
            <div className="hero-content">

                <p className="hero-welcome">
                    WELCOME TO BHARAT VASTRA
                </p>

                <h1>
                    Celebrate Every Thread of
                    <span> Tradition</span>
                </h1>

                <p className="hero-description">
                    Discover timeless Indian ethnic wear
                    crafted for every occasion.
                </p>

                <div className="hero-buttons">

                    <Link to="/collections" className="explore-btn">
                        Explore Categories
                    </Link>
                </div>

            </div>

            <div className="heroimage">
                <img
                    src="/images/hero-images/hero-image.jpg"
                    alt="Indian traditional fashion"
                    className="hero-image"
                />
            </div>
        </section>
        { /* Category Section */}
        <div className="home-categories-container">
            <section className='category-section'>
                <h2 className='category-title'>Men's Collections</h2>
                <Link to="/mens" className="explore-category-btn">
                    Explore Men's <span>→</span>
                </Link>
                <div className='product-grid'>
                    {MenProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}

                </div>
            </section >
            <section className='category-section'>
                <h2 className='category-title'>Women's Collections</h2>
                <Link to="/womens" className="explore-category-btn">
                    Explore Women's <span>→</span>
                </Link>
                <div className='product-grid'>
                    {WomenProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </section >
            <section className='category-section'>
                <h2 className='category-title'>kid's Collections</h2>
                <Link to="/kids" className="explore-category-btn">
                    Explore Kid's <span>→</span>
                </Link>
                <div className='product-grid'>
                    {KidsProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </section >
        </div>
        <div>
            {/* NEW OFFERS SECTION */}
            <Offers />
        </div>
        <div>
            {/* Reviews SECTION */}
            <ReviewsSection limit={3} />
        </div>
        <div>
            { /* About page */}
            <About />
        </div>
        <div>
            { /* Contact page*/}
            <Contact />
        </div>
    </div >
    );
}

export default Home;
