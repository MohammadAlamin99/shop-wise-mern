import React, { useEffect } from "react";
import { allCetegoryRequest } from "../apiRequest/apiRequiest";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/state-slice/category-slice";

const Category = () => {
  const categoryData = useSelector((state) => state.getCategory.category);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      let result = await allCetegoryRequest();
      dispatch(setCategory(result))
    })();
  },[]);

  return (
    <div>
      <section className="category-section">
        <div className="container category-container">
          <h2 className="common_main_head">Shop by Categories</h2>
          <div className="row row-cols-2 category-row">
            {
           categoryData.length>0?(
            categoryData.map((item, i) => {
              return (
                <div key={i} className="col-lg-4">
                  <div className="category-card">
                    <a href={"/category/"+item?._id}>
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
