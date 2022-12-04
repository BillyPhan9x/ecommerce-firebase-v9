import { Container, Row, Col } from "reactstrap";

import useFilterProducts from "../../hooks/use-filter";

import ProductsList from "../UI/ProductsList";

const Popular = () => {
  const { popularProducts } = useFilterProducts();

  return (
    <section className="popular__category">
      <Container>
        <Row>
          <Col lg="12" className="text-center">
            <h2 className="section__title mb-5">Popular in Category</h2>
          </Col>
          <ProductsList data={popularProducts} />
        </Row>
      </Container>
    </section>
  );
};

export default Popular;
