import React from "react";
import "./card.css";

const ProductCard = ({ productTitle, url, highlightedStars }) => {
  const stars = Array(5).fill(0);
  return (
    <div className="single-product">
      <div className="part-1 position-relative">
        <img src={url} alt="product" className="product_img" />
        <a href="#" className="heart">
          <i className="fas fa-heart" />
        </a>
      </div>
      <div className="part-2 d-flex justify-content-between">
        <div>
          <h3 className="product-title">{productTitle}</h3>
          <h4 className="product-old-price">$79.99</h4>
          <h4 className="product-price">$49.99</h4>
          <div>
            {stars.map((_, index) => (
              <span
                key={index}
                className={`fa fa-star ${
                  index < highlightedStars ? "text-success" : ""
                }`}
              />
            ))}
          </div>
        </div>
        <button className="btn btn-outline-dark cart_btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
