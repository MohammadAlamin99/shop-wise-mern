import axios from "axios"

export async function allProductRequiest(){
    try {
        let result = await axios.get('http://localhost:5000/api/v1/allProduct');
        let data = result.data.data;
        return data
    } catch (e) {
        return[]
    }
}