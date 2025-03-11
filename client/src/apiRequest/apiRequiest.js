import axios from "axios"

export async function allProductRequiest(){
    try {
        let result = await axios.get('http://localhost:5000/api/v1/allProduct');
        let data = result.data.data;
        return data;
    } catch (e) {
        return[]
    }
}


export async function allCetegoryRequest(){
    try {
        let result = await axios.get('http://localhost:5000/api/v1/category');
        let data = result.data['data'];
        return data;
    } catch (e) {
       return[] 
    }
}

export async function productDetailsRequest(id) {
    try {
        let result = await axios.get('http://localhost:5000/api/v1/productDetails/'+id);
        let data = result.data['data'];
        return[data]
    } catch (e) {
        return[]
    }
}

// User request

export async function userSignUpRequest(fullName, userName, email, password){
    try {
        let reqBody = {fullName:fullName, userName:userName, email:email, password:password};
        let result = await axios.post('http://localhost:5000/api/v1/registration', reqBody);
        return[result];
    } catch (e) {
        console.log(e)   
    return [];
    }

}