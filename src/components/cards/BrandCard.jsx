import React from "react";

const BrandCard = ({ url, title }) => {
  return (
    <div className="brand_card d-flex">
      <img src={url} alt="logo" className="brandLogo" />
      <div className="brand_text_container">
        <h5 className="brand_title">{title}</h5>
        <p className="mb-0">Delivery within 24 hours</p>
      </div>
    </div>
  );
};

export default BrandCard;
