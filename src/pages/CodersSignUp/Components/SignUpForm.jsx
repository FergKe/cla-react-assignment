import { Link, useNavigate } from "react-router-dom";
import useSignUpStore from "../../../Stores/useSignUpStore";
import { signUpSchema } from '../../../forms/signupSchema';


export default function SignUpForm () {
    const user = useSignUpStore((state) => state.signUpUser);
    const updateUserData = useSignUpStore((state) => state.updateUserData);
    const createUser = useSignUpStore((state) => state.createUser);
    const navigate = useNavigate()

    const handleSubmit = (user, e) => {
        e.preventDefault()
        const valid = signUpSchema.safeParse(user);

        if ( !valid.success ) {
            const fieldErrors = valid.error.flatten().fieldErrors;
            console.log(fieldErrors)
        } else {
            createUser(user)
            navigate('/')   
        }
        
    }

    return (
        <div className=" bg-white p-8 rounded-xl drop-shadow-xl font-noto">
            <h3 className="text-center text-2xl text-cla-primary mb-5 ">Join Coders Now!</h3>
            <form action="" className="flex flex-col">
                <input
                    type="text"
                    name="first-name"
                    placeholder="First name"
                    className="bg-cla-main-body p-3 font-noto text-white w-96 h-12 text-sm rounded-lg mb-4"
                    onChange={(e) => {updateUserData("first_name", e.target.value)}}
                />
                <input
                    type="text"
                    name="last-name"
                    placeholder="Last Name"
                    className="bg-cla-main-body p-3 font-noto text-white w-96 h-12 text-sm rounded-lg mb-4"
                    onChange={(e) => updateUserData("last_name", e.target.value)}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email" 
                    className="bg-cla-main-body p-3 font-noto text-white w-96 h-12 text-sm rounded-lg mb-4"
                    onChange={(e) => updateUserData("email", e.target.value)}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="bg-cla-main-body p-3 font-noto text-white w-96 h-12 text-sm rounded-lg mb-4"
                    onChange={(e) => updateUserData("password", e.target.value)}
                />
                
                <button 
                    type=""
                    className="bg-blue-500 h-12 rounded-lg text-white"
                    onClick={(e) => {handleSubmit(user, e), console.log(user)}}
                >
                    Sign Up
                </button>
            </form>
            <p className="text-center text-black">Already have an Account? <Link to='/' className="text-cla-primary">Login</Link></p>
        </div>
    )
}