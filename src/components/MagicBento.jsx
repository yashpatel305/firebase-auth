import { useRef, useEffect, useState } from "react";
import "./MagicBento.css";
import Star from "./star";

const BATCH_SIZE = 8;

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString();
}

const ReviewModal = ({ reviews, onClose }) => (
  <div className="review-modal-backdrop" onClick={onClose}>
    <div className="review-modal" onClick={e => e.stopPropagation()}>
      <h3>Customer Reviews</h3>
      <div className="review-list">
        {reviews && reviews.length > 0 ? (
          reviews.map((review, idx) => (
            <div className="review-item" key={idx}>
              <div className="review-rating"><Star stars={review.rating} /></div>
              <div className="review-comment">{review.comment}</div>
              <div className="review-meta">
                <span className="review-date">{formatDate(review.date)}</span>
                <span className="reviewer">by {review.reviewerName}</span>
              </div>
            </div>
          ))
        ) : (
          <div>No reviews yet.</div>
        )}
      </div>
      <button className="close-modal-btn" onClick={onClose}>Close</button>
    </div>
  </div>
);

const ParticleCard = ({ prod, handleShowReviews }) => (
  <div className="card" style={{ position: "relative", overflow: "visible", background: "transparent" }}>
    <div className="card__flip-inner">
      <div className="card__flip-front">
        <img src={prod.thumbnail} alt={prod.title} />
      </div>
      <div className="card__flip-back">
        <div className="card__header">
          <div className="card__label">{prod.category}</div>
        </div>
        <div className="card__content">
          <h2 className="card__title">{prod.title}</h2>
          <p className="card__description">{prod.description}</p>
          <p className="card__price">${prod.price}</p>
          <p className="card__brand">Brand: {prod.brand}</p>
          <p className="card__stock">Stock: {prod.stock}</p>
          <div style={{marginTop: '0.5rem'}}>
            <Star stars={prod.rating} />
            <span style={{marginLeft: '0.5rem', color: '#b39ddb', fontSize: '0.95rem'}}>({prod.rating})</span>
          </div>
          <button className="show-reviews-btn" onClick={() => handleShowReviews(prod.reviews || [])} style={{marginTop: '1rem'}}>Show Reviews</button>
        </div>
      </div>
    </div>
  </div>
);

const BentoCardGrid = ({ children, gridRef }) => (
  <div className="card-grid bento-section" ref={gridRef}>
    {children}
  </div>
);

const useMobileDetection = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  return isMobile;
};

const MagicBento = ({
  products = [],
}) => {
  const gridRef = useRef(null);
  useMobileDetection();
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);
  const [showReviews, setShowReviews] = useState({ open: false, reviews: [] });

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + BATCH_SIZE, products.length));
  };

  const handleShowReviews = (reviews) => {
    setShowReviews({ open: true, reviews });
  };

  const handleCloseReviews = () => {
    setShowReviews({ open: false, reviews: [] });
  };

  return (
    <>
      <BentoCardGrid gridRef={gridRef}>
        {products.slice(0, visibleCount).map((prod, index) => (
          <ParticleCard key={prod.id || index} prod={prod} handleShowReviews={handleShowReviews} />
        ))}
      </BentoCardGrid>
      {visibleCount < products.length && (
        <div style={{textAlign: 'center', margin: '2rem 0'}}>
          <button className="load-more-btn" onClick={handleLoadMore}>Load More</button>
        </div>
      )}
      {showReviews.open && (
        <ReviewModal reviews={showReviews.reviews} onClose={handleCloseReviews} />
      )}
    </>
  );
};

export default MagicBento; 