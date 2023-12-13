import '../Login/login.css'
import login from '../../assets/others/authentication2.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import {  useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import SocialLogin from '../../components/socialLogin/SocialLogin';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const {logIn} = useAuth()
    const captchaRef = useRef(null)
    const [disable, setDisable] = useState(true)
    const location = useLocation();
    const navigate = useNavigate()
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLoginForm = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        logIn(email, password)
            .then(result => {
                console.log(result.user);
                alert('loging Succefully')
                navigate(location?.state?.from.pathname || '/');

                console.log('state in the location', location.state);
            })
            .catch(error => {
                console.log(error);
            })
        // form.reset('')

    }
    const handleValidateCaptcha = () => {
        const user_captcha_value = captchaRef.current.value;
        console.log(user_captcha_value);
        if (validateCaptcha(user_captcha_value) === true) {
            setDisable(false)
        }
        else {
            setDisable(true)
        }
    }
    return (
        <div className='logingBg flex justify-center lg:h-screen  pt-8 pb-8
         items-center w-full '>

            <div className=" lg:p-14   p-3 logingBg md:w-[80%] shadow-2xl ">
                <div className='gap-14 md:flex items-center justify-center'>
                    <div className='hidden lg:flex'>
                        <img className='w-[600px] object-cover h-[450px]' src={login} alt="" />
                    </div>
                    <form onSubmit={handleLoginForm} className='md:w-[600px] mx-auto'>
                        <h1 className='text-center text-4xl font-semibold'>Login</h1>
                        <div className="form-control">

                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Enter your email" className="input input-bordered" required />
                        </div>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Enter your password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control w lg:w-full">
                            <label className="label ">
                                <span className="label-text"><LoadCanvasTemplate /></span>
                            </label>
                            <input type="text" ref={captchaRef} name='captcha' placeholder="Type here" className="input input-bordered" required /><br />
                            <button onClick={handleValidateCaptcha} className='btn border-[#D1A054B2] text-black  btn-outline hover:bg-[#D1A054B2]  '>Validate</button>

                        </div>
                        <div className="form-control w lg:w-full mt-6">
                            <input disabled={disable} className='btn rounded-lg text-white   bg-[#D1A054B2] hover:bg-[#D1A054B2]' type="submit" value="Sign In" />
                        </div>
                    </form>
                </div>
                <div className='flex flex-col items-center'>
                    <SocialLogin></SocialLogin>
                    <p>New here? <Link to='/singUp'>Create a New Account</Link> </p>
                </div>
            </div>



        </div>

    );
};

export default Login;