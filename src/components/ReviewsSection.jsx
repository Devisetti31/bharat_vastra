// src/components/ReviewsSection.jsx
import { Link } from "react-router-dom";
import ReviewCard from "./ReviewCard";
import "./ReviewsSection.css";

// Move your reviews array here so it's shared
export const reviewsData = [
    {
        id: 1,
        name: "Naveen Gonuguntla",
        location: "Gotlagattu,AndhraPradesh",
        rating: 5,
        date: "12 Oct 2026",
        title: "Absolutely stunning quality!",
        text: "I ordered a silk saree for my sister's wedding. The fabric is so rich and the zari work is beautiful. Bharat Vastra has become my go-to store for ethnic wear.",
    },
    {
        id: 2,
        name: "Ganesh Gajwalli",
        location: "Cumbum, AndhraPradesh",
        rating: 4,
        date: "05 Oct 2026",
        title: "Great fit, fast delivery",
        text: "Bought a kurta set for a festive occasion. The fitting is perfect and the delivery was faster than expected. Will definitely order again.",
    },
    {
        id: 3,
        name: "Gowthami Meghavathu",
        location: "Vijayawada,AndhraPradesh",
        rating: 5,
        date: "28 Sep 2026",
        title: "Beautiful kids' collection",
        text: "The kids' ethnic wear collection is adorable. My daughter loved the little lehengas. The cotton fabric is very soft and breathable for kids.",
    },
    {
        id: 4,
        name: "Teja Gonuguntla",
        location: "Besthavaripeta, AndhraPradesh",
        rating: 5,
        date: "15 Sep 2026",
        title: "Authentic craftsmanship",
        text: "You can truly feel the handloom quality. The colors haven't faded even after a few washes. Highly recommend their traditional collections.",
    },
    {
        id: 5,
        name: "Prashasthi Sugreeva",
        location: "KK Mitla,AndhraPradesh",
        rating: 4,
        date: "02 Sep 2026",
        title: "Elegant designs",
        text: "Loved the designs in the women's section. The packaging was also very premium. Only giving 4 stars as I wished there were more color options.",
    },
    {
        id: 6,
        name: "Aji Perumala",
        location: "Vizag, AndhraPradesh",
        rating: 5,
        date: "20 Aug 2026",
        title: "Customer service is top-notch",
        text: "Had a slight size issue, but the support team helped me exchange it within 3 days. Smooth process and the product itself is amazing.",
    },
];


const ReviewsSection = ({ limit }) => {
    // If a limit is provided (e.g., 3), slice the array. Otherwise, show all.
    const displayedReviews = limit ? reviewsData.slice(0, limit) : reviewsData;

    return (
        <section className="home-reviews-section">
            <div className="reviews-header-container">
                <h2 className="section-title">Customer Reviews</h2>

                {/* Show the "More" button ONLY if a limit is set (i.e., on the Home page) */}
                {limit && (
                    <Link to="/reviews" className="view-more-btn">
                        View More <span>→</span>
                    </Link>
                )}
            </div>

            <div className="reviews-grid">
                {displayedReviews.map((review) => (
                    <ReviewCard key={review.id} review={review} />
                ))}
            </div>
        </section>
    );
};

export default ReviewsSection;