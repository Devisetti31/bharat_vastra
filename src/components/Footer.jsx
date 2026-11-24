
import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="footer">

            <div className="footer-container">

                {/* Brand Section */}
                <div className="footer-column footer-brand">
                    <h2>BHARAT VASTRA</h2>

                    <p className="footer-tagline">
                        Elegance in Every Thread, Tradition in Every Style.
                    </p>

                    <p>
                        Discover the perfect blend of traditional Indian fashion
                        and modern elegance. We bring you stylish, comfortable,
                        and affordable collections for every occasion.
                    </p>

                    <div className="footer-social">
                        <a href="https://www.instagram.com/"
                            target="_blank" rel="noreferrer">Instagram</a>

                        <a href="https://www.facebook.com/"
                            target="_blank" rel="noreferrer">Facebook</a>

                        <a href="https://www.youtube.com/"
                            target="_blank" rel="noreferrer">YouTube</a>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="footer-column">
                    <h3>Quick Links</h3>

                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/reviews">Reviews</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link to="/cart">My Cart</Link></li>
                    </ul>
                </div>

                {/* Collections */}
                <div className="footer-column">
                    <h3>Our Collections</h3>

                    <ul>
                        <li><Link to="/men">Men's Collection</Link></li>
                        <li><Link to="/women">Women's Collection</Link></li>
                        <li><Link to="/kids">Kids' Collection</Link></li>
                        <li><Link to="/collections">All Collections</Link></li>
                    </ul>
                </div>

                {/* Contact Information */}
                <div className="footer-column">
                    <h3>Contact Information</h3>

                    <ul className="footer-contact">
                        <li>
                            <span>📍</span>
                            Your Business Address, India
                        </li>

                        <li>
                            <span>📞</span>
                            +91 XXXXX XXXXX
                        </li>

                        <li>
                            <span>✉️</span>
                            yourbusiness@email.com
                        </li>

                        <li>
                            <span>🕒</span>
                            Mon - Sat: 10 AM - 8 PM
                        </li>
                    </ul>
                </div>

            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">

                <p>
                    © {new Date().getFullYear()} Bharat Vastra.
                    All Rights Reserved.
                </p>

                <div className="footer-bottom-links">
                    <Link to="/privacy-policy">Privacy Policy</Link>
                    <Link to="/terms">Terms & Conditions</Link>
                </div>

                <button
                    className="back-to-top"
                    onClick={scrollToTop}
                    aria-label="Back to top"
                >
                    ↑
                </button>

            </div>

        </footer>
    );
}

export default Footer;
