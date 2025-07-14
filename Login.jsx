import { Link } from "react-router-dom";

const Login = () => {
    return (
        <>
        <div className="Flex items-center justify-between px-6 md:px-[200px] py-4">
        <h1 className="text-lg md:text-xl font-extrabold"><Link to="/">Day in the Life Blog</Link></h1>
        <h3><Link to="/register">Register</Link></h3>
        
        </div>
        <div className="w-full flex justify-center items-center h-[80vh]">
            <div className="flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]">
                <h1 className="text-xl font bold text-left">Login</h1>
                <input className="w-full px-4 py-2 border-2 border-black outline-0" type="text" placeholder="Email" />
                <input className="w-full px-4 py-2 border-2 border-black outline-0" type="password" placeholder="Password" />
                <button className="w-full px-4 py-4 text-lg font-bold text-white bg-black rounded-lg hover:bg-gray-500 hover:text-back">Login</button>
                <div className="flex justify-centre items-centre space-x-4">
                    <p>New here?</p>
                    <p className="text-gray-500 hover:text-black"><Link to="/register">Register</Link></p>
                </div>
            </div>
        </div>
        </>
       
    )
}

export default Login