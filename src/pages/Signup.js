import React, { useEffect, useState } from 'react';
import { FaChessRook, FaEye, FaEyeSlash } from 'react-icons/fa';

const Signup = () => {

    const [showPass, setShowPass] = useState(false);
    const [mail, setMail] = useState('');
    const [pass, setPass] = useState('');
    const [enableSignup, setEnableSignup] = useState(false);

    const handleShowPass = () => {
        setShowPass(!showPass);
    };

    useEffect(() => {
        if (mail.length > 0 && pass.length > 8) {
            setEnableSignup(true);
        } else {
            setEnableSignup(false);
        }
    }, [mail, pass]);

    return (
        <div className='w-full min-h-screen max-h-fit bg-black text-white flex justify-center items-center overflow-hidden'>
            <div className="relative w-full max-w-screen-2xl min-h-screen flex flex-col justify-center items-center">
                <div className={"absolute top-[50%] right-[50%] translate-x-[50%] -translate-y-[50%] opacity-100 transition-all duration-500 border border-white rounded-md p-4"}>
                    <div className="flex flex-col justify-center items-center">
                        <div className="logo flex justify-center items-center font-bold text-2xl mb-4">
                            <FaChessRook className='mr-1' />CM
                        </div>
                        <h1 className='font-bold text-2xl'>
                            Sign up and start playing
                        </h1>
                    </div>
                    <div className="flex max-md:flex-col justify-center items-center mt-8">
                        <form action="POST" className="flex flex-col justify-center items-center">
                            <div className="flex flex-col justify-center items-start m-3">
                                <label htmlFor="email" className="text-base">
                                    Username
                                </label>
                                <input
                                    type="text"
                                    placeholder='username'
                                    className="w-60 bg-black border-b border-gray focus:outline-none active:outline-none focus:border-white transition-colors duration-500 py-3"
                                    onChange={e => setMail(e.target.value)}
                                />
                            </div>
                            <div className="flex flex-col justify-center items-start m-3">
                                <label htmlFor="email" className="text-base">
                                    Email
                                </label>
                                <input
                                    type="text"
                                    placeholder='email'
                                    className="w-60 bg-black border-b border-gray focus:outline-none active:outline-none focus:border-white transition-colors duration-500 py-3"
                                    onChange={e => setMail(e.target.value)}
                                />
                            </div>
                            <div className="flex flex-col justify-center items-start m-3 relative">
                                <label htmlFor="password" className="text-base">
                                    Password
                                </label>
                                <input
                                    type={showPass ? "text" : "password"}
                                    placeholder='Password'
                                    className="w-60 bg-black border-b border-gray focus:outline-none active:outline-none focus:border-white transition-colors duration-500 py-3"
                                    onChange={(e) => setPass(e.target.value)}
                                />
                                {showPass ? <FaEyeSlash className='absolute right-0 bottom-4 cursor-pointer' onClick={handleShowPass} /> : <FaEye className='absolute right-0 bottom-4 cursor-pointer' onClick={handleShowPass} />}
                            </div>
                            <button className={enableSignup ? "w-60 m-3 bg-white text-black transition-all duration-500 p-3 cursor-pointer" : "w-60 m-3 bg-gray text-white transition-all duration-500 p-3 cursor-not-allowed"} disabled={!enableSignup}>
                                Signup
                            </button>
                        </form>
                    </div>
                    <div className="w-full mt-5 text-base text-white flex justify-center items-center">
                        <p>
                            Already registered? <a href="/" className="border-b-2 border-white ">Log in</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
