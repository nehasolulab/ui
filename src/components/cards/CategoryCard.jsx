import React from "react";

const CategoryCard = ({ categoryName, categoryImg }) => {
  return (
    <div className="position-relative category_box">
      <img src={categoryImg} className="img-responsive category_img" alt="" />
      <p className="category_text">{categoryName}</p>
    </div>
  );
};

export default CategoryCard;
