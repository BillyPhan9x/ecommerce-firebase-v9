import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import heroImg from "../../assets/images/hero-img.png";

const Hero = () => {
  const year = new Date().getFullYear();

  return (
    <section className="hero__section">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <p className="hero__subtitle">Trending product in {year}</p>
              <h2>Make Your Interior More Minimalistic & Modern </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quaerat nulla repellat quo eaque alias corporis sunt, facilis
                nescriunt rem fugit!
              </p>

              <motion.button whileTap={{ scale: 1.2 }} className="shop__btn">
                <Link to="/shop">SHOP NOW</Link>
              </motion.button>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="hero__img">
              <img src={heroImg} alt="hero" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;