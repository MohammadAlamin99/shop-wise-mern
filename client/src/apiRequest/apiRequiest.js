import axios from "axios";

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

export async function userSignUpRequest(fullName, userName, email, password) {
  try {
    let reqBody = {
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
    return result;
  } catch (e) {
    return [];
  }
}

// invoice create

export async function invoiceCreateRequest(order_id, full_name, phone_number, email, full_address, country, payment_method, order_summary, subtotal, shipping_cost, total, order_status) {
  try {
    let reqbody = { order_id: order_id, full_name: full_name, phone_number: phone_number, email: email, full_address: full_address, country: country, payment_method: payment_method, order_summary:order_summary, subtotal: subtotal, shipping_cost: shipping_cost, total: total, order_status: order_status };
    let result = await axios.post(
      "http://localhost:5000/api/v1/createInvoice",
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
