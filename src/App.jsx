import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css"; // Importing Bootstrap's CSS for styling
import { Image as BootstrapImage, Col, Container, Row } from "react-bootstrap"; // Add Container and Row for responsive layout
import Image from "./components/Image";
import Description from "./components/Description";
import Name from "./components/Name";
import Price from "./components/Price";

const firstName = "Maissa"; // Sample first name for dynamic rendering

function App() {
  return (
    <Container className="py-5">
      {" "}
      {/* Container to center content and add padding */}
      <Row className="justify-content-center">
        {" "}
        {/* Row to center the card */}
        <Col xs={12} md={8} lg={6} xl={5} className="text-center">
          {" "}
          {/* Column with responsive sizing */}
          <Card className="shadow-lg border-0 rounded-lg overflow-hidden">
            {" "}
            {/* Card with shadow, rounded corners, and hidden overflow */}
            <div className="position-relative">
              <Card.Img
                variant="top"
                src={Image()} // Using Image() component to get the image URL
                alt="Product"
                className="img-fluid w-100" // Makes the image responsive and fills the width
              />
              <div className="position-absolute top-0 end-0 p-2">
                {" "}
                {/* Positioning the "Sale" badge */}
                <span className="badge bg-danger">Sale</span>
              </div>
            </div>
            <Card.Body className="px-4 py-4">
              {" "}
              {/* Card body with padding */}
              <Card.Title className="fs-3 fw-bold mb-3">
                {" "}
                {/* Product name with bold font and spacing */}
                <Name /> {/* Dynamic Name component */}
              </Card.Title>
              <Card.Text className="fs-5 mb-3">
                {" "}
                {/* Product description with a larger font size */}
                <Description /> {/* Dynamic Description component */}
              </Card.Text>
              <Card.Text className="fs-4 fw-bold text-primary mb-4">
                {" "}
                {/* Price with bold font and blue color */}
                <Price /> {/* Dynamic Price component */}
              </Card.Text>
              <div className="d-grid gap-2">
                {" "}
                {/* Makes button take full width */}
                <Button variant="primary" size="lg" className="fw-bold py-2">
                  {" "}
                  {/* Add to Cart button with large size and padding */}
                  Add to Cart
                </Button>
              </div>
            </Card.Body>
          </Card>
          {/* Conditional rendering based on the presence of firstName */}
          {firstName ? (
            <div className="mt-4 p-3 bg-light rounded-3">
              {" "}
              {/* Background and padding for the section */}
              <h3 className="mb-3">Hello, {firstName}!</h3>{" "}
              {/* Greeting message */}
              <Row className="justify-content-center">
                {" "}
                {/* Row to center the image */}
                <Col xs={10} sm={8} md={6}>
                  {" "}
                  {/* Column with responsive sizing */}
                  <BootstrapImage
                    src={Image()} // Using Image() for the image URL
                    thumbnail // Adding Bootstrap's thumbnail style
                    className="shadow-sm" // Adding shadow for styling
                  />
                </Col>
              </Row>
            </div>
          ) : (
            <p className="mt-4 fs-4">Hello, there!</p>
          )}
          {/* Default greeting if firstName is not available */}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
