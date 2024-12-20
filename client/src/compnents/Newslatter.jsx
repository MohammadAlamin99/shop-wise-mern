import React from "react";
const Newslatter = () => {
  return (
    <>
      <section className="newslater-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="newsLatter-area">
                <div className="newslatter-contatent">
                  <h4 className="common_main_head">Join Our Newsletter</h4>
                  <p className="categroy-text">
                    Sign up for deals, new products and promotions
                  </p>
                  <div className="input-wrapper">
                    <div className="input-area">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M4.07675 6.53075C4.23299 6.01858 4.70925 5.646 5.27254 5.646H19.2725C19.8358 5.646 20.3121 6.01858 20.4683 6.53075L12.2725 11.9946L4.07675 6.53075ZM2.52257 6.88226C2.52244 6.89026 2.52242 6.89826 2.52254 6.90625V16.896C2.52254 18.4148 3.75376 19.646 5.27254 19.646H19.2725C20.7913 19.646 22.0225 18.4148 22.0225 16.896V6.90622M20.5225 8.29738V16.896C20.5225 17.5864 19.9629 18.146 19.2725 18.146H5.27254C4.58218 18.146 4.02254 17.5864 4.02254 16.896V8.29738L11.8565 13.52C12.1084 13.688 12.4366 13.688 12.6886 13.52L20.5225 8.29738ZM22.0225 6.88229C22.0151 5.36981 20.7868 4.146 19.2725 4.146H5.27254C3.75834 4.146 2.52997 5.3698 2.52257 6.88226"
                          fill="#FEFEFE"
                        />
                      </svg>
                      <input
                        className="input-fild"
                        type="text"
                        placeholder="Email address"
                      />
                    </div>
                    <button className="btn-signup">Signup</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Newslatter;
