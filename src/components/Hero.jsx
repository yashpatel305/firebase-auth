import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Welcome to Shopping Heist</h1>
          <p>Your one-stop shop for the best products online. Discover, compare, and review a wide range of items with ease. Enjoy a seamless shopping experience with Shopping Heist!</p>
          <button className="hero-shop-btn">
            <span role="img" aria-label="cart" className="cart-emoji">🛒</span> Shop Now
          </button>
        </div>
        <div className="hero-image-wrapper">
          <img
            src="https://www.indiafilings.com/learn/wp-content/uploads/2024/11/What-is-E-Commerce-Business.jpg"
            alt="E-Commerce Business"
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero; 