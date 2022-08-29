import React, { useContext } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  makeThemeBgColor,
  makeThemeTextColor,
  ThemeContext,
} from "../../util/ThemeUtil";

const EmptyCart = () => {
  const { themeMode } = useContext(ThemeContext);

  return (
    <Row
      style={{ height: "74vh", width: "100vw" }}
      className={`bg-${makeThemeBgColor({ themeMode })} 
       text-center`}
    >
      <Col
        style={{ fontSize: "50px", width: "100%" }}
        className={`fw-bold text-${makeThemeTextColor({ themeMode })}`}
      >
        Your cart is currently empty
      </Col>
      <Link to="/products">
        <Button
          variant={`outline-${themeMode === "light" ? "dark" : "light"}`}
          style={{ width: "45%" }}
          className="py-3 mt-5 fw-bold"
        >
          Go Shopping
        </Button>
      </Link>
    </Row>
  );
};

export default EmptyCart;
