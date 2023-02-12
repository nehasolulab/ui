import React from "react";

const ServiceCard = ({ serviceTitle, url }) => {
  return (
    <div className="col-md-4 col-12">
      <div className="service_box">
        <div className="service_text_container p-3">
          <h2>{serviceTitle}</h2>
          <p>Updates in safe shopping in our store</p>
        </div>
        <img src={url} alt="service" className="pt-2" />
      </div>
    </div>
  );
};

export default ServiceCard;
