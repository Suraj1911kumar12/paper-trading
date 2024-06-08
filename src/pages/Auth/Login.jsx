import React, { useEffect, useState } from 'react';
import logo from '../../assests/images/Logo.png'; // Import your logo image
import { UseAuth } from '../../Context/AuthContext';
import Loader from '../../utils/Loader';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
function Login() {

    useEffect(() => {
        localStorage.clear()
    }, [])

    const auth = UseAuth()


    const [isVisible, setIsVisible] = useState(false)

    const [username, setUserName] = useState("admin@admin.com")
    const [password, setPassword] = useState("12345678")
    const handleSubmit = (e) => {
        e.preventDefault();
        auth.loginAction(username, password)
    }

    return (
        <div className={`flex justify-center items-center h-screen bg-back`}>
            <div className={`max-w-md w-full px-6 py-8 ${auth.isError === 404 && 'border-red-600 border-2'} bg-white shadow-md overflow-hidden sm:rounded-lg`}>
                {
                    auth.isLoading ? <Loader /> :
                        <>

                            <div className="flex justify-center mb-6">
                                <img className="h-12" src={logo} alt="Company Logo" />
                            </div>
                            <h2 className="text-center text-xl font-semibold text-gray-800 mb-6">Log in to your account</h2>
                            <div className='flex text-center'>

                                {
                                    auth.isError && auth.isError === 403 ? <span className='error'>Invalid Credentials</span> : auth.isError === 404 ? <span className='error'>Server Not Working</span> : null
                                }
                            </div>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
                                    <input value={username} onChange={(e) => setUserName(e.target.value)} placeholder='Email/username'
                                        type="email" id="email" name="email" autoComplete="email" required className={`mt-1 ${auth.isError === 403 ? ' border-2 border-red-600' : 'border-black border-b'} block w-full p-2
                 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`} />
                                </div>
                                <div className='relative'>
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                                    <input value={password} onChange={(e) => setPassword(e.target.value)} type={isVisible ? 'password' : 'text'}
                                        placeholder='password' id="password" name="password" autoComplete="current-password" required
                                        className={`mt-1 ${auth.isError === 403 ? ' border-2 border-red-600' : 'border-black border-b'} relative  block w-full p-2 rounded-md shadow-sm focus:ring-blue-500
                focus:border-blue-500 sm:text-sm`} />
                                    <div onClick={() => setIsVisible(!isVisible)} className='absolute top-[55%] right-2 cursor-pointer'>
                                        {
                                            isVisible ?
                                                <BsEye />
                                                :
                                                <BsEyeSlash />
                                        }
                                    </div>
                                </div>
                                <div>
                                    <button type="submit"
                                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                        Log in
                                    </button>
                                </div>
                            </form>
                        </>
                }
            </div>
        </div>
    );
}

export default Login;