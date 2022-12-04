import { Container, Row, Col } from "reactstrap";

import useFilterProducts from "../../hooks/use-filter";

import ProductsList from "../UI/ProductsList";

const BestSales = () => {
  const { bestSalesProducts } = useFilterProducts();

  return (
    <section className="best__sales">
      <Container>
        <Row>
          <Col lg="12" className="text-center">
            <h2 className="section__title">Best Sales</h2>
          </Col>
          <ProductsList data={bestSalesProducts} />
        </Row>
      </Container>
    </section>
  );
};

export default BestSales;
