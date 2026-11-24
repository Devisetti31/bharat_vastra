import React from 'react';


const OffersSection = () => {
    const offers = [
        {
            id: 1,
            title: "Festive Season Sale",
            code: "FESTIVE20",
            discount: "20% OFF",
            expiry: "Valid till: 31st Dec 2026",
            description: "Get flat 20% off on all ethnic wear collections.",
        },
        {
            id: 2,
            title: "First Purchase Offer",
            code: "WELCOME500",
            discount: "₹500 OFF",
            expiry: "Valid till: 15th Jan 2027",
            description: "Flat ₹500 off on your first order above ₹2000.",
        },
        {
            id: 3,
            title: "Weekend Special",
            code: "WEEKEND15",
            discount: "15% OFF",
            expiry: "Valid: Sat & Sun Only",
            description: "Enjoy 15% off on all kids' clothing this weekend.",
        },
    ];

    return (
        <section className='offers-section'>
            <div className='offers-header'>
                <h2 className='offers-title'>Exclusive Offers</h2>
                <p className='offers-subtitle'> Apply these coupon codes at checkout to save big</p>
            </div>
            <div className="offers-grid">
                {offers.map((offer) => (
                    <div className="offer-card" key={offer.id}>
                        <div className="offer-badge">{offer.discount}</div>

                        <h3 className="offer-card-title">{offer.title}</h3>
                        <p className="offer-desc">{offer.description}</p>

                        <div className="offer-code-container">
                            <span className="coupon-code">{offer.code}</span>
                            <button
                                className="copy-btn"
                                onClick={() => {
                                    navigator.clipboard.writeText(offer.code);
                                    alert(`Coupon ${offer.code} copied!`);
                                }}
                            >
                                Copy
                            </button>
                        </div>

                        <p className="offer-expiry">⏳ {offer.expiry}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OffersSection;