import React from "react";

const BlogDetails = () => {
  return (
    <>
      <div className="blog-page">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="breadcrumb-nav">
                <span>
                  <a href="/">
                    Home
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                    >
                      <path
                        d="M4.58423 3L7.58423 6L4.58423 9"
                        stroke="#605F5F"
                        stroke-width="0.75"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </a>
                </span>
                <span>
                  <a href="/blog">
                    Blog
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                    >
                      <path
                        d="M4.58423 3L7.58423 6L4.58423 9"
                        stroke="#605F5F"
                        stroke-width="0.75"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </a>
                </span>
                <span className="active">
                  How to make a busy bathroom a place to relax
                </span>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col" style={{ padding: 0 }}>
                <div className="article-tag">ARTICLE</div>
                <h2 className="common_main_head">
                  How to make a busy bathroom a place to relax
                </h2>
                <div className="article-meta">
                  <div className="author">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M18.5588 19.5488C17.5654 16.8918 15.0036 15 12 15C8.99638 15 6.4346 16.8918 5.44117 19.5488M18.5588 19.5488C20.6672 17.7154 22 15.0134 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 15.0134 3.33285 17.7154 5.44117 19.5488M18.5588 19.5488C16.8031 21.0756 14.5095 22 12 22C9.49052 22 7.19694 21.0756 5.44117 19.5488M15 9C15 10.6569 13.6569 12 12 12C10.3431 12 9 10.6569 9 9C9 7.34315 10.3431 6 12 6C13.6569 6 15 7.34315 15 9Z"
                        stroke="#6C7275"
                        stroke-width="1.5"
                        stroke-linejoin="round"
                      />
                    </svg>
                    Henrik Annemark
                  </div>
                  <div className="date">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M16 2V5"
                        stroke="#6C7275"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                      <path
                        d="M8 2V5"
                        stroke="#6C7275"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                      <path
                        d="M3 7.5C3 5.29086 4.79086 3.5 7 3.5H17C19.2091 3.5 21 5.29086 21 7.5V18C21 20.2091 19.2091 22 17 22H7C4.79086 22 3 20.2091 3 18V7.5Z"
                        stroke="#6C7275"
                        stroke-width="1.5"
                      />
                      <path
                        d="M3 9H21"
                        stroke="#6C7275"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                    </svg>
                    October 16, 2023
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Image */}
          <div className="row">
            <div className="col">
              <div className="main-image">
                <img
                  src="https://images.pexels.com/photos/90317/pexels-photo-90317.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Modern bathroom with freestanding tub"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>

          {/* Intro Text */}
          <div className="row">
            <div className="col">
              <p className="intro-text common-Listing-text">
                Your bathroom serves a string of busy functions on a daily
                basis. See how you can make all of them work, and still have
                room for comfort and relaxation.
              </p>
            </div>
          </div>

          {/* Section 1 */}
          <div className="row">
            <div className="col">
              <h2 className="section-title">
                A cleaning hub with built-in ventilation
              </h2>
              <p className="intro-text common-Listing-text">
                Use a rod and a shower curtain to create a complement to your
                cleaning cupboard. Unsightly equipment is stored out of sight
                yet accessibly close – while the air flow helps dry any
                dampness.
              </p>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="row">
            <div className="col-md-6">
              <div className="gallery-image">
                <img
                  src="data:image/jpeg;base64,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"
                  alt="Bathroom with black herringbone tiles"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="gallery-image">
                <img
                  src="data:image/jpeg;base64,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"
                  alt="Modern bathroom with towel rack"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="row">
            <div className="col">
              <h2 className="section-title">Storage with a calming effect</h2>
              <p className="intro-text common-Listing-text">
                Having a lot to store doesn't mean it all has to go in a
                cupboard. Many bathroom items are better kept out in the open –
                either to be close at hand or are nice to look at. Add a plant
                or two to set a calm mood for the entire room (and they'll
                thrive in the humid air).
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="row">
            <div className="col">
              <h2 className="section-title">
                Kit your clutter for easy access
              </h2>
              <p className="intro-text common-Listing-text">
                Even if you have a cabinet ready to swallow the clutter, it's
                worth resisting a little. Let containers hold kits for different
                activities – home spa, make-up, personal hygiene – to bring out
                or put back at a moment's notice.
              </p>
            </div>
          </div>

          {/* Section 4 with Image */}
          <div className="row bottom_row">
            <div className="col-md-4" style={{padding:0}}>
              <div className="side-image">
                <img
                  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAL4AyQMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAFAgMEBgcBAAj/xABQEAACAQMCAgUIBQYLBgUFAAABAgMABBEFEiExBhNBUWEUIjJxgZGhsSNCUsHRBxUzYuHwJUNTY3JzgpKTstIWJDRUovFkhJTDxBc1RFWD/8QAGQEAAwEBAQAAAAAAAAAAAAAAAQIDBAAF/8QAKREAAgICAgECBgIDAAAAAAAAAAECEQMhEjFRE0EEIjJhcZEU8CMzQv/aAAwDAQACEQMRAD8Ay4pXQtPla8FrDZvoZUYpzAPMA0rZXtuK46idbapdQKIyevj7Ec/I86Oad0jfIWOTj/JTHDexuR+HqqrBccq8Ru58alPDCXaKRySia9p+sOE+lQlDzGOI9VFoWgulzbEls8Y24EeysX0/VtQ01v8AdJ2WPtjY7lq06R0ssZGVb4S2cuc71bdH8eIrHLBOHW0WU4yZoBj2PleBHZ31JtbiW3fdGxVvs9h9lC7LUOtg3b0uYj6MkRz8vlRKKSOdfoyD4HnU4yaetM5q1TQL1LpIkl+1lfAW8nNS3oP6j3+B+NVLpLq5upm06ycdUhxcSA9v2AezxNHOnek+U2BvYl3Nb+mD9jt93yzVY6K6LPrV2ltbAqmN0spHCNe32+H7a3RzznGn2Q9KEXyQW6IdHfzxcecCtnDjrXHb+qPH5Dj3VqhdLO1jiiRUVQAsY5KBTVjb2mmW0dlahY0RfNXIyw7Se8nvqFeSmRzk5zW3BiUF9zNmyOT+w1LKTzNRXbPOlSNUaWURoWcjaO/5mnbIrfRyeZYkLyEKoGSewCqD0g1xtRk6m3JFqp4Htk8fV4U70h1tr9zbWrEWo4s38p+ygSh3mWGGIvM52og7ayZMnJ8UbMeNRXKQ5ayXEV3CbF5BdhsRCM8Sf39nfW1dFfLX0iJtVdZLrzt0igAHj3Dhw5eOKpvRzQU02PrZ8PduPPYfVHcP341ddLuFSAQsygpyzwzVsMXFEc0+TB+vdD7S91ddZjQG5THXQycY5sAAEjsYcCOw4wc5yCltcCb9G2W547fXT9xdr1Zit3Ek8nAKhztB7c1E0/SZbe98paVT5m3YFPz9o7KulT0RvWwpDEQpMx4HsNC9XWS1kVIJXWGQZ6sOcA0UuLmCAkzSquBnBGSaB31z5VcBx6AHmDw8aaxURVBpW2lCvUBjBtldCU8BXVWvM5Ho0MhK6Y/CnxH40orXWzuJGEfhSer8KlBTXuro8g8SIUOCMcDTUiHh4cqIdX4U3JF4UymxXAh2V9faZN1thcPA/bs5H1jkatWnflB3DqdUieB+QurZc+9T91VhoSd3DlQ+5hJ7KZ48eTUkI5Sj0zb9L1yDUIyYrmG+tWG2TAw2D7OHqPwo70dTTtJ03yWwUsEG5iT58jeNfNEUtxZzCa1leKQcmRsVcdG/KJew7E1FGlA/joBtcescj8KT+PkxO4OzvVjPUlRouvrcvcNdF3WfJ6tlOCB2AdwqFZdLZIJOp1ePI7JkHH+0v4e6mLXpnZ38O1mSYKOJB2uB4j/t66ha7Fa3u2exmRweaKfOU+IqEJ5YSLShCaLpFdw3MHXW8scsRGQyHIqldI9cN47WlqxFuPTcfXPd6qrzT3Fo7RRuyLP5smD6QzmuxxyzyrBBGXlfgir+/wD2+NaJZJT6JQxRhtnkSSaVYIELyucKo7/37eyr70c6PJpidbORJduMPIOIUHsHhSujWgRaVEGfEl04+kc8l8B4UeC93ZVMeNIlly8jyjHLsruB3V2vVoIMk6WVju/OwOGMmjgZiME8e7NVr8c075VPs2da+310yYjQ9q0qyXY28dqYJHaaiqB7q5mlL4D3nj7qY5ChXeFLjt5pf0UUj+pc/Knfzfef8vL/AHa4JgoWlAUpRSgteTZ6hxVpRFKC12usajyKKVspSClkUlhoYKUlo6kYrxFFSOcSH1ec+NQpoPNzii22o8qZGKpCeyU4lfmgx2VDeA8OHLlRy4jx2VCdAeytePI0jNOA2kLAggkEciDxqZbicOXErBhtwQcGlonhTkeI+s3dhX76ScrRSKoPJaXuoxwi3tpJplwfNA4g8MnwyavXR7Q49KgDHD3TDz5fuHhQ7oIo6zOOLWQz4jcKtpGDkc6GKPy2Lnm74nB2+NLpFeqyM4qu12GF55NkKl27lFGLbR0j86+k87siTn7T+/rqgjYHjRpX2xqzHuUZPuolBody67p3SBf1jk/hRdHSFNtpEsSd4FNElm3EknvzTpC2MxaZp8R+kaSY92cD4VKR4Yv0FvCh78ZpnA7q7gd1E6x57uU+i/wFI8pm/lDTXLlXKALPndadWkBacFeM2ewjwFcxSxXdooWMKjGaWy1xFI5U9zpGwoaCV1lpzIruM13IIwU8KjyLU8JmmJE9LwposEkCrhagOlFbhRUCUY5Vrg9GacRwDFccbmYH6zL7OdLUfKnFVW6wkdq/fQsajReg8ZVoyTzsF4f2xVqeqz0MXLxNn/8AAX37xVml4VbD/r/Zmz/WNmiGn6XJdBZZT1UHPPaw8Px+dDmq0Xku1Y41VstGCCBwB8avGKISYuMxWsYjs4xGp5sRxPvpDthcuQO8seVVCa3iuJWeR7topBu2m+mwHbHIbuA87hjl2UPTTbVZ1MljbSMG85nhViRuxzIrvUQvFlyn1bTYGxNqNpEe551U+4mm213TfqTvJ/UwvL/lBp63gtraAOqRxIRnCjaB7BTcmo2Ued00YwO8feafkvIvFjf55hb9DaX8n/lyn+fbSPzreP8Ao9HuE/rpYx/lLUmTXLNM8WIH2Vzw7eRNP2l4L23E9uJWRjgHae8ju8KKlF+4Kl4I/lesNzsrSMd5uHf3jYvzrnW63/4L/Cb/AF1MPXt6FtMfUQPmRSfJ73/lpP8Ap/10bZ1GEA0pabyO+lI43YrxWj2RxRTgFcA9VK40gw4gp0LSUB8KcU5qbY6GwnnYpajHpUoYzmlHjzoWGjqov2qYlj81jmpIXC5pqVeDCuizmgPcgUPlFE7oUPlrdjejLIUp9HxpxDjrc/q/fTS/VpTHzpR4r99Fh6NP6FOOqiGOPkS8faKsclVvoMd8CjlttFHr4irLJV8H0fsyZvrGGq1TkjqsfyX4VVmqz3J/Rf1H4Voj0QZVlATS4Djj1sA95jzSYH33Ma95mB9jCkyv/BUPhPb598X40jT/AP7iPCSfHtY1Bdjhq2it3knknjDEQDaT30SubLToZrRfJYVDzlT5vP6N+fuoREpYSAMvmxZOeRFEL2RnuLIKm4pMR3Z+ikror5f75JTm1KgVo/U/7O6nIEjLKJSGYZI4HtNSOgEhfT7lsY2yDh7KHaIcdFNY7QFmwf7LU/8Ak+Ek2mXDxgEmXAO7lwox1ONeBk3wk/uXTrQORz7f21zrvB/7jfhUeON4+HWBn5kHhj1VL3er3VqJJtnyXNdlGUZ5kD40UtRuXLcW76sn/wBMHuipGtqnHP8AweeP9+iy/k3nt7WSVNXjmdELhPJiN2ATj0jWZY1XRoyZHemU4Rjbnj76UIieW6vI4KcakRZ76m4R8AWWXkaCSjkT7xSh1w+v8BTx9nurqkVN4o+Blmn5EKJ+9fd+2lgzn0VRveKdU05nPOh6ERl8RMQouAMGNT/brkhIz1gC59ZqRCaavSm3OB7qX+PAdfFTBN6jKc8CKFy0Ru3UDGeFNafplzqt2ba0VWkC5O59opox4ukU53G2Q1Po1yR1UyFmxnGKtkH5O9fl27TYD+lOf9NV/XtJudG1WTT79Y+ti2FijEqQy54Egd4p3FrZ3NPRonQZwURSOVkpz/aqzyVWeg6bUAJ5WicP7VWV6rg+j9mfN9Y21WS6/iv6j8KrjVY7vH0PjB+FXXRFlMkf+DMfz9v/AOx+NPaYM6tg8usk/wAxqC7/AMGt4T2//wAep2k8daYHskf5tUF2UsK2ePpvN49TkKVJzxojeP1d1pxeGQ4uCRwPPqpKgWIZknwmd0XYcY4n8KQ98ZdQswuR9MxAAxtxFJwz38u2ngnxMueajkSfuB9Eu1j6NayBHI4PX8dvD0T3476mfk0nEelXD7CVabaSMDbwoXpKt/sjrG5sLH5Rx8cN+2nfyabDYTBiCpn4hnwD5vOur51+CkZf45V5L75YpmjRBnc3EqAccjz/AH41My/e3vFVu+Ck/RDqwybySp7OI4Y78VH8qb7Lf+q/bVbIetXYOsW5eFHoG3rtbivdWWw9OGTQZ9Tj0+PMc6xdU1z52GyN3o8sinbP8pd5NLFHFplsjyuqRh5jgknAHIY4kUItNGiaKtLF5PNJA586ORkb2HFSAccjRG+0LW7y8nvPzcc3EhlIhZWUbjnh5xPbUO40TWbfG/TLvaObJCz/ACqDRw0X/WpKyCpVroGs3f6LTrhR9qZeqH/VijFj0FvZf+KvrSDwVusb3cB8aGjqYDWQfa4e6lCTx4e84q7Q9B7GzQzPdPcyIN0aOyqjMBkAjmQe6mNT6L6Xco1xbXD6e2PPCjrUHjtByvrBx4UaXkNMqsUgH1qRcMrx4zg0Rg0GCSSOMa3b5lXKFYG+W72UWi6BhzvuNTeRexYYQufaWNBI6mZtqGU9HzudGOgN5aWepzTX95DbDqwo6xwN2T2Zq/33QnR72LbHa+SSiAormbChuOGIAyTnv7KyC+srmzaNbuB4S8e9d4xkfv2dlc9Mutxpm42nSvQo4xM2rW3VBtpctlc4Jx7gazn8pWp6bqvSyO80q7iuYmtUVynY6s2R7ttAIIZLnSltbWOaR2nEr9WCQo4rk93pVc7zonpmoRjqZHguRDiOZsCIbftkDvOM88Adxz0suuLFVRdhToUCzNIG4C0QY9oqzOaq/QyKS2muIJSpkjt0jba2RkHBwe311ZmNHDqJ2X6jxqw3h/Qf1NVvdVhu2/4bxh+4VdEWUBn/AILkPdPB8rai2jn+Hcd8r/5noB1mdKfPbNB8rWjujEfn7/8Ao3+d6muynsFrSQr5SqSMn0f1T4mpFvpMr3tlJM7sqykbmAy30bjvNRdPRnudQ2ug6uJcbhz4mjt297Hc2MaywedMRxT+bf8AWqkE0ujNPGpTtlT0TT+t6M64iyEEGcbf71RvyZRwPolxIxYkTblyOJwvGpmhfnBejuu4EYYmclW444N2g8Kb/JajjozcrJB5jSn63Dl3UK+ZfgpxXBpeS4eTpdefgsccGIII8P3Apj83T93+X8Kbit5bDDKZVQcl2jHzqd+cZf8AlpP39tU4kFFe58429pv6PXz4yyhWz24DA/dQm5jbyRinmkDII4HPfVj04htC1CMc2tj8FNA5GBgI7DUo6ND7ND6K9JDfaXb3DHLZ2zrw81hz9nI47jVrvU/OWlSRwzMpdfNdDyNYv0HuzFqVzZ5JWRRKq+IPH4H4VsejNvtQEGAeIx2euumt0MmVSDVLhHKS4SWBgkydh7nHgaMT69Y2aRtOWYvyEYyaEdKIRZa3HcCMsl0OpcDtyRg+vNDLyw8r0+XIw8ZOD2isbVSNS2i0wdJdNkGEgkI/WA5+wmnH6QQtbyQRW6iEjBO75ACs2tpmOQeLIcOue3vq1aR1ckRPArnJBXh+ylyRfsNFRHrXTrSPPUyzvuO8RgqOr55xkDn3eFFPzld2uyIPII+GSoBz7edVTXtals5I+pkQRbtsgUDn35qZpdyl7IpvHd9xwcngDjhSOM0rbGuL9g7Jeozs1zIOB4CZyxBPgeI91Paxoy6/pPkt0Y1Iy0E6gko3f6uwjtFR4YrC1JYoid5xxNTYr1L6YWVjOq3IOVDnHADn7KEOxZPXRmdvean0WmLI/U3Nu/VXEJUMJOPI+BJ4Hxp/X9Tvri2tdQurmLqpmkUW8L+hkKSDw4jl+ytLn6IadqM7XOuWkUtyxALQzNhgOWeVdforpMMW2zllsc8haIilf7QTPxrbLG5U0jLUbpld/J9mO2wwwPJk+f78Ktbue+mNI6Ow6bxjvbiX6NUzMPOOO3PfRqPTrf629/6TAfKq48bSoGSabsEB9xyDw99WS7Yf7p4wZ5Y7BSGtoHGECqPAYpzyQNjLnhy3MTj1ZqyjSJNmXrJ/B23IO6SHl/RtasejP/DW7+dx/wBbUfuOj2hiHbcW6RquCGRim0jbg8P6C+6oEOkdTerc6eZriEuCwaJgV4k8DjDc6nwaHUtCI7p7a91hQhbbAuePLn3062uu+uaeslncIFuceeVIJKOMA58RzoVdzKNZ6QRC5WNmgj2ggHdwJ4Zpi6kk/OVi5vYWK3IOUi2hcA8SBVE0obZJ25hvo5fNL0b16Xq/REx9IfreNPfk0lVujt2RjPWsMeOKAdGZj/sdroWVTvjlxjGTwfOOPyqV+Td5E0e42y7cz8eAPZSVeRV4Kx1jf5NJZl2/Sej3NQ/84aR/Kx/Gn4gSu2V9wx9YVF8l8IP8M/jVeLEsw7UNLOgSS2nXi4jltxtk27eGGGCM8DVd0OxGqahbWEk/U9cwG7GT3nA7eFXjWNc6NLYXdva24S5lQr5QVTcPHJJbHtqlxx2MLRz/AE0m1lYbFxjjnPH1Vg9RpGuOGyZY6Jb6NqqX9vfJcTWzndCzgZUZUj3dvDjWg6fqsV/YL5AWtnZRnriFOfVg5+VZe99ECJLazVWBzln3caMaPcPIVkdyzYB4ngOGeA5CmjKU+xZwUEWnUOiEuqyLPLrU7SKQVZcAAjwBp6bo9qzrKkUtnGsnNm3kj1DA+dRYJ5k9GRh7aIxajdRqp3jJ7RXNJvYqlS0Vtvyd6rDctcW9/DNJjGwpsDfOiFj0P1jayGSOBX7GkJI92c/Cjqa3MPSjz66mR66n11HxouKfZ0ZtFZn/ACaRXUIW51GUk/yaqPxp7T+hH5swlzqysiAhB1ZL+GccKMXetT3LdVa5iQ/WB84/gPVUVDszz3HmTSzcWqGVt2ybaaRpsJy0cs8n2p5Me4D76K28UEYxbwwRD+ajAqvGVgAAx4eNLju5PquT8KMJRi+gOLfuWQxSfVkauDeOTfGgsV8/effT63RPMmreqhOAXLP2FTxzTsakjIx6ttDYbhEO3BklxkRoRn1nuHicU+bSe7UC6kaOIfxcTcfa33CqKbfQjiPXF/b2xCbutlPERoMsR6hS7c3V0Msnkq9znL+7kPf7KdhWC2BEUaJnicDme/1+NImlG4ANgnkRTAH0toLX6RQXkzxeTzmB8O72VI63coIPE8qHpdDyZ97EYXj+ND4dbRlSON4+sXPnOcKMd54+75Uy2Iyl9P7Zz0qkuI43KywROcAcDgjt/o0G8lum86OOTljIHD4Vor3Oh3V4GudSsnmGFLJPtPD28qI2y6UT/u6QBh2787vbk1KXw8W7bLwy0kqMsX85xwNFFLdLC4xIgLhXHiO2rb0H1Kz0vTZob/ro2Mu8MIyy4x4Zq6I6QqVjCYPYtdjkWH0UQnt4cT7aMcCjK0zpZeSpo9adKNCk5ajCPN/jAV+YFL/P2kf/ALG3/wAZP9Vd620lYC5tomB7dgbFI8m0T/l7L/AH4VTiyVxPmSUBVZVGB4VMlXNnGx45CjHsNRpgpVjjsqVdMFjQLwAC+/Fee/aj1KI5yU40T0m7jQHiw2cCcZBoS74CgcjintPJKue3dmqw1Zlzlzt9XgYYJ4+6iEN/bsgywGO+qUACNx4mnFLKMKSB3A4riJeRIrcVdSPA5+NRb6ZxNCqnapUls548eH31UOvmTikjKe8HFWK0ZorCKbUZQCeO5jyHPHuxSyCgmrhXTJ58jnlUx3LEkHiPjQ0TWs9oZIbmJlHMq27Hr7qVDeYdFfD9zDhmkSoomiX17Zww40ppABgDBrpO+Vm2nzezvpDEM/CgEet3JbBNSLu7Wyt98h88naq/bY8gPjTVtEpbIPCglxdG617DHMNryHZvOefqH30UkAumnNIITJIB1h4ybRgE+yiKS4zgkZ51T9G1C5j1ifM5Ns0ao0OfNBIJDevjRe61JIOsGdrIcYPrrRDonKgte3Ahj3Mw5ig17rUYiQQ5kk4hVUjPr8B66BajqNzeYViYoO0/WY948KJ6BoMTgT3TYjYfol9Jv6R5/v2VpjFLciLbl0esH1G/d1YAqT5wVjtUdgZscezgPHnzqB0h0+/mjC25hWBAQcnGMjHYDj1VeBGkcQiiUJGBgKo4AVWNd6PS3cvX215LaTEYzGcqw7mU8x4VPLO1USmOFO2BLFujIgRrrXbuKU46zrLZzHu7dp5YogmndHrnabbpHpu3PN1WI+rLZoJN0Z1y3lDxpY3AxgESyQHHiASvwqFN0c1WV2STSWXcMMyX0bH2Zjz8akm/BRwXkN6hZWVpedQbgXS7QwltbiNl48h2HP49tFujd9p2i9as3lyGQ8WmDbVHtJHxqJ0N6My2sVxDqFu7QSY2LczLKFxnOBtGM5+FE9Q6NWUSt5OrWzkFVaFyBx/V5fCqK1sm0g5dX0UtqrWriQSHzWHLHI/Hh7KHZH2qXaW8jLb2aYeQBUyq7R2ZOPeaf/2e/wDGz/3F/CrWxKMEkRnjIjUsxX6ozUi6Rdg611iUbTvY8OVBrjWruTzY2EKd0QxUCQvId8jMx+2TmsscEnuWjXL4lf8AIZe4tSrmEtMYxnPIU/pkhKksFCty254euh+maRqF6CLW1kKuMCRhtXGe8/dmrBY9D7uEbp70qfsQ+cPj+FM1GKIynKfZ1GAAB7fhSweO341yfSNQgDFWS4Xu9FvwNRjcGI7LiOSJv1xge/l8akLVErANNXAZ0COzMo5Ak4FeWXcfSpW4NzrkjmyAtsUcOhKsPrKcGpNvf6hbr9HOSnc/nU4AG8K7tzzphQxYdKirI99EyHtK5xRi11iwnOY3PsIb5Gqa0CtzUUxLbB/qg+ulcEOps1Ka8hsNFmvgQ6IpIPIZ7Bx7yRVD0G4ukbfNbl1Zi0kiMCMnmedD4BMlubfrH6ktuMe44J78VKjDDkzDxB40VBUc5stdo8sDz4h84zboy3Irxx4n7/CnX3SuHLbpDxy/L3VUopZYpEMbsMN38KPRXTTRhieIXj660YKRKbbGptRKzxgAY5H3/KiMeuTL6JI9VUnWi7tE0bFT1gP30cjOVznjQz97HwvRZrfpPNF6RJolB0pif9KMVSQa6pqKsqqNFh1mzm5ELUlZ7QrlRw8KzQOy+ixFTLDVJk+iYnvz93wNHkztGkLeQ7Dtf0BwXNCJrzyu4z2Ly9lVgapIJ49h5yxow7wzAffVg0S3E9y29vo1Pne+rwbaJzpFl0O12ZupV86UYQHsTv8Ab8qK9cn2h/dqKk4xjK4r29Ptfv76vxIWfO9h0JuHKtqF1HAh+og3t+APvqy6b0d0uycNb2yyyL/GTDeT6hyHsqW7sY8A8KejO1DksP6NeZLJKXbNihFewsqB6ZAb9U/Ku9XkYAzj7QqO7SSPmNtvrpsTykgb2J8TwFI9hHniGSe0+FRZbYMMNFuHcRmpsckkhQNtBccMcqdkiQDm27nz4V3XRzK3caHbN+iEkDfzbYHuPCh0+m3UA81lmXv9E/gatbkjO3hjnUVwrHLCmUmI4oqjS7G2zK0bdzjH7/GnkYFcg5PwqxG0ikTioK9xGaG3mlQ7x1RaJjy2nI9xqnITiyGGB510AU1cwy2y7iysvf20hJ9w3AHHjRsFEkAUsU2rhl4ZBpSmiAVgZU0Rjk6q3ck0MDnh4VJvG225HfT43sEloG6isziCRYwytIcAHw7fZmpljJdXNqZo7SZ4lOC8alxnwxzqBptsmoaraWc2RE8pDbDg42sT8sVpLLDplt1FtEAMbVA83FbFhWTbJc3HopUd7G27jxX0l7R66lpIrcs0vUrkTsRLGjn9ZQceruoVGqySYjLxjuBz86zz+H49Most9hXh30lAN/Ookqz28QkZkkU+BBqPFfB+KBs+IqPFoopWSNEuJptblhlIG25QqPAMD8l+daRYs8CqkY81huY4zis66KxibX76VhxSMOF7Mnh+PvrQYPMYNyJ57a0RdE3bDNvfbmwV++pPlY8PjUCBllGSvGpHUp9ke6q2LR//2Q=="
                  alt="Towel rack in bathroom"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-md-8">
              <div className="content-with-image">
                <h2 className="section-title">An ecosystem of towels</h2>
                <p className="intro-text common-Listing-text">
                  Racks or hooks that allow air to circulate around each towel
                  prolong their freshness. They dry quick and the need for
                  frequent washing is minimized.
                </p>

                <h2 className="section-title">Make your mop disappear</h2>
                <p className="intro-text common-Listing-text">
                  Having your cleaning tools organized makes them easier to both
                  use and return to. When they're not needed, close the curtain
                  and feel the peace of mind it brings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
