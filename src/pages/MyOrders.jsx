

import React from "react";
import { Link } from "react-router-dom";

function MyOrders() {

  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  if (orders.length === 0) {
    return (
      <div className="container text-center" style={{marginTop:"150px"}}>
        <h3>You don't have any orders yet.</h3>
        <Link to="/shop" className="btn btn-dark mt-5">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mt-5 pt-5">

      <h2 className="text-center mt-5 mb-4 fw-bold text-dark">My Orders</h2>

      {orders.map((order, index) => {

        const totalPrice = order.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        );

        return (

          <div key={index} className="card mb-4 p-4 shadow-sm">

            {order.map((item) => (

              <div
                key={item.id}
                className="d-flex align-items-center mb-3"
              >

                <img
                  src={item.image}
                  alt={item.title}
                  width="60"
                  className="me-3"
                />

                <div style={{ flex: 1 }}>
                  <div>{item.title}</div>

                  <div>
                    {item.quantity} × {item.price.toFixed(2)} €
                  </div>
                </div>

                <div>
                  {(item.price * item.quantity).toFixed(2)} €
                </div>

              </div>

            ))}

            <hr />

            <h5 className="text-end fw-bold mt-3 text-dark">
              Total: {totalPrice.toFixed(2)} €
            </h5>
           
          </div>

        );

      })}
        <div className="text-center mb-4">
            <Link to="/shop" className="btn  btn-outline-dark text-dark fw-bold px-4 hover-btn">
             Back to  Shop
           </Link>
           </div>

    </div>
  );
}

export default MyOrders;