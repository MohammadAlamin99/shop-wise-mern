import React, { useEffect, useState } from "react";
import { getOrderListRequest } from "../../apiRequest/apiRequiest";
import { useDispatch, useSelector } from "react-redux";
import { setOrder } from "../../redux/state-slice/orderList-slice";

const ReadOrder = () => {
  const orderListAll = useSelector((state) => state?.getOrderList?.order);
  const orderList = orderListAll?.data?.message;
  console.log(orderList);
  const dispatch = useDispatch();
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
  ];

  useEffect(() => {
    (async () => {
      let result = await getOrderListRequest();
      dispatch(setOrder(result));
    })();
  }, []);
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
                {orderList && orderList.length > 0 ? (
                  orderList.map((order, index) => (
                    <tr key={index}>
                      <td>#{order.order_id}</td>
                      <td>
                        {new Date(order.placed_at).toLocaleDateString("en-GB", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })}
                      </td>
                      <td>{order.order_status}</td>
                      <td>TK. {order.total}</td>
                    </tr>
                  ))
                ) : (
                  <p> No orders available.</p>
                )}
              </tbody>
            </table>
          </div>
          <div className="phone-orders-table-container">
            {orderList?.length > 0 ? (
              orderList?.map((item, i) => {
                return (
                  <div key={i} className="phone-orders-data">
                    <div className="order-table-left">
                      <li>Number ID</li>
                      <li>Dates</li>
                      <li>Status</li>
                      <li>Price</li>
                    </div>
                    <div className="order-table-right">
                      <li>#{item.order_id}</li>
                      <li>
                        {new Date(item.placed_at).toLocaleDateString("en-GB", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })}
                      </li>
                      <li>{item.order_status}</li>
                      <li>TK. {item.total}</li>
                    </div>
                  </div>
                );
              })
            ) : (
              <p> No orders available.</p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ReadOrder;
