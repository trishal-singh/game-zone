import axios from "axios";


 export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key : "8d263c470b654381b4816e6409522e3f"
    }
})