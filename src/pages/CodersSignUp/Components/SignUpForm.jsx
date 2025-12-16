import { Link } from "react-router-dom";


export default function SignUpForm () {

    return (
        <div className=" bg-white p-8 rounded-xl drop-shadow-xl font-noto">
            <h3 className="text-center text-2xl text-cla-primary mb-5 ">Join Coders Now!</h3>
            <form action="" className="flex flex-col">
                <input
                    type="text"
                    name="first-name"
                    placeholder="First name"
                    className="bg-cla-main-body p-3 font-noto text-white w-96 h-12 text-sm rounded-lg mb-4"
                />
                <input
                    type="text"
                    name="last-name"
                    placeholder="Last Name"
                    className="bg-cla-main-body p-3 font-noto text-white w-96 h-12 text-sm rounded-lg mb-4"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email" 
                    className="bg-cla-main-body p-3 font-noto text-white w-96 h-12 text-sm rounded-lg mb-4"
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="bg-cla-main-body p-3 font-noto text-white w-96 h-12 text-sm rounded-lg mb-4"
                />
                <button type="submit" className="bg-blue-500 h-12 rounded-lg text-white">
                    Sign Up
                </button>
            </form>
            <p className="text-center">Already have an Account? <Link to='/' className="text-cla-primary">Login</Link></p>
        </div>
    )
}