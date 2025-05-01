import React, { useEffect, useState } from "react";
import img from "../assets/images/Discount-section/discount-img.jpg";
const Discount = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 12,
    minutes: 45,
    seconds: 5,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return {
            ...prev,
            days: prev.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <>
      <section className="discount-section">
        <div className="container-fluid px-0">
          <div className="discount-area-wrapper">
            <div className="left-area">
                <img src={img} alt="" className="dis-img-fluid" priority />
            </div>

            <div className="right-bg">
              <div className="right-area">
                <p className="limit-time">LIMITED EDITION</p>
                <h2 className="dis-head">Hurry up! 30% OFF</h2>
                <p className="dis-paragraph">
                  Find clubs that are right for your game
                </p>

                <p className="expire-time">Offer expires in:</p>
                <div className="time-area">
                  <div className="btn-time">
                    <div className="main-time">
                      {timeLeft.days.toString().padStart(2, "0")}
                    </div>
                  </div>

                  <div className="btn-time">
                    <div className="main-time">
                      {timeLeft.hours.toString().padStart(2, "0")}
                    </div>
                  </div>

                  <div className="btn-time">
                    <div className="main-time">
                      {timeLeft.minutes.toString().padStart(2, "0")}
                    </div>
                  </div>

                  <div className="btn-time">
                    <div className="main-time">
                      {timeLeft.seconds.toString().padStart(2, "0")}
                    </div>
                  </div>
                </div>

                <a href="/shop" className="common-shop-now-btn">
                  Shop now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Discount;
