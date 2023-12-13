import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})
const useAxiosSicure = () => {
    axiosSecure.interceptors.request.use(function(config){
        const token = localStorage.getItem
        console.log('requesr stopped by interseptor');
        config.headers.authorization = `Bearer ${token}`;
        return config
    },function(error){
        return Promise.reject(error);
    })
    return axiosSecure
};

export default useAxiosSicure;