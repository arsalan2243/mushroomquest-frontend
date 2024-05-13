import axios from "axios";
export const BASE_URL = "https://mushroomquest-59bc7238e6e8.herokuapp.com/api/v1"

const axiosWithAuth = () => {
    const token = localStorage.getItem("token");
    return axios.create(
        {
            headers: {
                authorization: token
            },
            baseURL: BASE_URL
        }
    )
}

export default axiosWithAuth;