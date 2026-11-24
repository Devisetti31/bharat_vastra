
import React, { useState } from 'react';


function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, email, subject, message } = formData;

        const whatsappMessage = `Hello Bharat Vastra,

Name: ${name}
Email: ${email}
Subject: ${subject}
Message: ${message}`;

        const whatsappURL = `https://wa.me/YOUR_PHONE_NUMBER?text=${encodeURIComponent(whatsappMessage)}`;

        window.open(whatsappURL, '_blank');
    };

    return (
        <div className="contact-page">

            {/* Hero Section */}
            <section className="contact-hero">
                <h1>Contact Us</h1>
                <p>We would love to hear from you. Get in touch with us!</p>
            </section>

            {/* Contact Information */}
            <section className="contact-container">

                <div className="contact-info">
                    <h2>Get In Touch</h2>
                    <p className="contact-description">
                        Have questions about our collections, products, or orders?
                        Our team is always happy to help you.
                    </p>

                    <div className="contact-item">
                        <span>📍</span>
                        <div>
                            <h3>Our Location</h3>
                            <p>Your Business Address, India</p>
                        </div>
                    </div>

                    <div className="contact-item">
                        <span>📞</span>
                        <div>
                            <h3>Phone Number</h3>
                            <p>+91 XXXXX XXXXX</p>
                        </div>
                    </div>

                    <div className="contact-item">
                        <span>✉️</span>
                        <div>
                            <h3>Email Address</h3>
                            <p>yourbusiness@email.com</p>
                        </div>
                    </div>

                    <div className="contact-item">
                        <span>🕒</span>
                        <div>
                            <h3>Business Hours</h3>
                            <p>Monday - Saturday</p>
                            <p>10:00 AM - 8:00 PM</p>
                        </div>
                    </div>

                    <div className="social-links">
                        <h3>Follow Us</h3>
                        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                            Instagram
                        </a>
                        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                            Facebook
                        </a>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="contact-form-container">
                    <h2>Send Us A Message</h2>
                    <p>Fill out the form below and we will get back to you.</p>

                    <form onSubmit={handleSubmit}>

                        <div className="form-group">
                            <label>Your Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Email Address</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Subject</label>
                            <input
                                type="text"
                                name="subject"
                                placeholder="Enter subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Your Message</label>
                            <textarea
                                name="message"
                                rows="5"
                                placeholder="Write your message here..."
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className="contact-submit">
                            Send Message
                        </button>

                    </form>
                </div>

            </section>

            {/* Bottom Message */}
            <section className="contact-bottom">
                <h2>We're Here For You!</h2>
                <p>
                    At Bharat Vastra, customer satisfaction is our priority.
                    Whether you need styling suggestions or product information,
                    feel free to contact us.
                </p>
                <h3>Thank You for Choosing Bharat Vastra!</h3>
            </section>

        </div>
    );
}

export default Contact;
