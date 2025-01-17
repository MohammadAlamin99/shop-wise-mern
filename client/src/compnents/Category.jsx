import React, { useEffect, useState } from "react";
import { allCetegoryRequest } from "../apiRequest/apiRequiest";
const Category = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      let result = await allCetegoryRequest();
      setData(result);
    })();
  }, []);
  return (
    <div>
      <section className="category-section">
        <div className="container category-container">
          <h2 className="common_main_head">Shop by Categories</h2>
          <div className="row row-cols-2 category-row">
            {
           data.length>0?(
            data.map((item, i) => {
              return (
                <div key={i} className="col-lg-4">
                  <div className="category-card">
                    <a href="#">
                      <img src={item.brandImg} alt="" />
                    </a>
                    <h4 className="categroy-text">{item.brandName}</h4>
                  </div>
                </div>
              );
            })
           ):(<span className="text-center">No Data Found</span>)
            
            }
          </div>
        </div>
      </section>
    </div>
  );
};

export default Category;
