import { useQuery } from "@tanstack/react-query";
import useAxiosSicure from "./useAxiosSicure";
import useAuth from "./useAuth";


const useCart = () => {
    const axiosSecure = useAxiosSicure();
    const { user } = useAuth()
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/carts?email=${user?.email}`);
            return res.data;
        }
    })
    return [cart, refetch]
};

export default useCart;