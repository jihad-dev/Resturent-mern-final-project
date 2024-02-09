import axios from "axios";

const axiosPublic = axios.create({
    baseURL: "https://bistroo-boss-server.vercel.app",
})
const UseAxiosPublic = () => {
    return axiosPublic;
};

export default UseAxiosPublic;