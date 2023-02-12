import React from "react";
import { Container, Button, Tabs, Tab } from "react-bootstrap";
import {
  BrandCard,
  brands,
  category,
  CategoryCard,
  deals,
  DiscountCard,
  discounts,
  fashion,
  gadgets,
  ProductCard,
  ServiceCard,
  services,
  toys,
} from "../../components";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <>
      {/*top banner section */}
      <div className="banner-image">
        <div className="container py-5">
          <div className="row py-5">
            <div className="col-lg-6 col-md-12 mr-auto pt-5">
              <h1 className="display-4 weight-600 ">Lorem Ipsum.</h1>
              <p className="text-muted lead">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>

              <a
                href="#"
                className="btn btn-success btn-lg learn_more_banner_btn"
              >
                {" "}
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* category section */}
      <Container className="my-5">
        <h2 className="section_title pb_30">Shop Our Top Categories</h2>
        <div className="category_container">
          {category.map((item) => (
            <CategoryCard
              categoryName={item.categoryName}
              categoryImg={item.categoryImg}
            />
          ))}
        </div>
      </Container>

      {/* deals section */}
      <Container className="my-5">
        <h2 className="section_title pb_30">Today's Best Deals For You !</h2>
        <div className="deals_container">
          {deals.map((item) => (
            <ProductCard
              productTitle={item.productTitle}
              url={item.url}
              highlightedStars={item.highlightedStars}
            />
          ))}
        </div>
      </Container>

      {/* mid banner */}
      <div fluid className="banner-image banner-image-2 py-5">
        <Container className="py-5 d-flex justify-content-md-end justify-content-center">
          <div className="content_box">
            <h2 className="">Welcome to my website</h2>
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <Button variant="primary">Learn more</Button>
          </div>
        </Container>
      </div>

      {/* best deals tabs */}
      <Container className="my-5">
        <h2 className="section_title pb_30">Today's Best Deals For You !</h2>
        <Tabs
          defaultActiveKey="Gadgets"
          id="uncontrolled-tab-example"
          className="mb-4"
        >
          <Tab eventKey="Gadgets" title="Gadgets">
            <div className="gadgets_container">
              {gadgets.map((item) => (
                <ProductCard
                  id={item.id}
                  productTitle={item.productTitle}
                  url={item.url}
                  highlightedStars={item.highlightedStars}
                />
              ))}
            </div>
          </Tab>
          <Tab eventKey="Fashion" title="Fashion">
            <div className="gadgets_container">
              {fashion.map((item) => (
                <ProductCard
                  id={item.id}
                  productTitle={item.productTitle}
                  url={item.url}
                  highlightedStars={item.highlightedStars}
                />
              ))}
            </div>
          </Tab>
          <Tab eventKey="Toys" title="Toys">
            <div className="gadgets_container">
              {toys.map((item) => (
                <ProductCard
                  id={item.id}
                  productTitle={item.productTitle}
                  url={item.url}
                  highlightedStars={item.highlightedStars}
                />
              ))}
            </div>
          </Tab>
          <Tab eventKey="Education" title="Education">
            <div className="gadgets_container">
              {gadgets.map((item) => (
                <ProductCard
                  id={item.id}
                  productTitle={item.productTitle}
                  url={item.url}
                  highlightedStars={item.highlightedStars}
                />
              ))}
            </div>
          </Tab>
          <Tab eventKey="Beauty" title="Beauty">
            <div className="gadgets_container">
              {fashion.map((item) => (
                <ProductCard
                  id={item.id}
                  productTitle={item.productTitle}
                  url={item.url}
                  highlightedStars={item.highlightedStars}
                />
              ))}
            </div>
          </Tab>
          <Tab eventKey="Travel" title="Travel">
            <div className="gadgets_container">
              {toys.map((item) => (
                <ProductCard
                  id={item.id}
                  productTitle={item.productTitle}
                  url={item.url}
                />
              ))}
            </div>
          </Tab>
          <Tab eventKey="Fitness" title="Fitness">
            <div className="gadgets_container">
              {fashion.map((item) => (
                <ProductCard
                  id={item.id}
                  productTitle={item.productTitle}
                  url={item.url}
                />
              ))}
            </div>
          </Tab>
          <Tab eventKey="Sneakers" title="Sneakers">
            <div className="gadgets_container">
              {toys.map((item) => (
                <ProductCard
                  id={item.id}
                  productTitle={item.productTitle}
                  url={item.url}
                />
              ))}
            </div>
          </Tab>
        </Tabs>
      </Container>

      {/* brand section */}
      <Container className="my-5 pt-4">
        <h2 className="section_title pb-3">Choose By Brand</h2>
        <div className="brand_container">
          {brands.map((item) => (
            <BrandCard title={item.title} url={item.url} />
          ))}
        </div>
      </Container>

      {/* discount section */}
      <Container className="my-5 pt-4">
        <h2 className="section_title pb_30">Get Up To 70% Off</h2>
        <div className="deals_container">
          {discounts.map((item) => (
            <DiscountCard value={item.value} text={item.text} url={item.url} />
          ))}
        </div>
      </Container>

      {/* services section */}
      <Container className="my-5">
        <h2 className="section_title pb_30">Services To Help You Shop</h2>
        <div className="row">
          {services.map((item) => (
            <ServiceCard serviceTitle={item.serviceTitle} url={item.url} />
          ))}
        </div>
      </Container>
    </>
  );
};

export default Dashboard;
