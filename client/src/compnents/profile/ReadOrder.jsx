import React from "react";

const ReadOrder = () => {
     // Sample orders data
  const orders = [
    {
      id: "#3456_768",
      date: "October 17, 2023",
      status: "Delivered",
      price: "$1234.00",
    },
    {
      id: "#3456_980",
      date: "October 11, 2023",
      status: "Delivered",
      price: "$345.00",
    },
    {
      id: "#3456_120",
      date: "August 24, 2023",
      status: "Delivered",
      price: "$2345.00",
    },
    {
      id: "#3456_030",
      date: "August 12, 2023",
      status: "Delivered",
      price: "$845.00",
    },
  ]

  return (
    <div>
      <div className="main-content-section">
        <section className="orders-section">
          <h2 className="section-title">Orders History</h2>

          <div className="orders-table-container">
            <table className="orders-table">
              <thead>
                <tr>
                  <th>Number ID</th>
                  <th>Dates</th>
                  <th>Status</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <tr key={index}>
                    <td>{order.id}</td>
                    <td>{order.date}</td>
                    <td>{order.status}</td>
                    <td>{order.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ReadOrder;
