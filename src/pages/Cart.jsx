import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";

import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";

import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../redux/slices/cart-slice";

// import tdImg from "../assets/images/arm-chair-01.jpg";

import "../styles/cart.css";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <Helmet title="Cart">
      <CommonSection title="Shopping Cart" />

      <section>
        <Container>
          <Row>
            <Col lg="9">
              {cartItems.length === 0 ? (
                <h2 className="fs-4 text-center">No item added to the cart</h2>
              ) : (
                <table className="table bordered">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Remove</th>
                    </tr>
                  </thead>

                  <tbody>
                    {cartItems.map((item) => (
                      <ProductTr item={item} key={item.id} />
                    ))}
                  </tbody>
                </table>
              )}
            </Col>

            <Col lg="3">
              <div>
                <h6 className="d-flex align-items-content justify-content-between">
                  Subtotal:
                  <span className="fs-4 fw-semibold">${totalAmount}</span>
                </h6>
              </div>
              <p className="fs-6 mt-2">
                Taxes and shipping willl calculate in checkout
              </p>
              <div>
                <button className="shop__btn w-100">
                  <Link to="/checkout">Checkout</Link>
                </button>

                <button className="shop__btn w-100 mt-3">
                  <Link to="/shop">Continue Shopping</Link>
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

const ProductTr = ({ item }) => {
  const dispatch = useDispatch();
  const removeProduct = () => {
    dispatch(cartActions.DELETE_CART(item.id));
  };

  return (
    <tr>
      <td>
        <img src={item.imgUrl} alt={item.productName} />
      </td>
      <td>{item.productName}</td>
      <td>${item.price}</td>
      <td>{item.quantity}</td>
      <td>
        <motion.i
          whileTap={{ scale: 1.2 }}
          className="ri-delete-bin-line cart__icons-remove"
          onClick={removeProduct}
        ></motion.i>
      </td>
    </tr>
  );
};

export default Cart;
