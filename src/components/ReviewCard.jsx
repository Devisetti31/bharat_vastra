import React from "react";

const ReviewCard = ({ review }) => {
    // Helper function for stars
    const renderStars = (rating) => {
        return (
            <div className="stars">
                {[...Array(5)].map((_, index) => (
                    <span key={index} className={index < rating ? "star filled" : "star"}>
                        ★
                    </span>
                ))}
            </div>
        );
    };

    return (
        <div className="review-card">
            <div className="review-card-top">
                <div className="reviewer-info">
                    <div className="avatar">{review.name.charAt(0)}</div>
                    <div>
                        <h4>{review.name}</h4>
                        <p className="location">{review.location}</p>
                    </div>
                </div>
                {renderStars(review.rating)}
            </div>

            <h3 className="review-title">{review.title}</h3>
            <p className="review-text">"{review.text}"</p>

            <p className="review-date">Reviewed on {review.date}</p>
        </div>
    );
};

export default ReviewCard;