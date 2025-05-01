import axios from "axios";
import unauth from "../utility/unauthorized";
const verifyUser = localStorage.getItem("userToken");

export async function allProductRequiest() {
  try {
    let result = await axios.get("http://localhost:5000/api/v1/allProduct");
    let data = result.data.data;
    return data;
  } catch (e) {
    return [];
  }
}

export async function allCetegoryRequest() {
  try {
    let result = await axios.get("http://localhost:5000/api/v1/category");
    let data = result.data["data"];
    return data;
  } catch (e) {
    return [];
  }
}

// all collection list
export async function allCollectionListRequest() {
  try {
    let result = await axios.get("http://localhost:5000/api/v1/collectionList");
    let data = result.data["data"];
    return data;
  } catch (e) {
    return [];
  }
}

export async function productByCollectionRequest(id) {
  try {
    let result = await axios.get(
      "http://localhost:5000/api/v1/prodcutByCollection/" + id
    );
    let data = result?.data["data"];
    return data;
  } catch (e) {
    return [];
  }
}

export async function productByCategoryRequest(id) {
  try {
    let result = await axios.get(
      "http://localhost:5000/api/v1/productByCategory/" + id
    );
    let data = result?.data["data"];
    return data;
  } catch (e) {
    return [];
  }
}

export async function productDetailsRequest(id) {
  try {
    let result = await axios.get(
      "http://localhost:5000/api/v1/productDetails/" + id
    );
    let data = result.data["data"];
    return [data];
  } catch (e) {
    return [];
  }
}

// User request

export async function userSignUpRequest(
  image,
  fullName,
  userName,
  email,
  password
) {
  try {
    let reqBody = {
      image: image,
      fullName: fullName,
      userName: userName,
      email: email,
      password: password,
    };
    let result = await axios.post(
      "http://localhost:5000/api/v1/registration",
      reqBody
    );
    return [result];
  } catch (e) {
    return [];
  }
}
export async function SignInRequest(email, password) {
  try {
    let reqBody = { email: email, password: password };
    let result = await axios.post(
      "http://localhost:5000/api/v1/login",
      reqBody
    );
    return [result];
  } catch (e) {
    return [];
  }
}

export async function userGetRequest() {
  try {
    let result = await axios.get("http://localhost:5000/api/v1/userDetails", {
      headers: {
        token: verifyUser,
      },
    });
    unauth(result.data.status);
    return result;
  } catch (e) {
    return [];
  }
}

export async function updateUserProfileRequest(
  image,
  fullName,
  userName,
  email,
  oldPassword,
  newPassword
) {
  try {
    let formData = new FormData();
    formData.append("fullName", fullName);
    formData.append("userName", userName);
    formData.append("email", email);

    if (image) {
      formData.append("image", image);
    }

    if (newPassword) {
      if (!oldPassword) {
        return { status: "fail", message: "Old password is required" };
      }
      formData.append("oldPassword", oldPassword);
      formData.append("password", newPassword);
    }

    let result = await axios.post(
      "http://localhost:5000/api/v1/updateProfile",
      formData,
      {
        headers: {
          token: verifyUser,
        },
      }
    );
    unauth(result.data.status);
    return result;
  } catch (e) {
    return { status: "fail", message: "Something went wrong" };
  }
}

// cart item

export async function cartCreateRequest(productID, qty, color, size) {
  try {
    let reqbody = { productID: productID, qty: qty, color: color, size: size };
    let result = await axios.post(
      "http://localhost:5000/api/v1/CartCreate",
      reqbody,
      {
        headers: {
          token: verifyUser,
        },
      }
    );
    unauth(result.data.status);
    return [result];
  } catch (e) {
    return [];
  }
}

export async function getAllCartRequest() {
  try {
    let result = await axios.get("http://localhost:5000/api/v1/getCart", {
      headers: {
        token: verifyUser,
      },
    });
    // unauth(result.data.status)
    return result;
  } catch (e) {
    return [];
  }
}

export async function removeCartRequest(productID) {
  try {
    let reqbody = { productID: productID };
    let result = await axios.delete("http://localhost:5000/api/v1/removeCart", {
      data: reqbody,
      headers: {
        token: verifyUser,
      },
    });
    unauth(result.data.status);
    return result;
  } catch (e) {
    return [];
  }
}

// invoice create

export async function invoiceCreateRequest(
  order_id,
  full_name,
  phone_number,
  email,
  full_address,
  country,
  payment_method,
  order_summary,
  subtotal,
  shipping_cost,
  total,
  order_status
) {
  try {
    let reqbody = {
      order_id: order_id,
      full_name: full_name,
      phone_number: phone_number,
      email: email,
      full_address: full_address,
      country: country,
      payment_method: payment_method,
      order_summary: order_summary,
      subtotal: subtotal,
      shipping_cost: shipping_cost,
      total: total,
      order_status: order_status,
    };
    let result = await axios.post(
      "http://localhost:5000/api/v1/createInvoice",
      reqbody,
      {
        headers: {
          token: verifyUser,
        },
      }
    );
    unauth(result.data.status);
    return result;
  } catch (e) {
    return [];
  }
}

export async function invoiceGetRequest() {
  try {
    let result = await axios.get("http://localhost:5000/api/v1/getInvoice", {
      headers: {
        token: verifyUser,
      },
    });
    unauth(result.data.status);
    return result;
  } catch (e) {
    return [];
  }
}

export async function getOrderListRequest() {
  try {
    let result = await axios.get("http://localhost:5000/api/v1/orderList", {
      headers: {
        token: verifyUser,
      },
    });
    unauth(result.data.status);
    return result;
  } catch (e) {
    return [];
  }
}

// wishlist

export async function getWishListRequest() {
  try {
    let result = await axios.get("http://localhost:5000/api/v1/wishList", {
      headers: {
        token: verifyUser,
      },
    });
    return result;
  } catch (e) {
    return [];
  }
}

export async function removeWishListRequest(productID) {
  try {
    let reqbody = { productID: productID };
    let result = await axios.delete("http://localhost:5000/api/v1/deleteWish", {
      data: reqbody,
      headers: {
        token: verifyUser,
      },
    });
    return result;
  } catch (e) {
    return [];
  }
}

export async function addwishListRequest(productID) {
  try {
    let reqbody = { productID: productID };
    let result = await axios.post(
      "http://localhost:5000/api/v1/createWishlist",
      reqbody,
      {
        headers: {
          token: verifyUser,
        },
      }
    );
    return result;
  } catch (e) {
    return [];
  }
}

// review
export async function createReveiwRequest(userID, productID, rating, comment) {
  try {
    const reqbody = {
      userID: userID,
      productID: productID,
      rating: rating,
      comment: comment,
    };
    let result = await axios.post(
      "http://localhost:5000/api/v1/createReview",
      reqbody,
      {
        headers: {
          token: verifyUser,
        },
      }
    );
    unauth(result.data.status);
    return result;
  } catch (e) {
    return [];
  }
}
export async function getReviewRequest(userID) {
  try {
    const reqbody = {
      userID: userID,
    };
    let result = await axios.post(
      "http://localhost:5000/api/v1/getReview",
      reqbody
    );
    return result;
  } catch (e) {
    return [];
  }
}

// search api fatch
export async function searchRequest(keyword) {
  try {
    let result = await axios.get(
      "http://localhost:5000/api/v1/search/" + keyword
    );
    return result;
  } catch (e) {
    return [];
  }
}
