import { Container, Row, Col } from "reactstrap";

import useFilterProducts from "../../hooks/use-filter";

import ProductsList from "../UI/ProductsList";

const NewArrivals = () => {
  const { mobileProducts, wirelessProducts } = useFilterProducts();

  return (
    <section className="new__arrivals">
      <Container>
        <Row>
          <Col lg="12" className="text-center">
            <h2 className="section__title">New Arrivals</h2>
          </Col>
          <ProductsList data={mobileProducts} />
          <ProductsList data={wirelessProducts} />
        </Row>
      </Container>
    </section>
  );
};

export default NewArrivals;
