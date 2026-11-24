
import React from 'react';

function About() {
    return (
        <div className="about-page">

            {/* Hero Section */}
            <section className="about-hero">
                <h1>About Bharat Vastra</h1>
                <p>Elegance in Every Thread, Tradition in Every Style.</p>
            </section>

            {/* Our Story */}
            <section className="about-section">
                <h2>Our Story</h2>
                <p>
                    Welcome to <strong>Bharat Vastra</strong>, where tradition meets
                    modern elegance. We believe that fashion is more than just
                    clothing; it is a reflection of culture, personality, and
                    individuality.
                </p>
                <p>
                    Our journey began with a passion for bringing beautiful Indian
                    fashion and contemporary styles together. At Bharat Vastra,
                    we celebrate the richness of Indian traditions while embracing
                    modern fashion trends to make every occasion special.
                </p>
            </section>

            {/* Mission and Vision */}
            <section className="mission-vision">
                <div className="mission-card">
                    <h2>Our Mission</h2>
                    <p>
                        Our mission is to provide high-quality, stylish, and affordable
                        clothing that makes everyone feel confident and comfortable.
                        We aim to make fashion accessible while preserving the beauty
                        and uniqueness of traditional Indian wear.
                    </p>
                </div>

                <div className="mission-card">
                    <h2>Our Vision</h2>
                    <p>
                        To become a trusted fashion destination that connects
                        traditional Indian craftsmanship with modern lifestyles,
                        offering a memorable shopping experience to every customer.
                    </p>
                </div>
            </section>

            {/* What We Offer */}
            <section className="about-section">
                <h2>What We Offer</h2>

                <div className="offer-grid">
                    <div className="offer-card">
                        <h3>Traditional Wear</h3>
                        <p>Beautiful ethnic collections inspired by Indian culture and heritage.</p>
                    </div>

                    <div className="offer-card">
                        <h3>Modern Fashion</h3>
                        <p>Trendy outfits designed for today's fashion-conscious generation.</p>
                    </div>

                    <div className="offer-card">
                        <h3>Men's Collection</h3>
                        <p>Stylish and comfortable clothing for every occasion.</p>
                    </div>

                    <div className="offer-card">
                        <h3>Women's Collection</h3>
                        <p>Elegant, traditional, and contemporary outfits.</p>
                    </div>

                    <div className="offer-card">
                        <h3>Kids' Collection</h3>
                        <p>Comfortable, fashionable, and adorable clothing for little ones.</p>
                    </div>

                    <div className="offer-card">
                        <h3>Quality & Comfort</h3>
                        <p>Carefully selected fabrics and designs combining quality, comfort, and style.</p>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="about-section why-choose">
                <h2>Why Choose Bharat Vastra?</h2>

                <ul>
                    <li>Unique combination of traditional and modern fashion.</li>
                    <li>Quality products at affordable prices.</li>
                    <li>Stylish collections for men, women, and kids.</li>
                    <li>Fashion for everyday wear and special occasions.</li>
                    <li>Customer satisfaction as our top priority.</li>
                </ul>
            </section>


        </div>
    );
}

export default About;
