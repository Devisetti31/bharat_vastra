import React from "react";
import ReviewsSection from "../components/ReviewsSection";
// You can keep the Rating Summary header here if you want
import '../App.css';

const Reviews = () => {
    return (
        <div className="reviews-page">
            <header className="reviews-header">
                <h1>Customer Reviews</h1>
                <p>Discover what our customers have to say about the Bharat Vastra experience.</p>
            </header>

            {/* The rating summary box code goes here... */}

            {/* Show ALL reviews by NOT passing a limit prop */}
            <ReviewsSection />
        </div>
    );
};

export default Reviews;