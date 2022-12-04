import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Clock from "../UI/Clock";

import counterImg from "../../assets/images/counter-timer-img.png";

const TimerCount = () => {
  return (
    <section className="timer__count">
      <Container>
        <Row>
          <Col lg="6" md="12" className="count__down-col">
            <div className="clock__top-content">
              <h4 className="text-white fs-6 mb-2">Limited Offers</h4>
              <h3 className="text-white fs-5 mb-3">Quanlity Armchair</h3>
            </div>

            <Clock />

            <motion.button
              whileTap={{ scale: 1.2 }}
              className="shop__btn store__btn"
            >
              <Link to="/shop">Visit Store</Link>
            </motion.button>
          </Col>
          <Col lg="6" md="12" className="text-end counter__img">
            <img src={counterImg} alt="counter timer" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TimerCount;
