import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";
const SocialLogin = () => {
    const { googleSingIn } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate =useNavigate()
    const handleGoogleSingIn = () => {
        googleSingIn()
            .then(result => {
                console.log(result.user)
                const authInfo={
                    email:result.user?.email,
                    name:result.user?.displayName,
                }
                axiosPublic.post('/user', authInfo)
                .then(res=>{
                    console.log(res.data);
                    navigate('/')
                })
            })
    }
    return (
        <div>
            <button onClick={handleGoogleSingIn} className="btn btn-outline btn-warning"><FcGoogle /></button>
        </div>
    );
};

export default SocialLogin;