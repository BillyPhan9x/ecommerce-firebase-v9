import { Container, Row, Col } from "reactstrap";

import useFilterProducts from "../../hooks/use-filter";

import ProductsList from "../UI/ProductsList";

const Trending = () => {
  const { trendingProducts } = useFilterProducts();

  return (
    <section className="trending__products">
      <Container>
        <Row>
          <Col lg="12" className="text-center">
            <h2 className="section__title">Trending Products</h2>
          </Col>
          <ProductsList data={trendingProducts} />
        </Row>
      </Container>
    </section>
  );
};

export default Trending;
