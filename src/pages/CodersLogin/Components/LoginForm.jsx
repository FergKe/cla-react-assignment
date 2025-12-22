import { Link, useNavigate } from 'react-router-dom';
import useAuthStore from '../../../Stores/useAuthStore';
import useSignUpStore from '../../../Stores/useSignUpStore';

export default function SignUpForm () {
    const users = useSignUpStore((state) => state.users);
    const toggleAuthUser = useAuthStore((state) => state.toggleAuthUser);
    const signInUser = useAuthStore((state) => state.signInUser);
    const updateSignInUser = useAuthStore((state) => state.updateSignInUser);
    const setActiveUser = useAuthStore((state) => state.setActiveUser);
    const navigate = useNavigate();

    const handleSubmit = (signInUser, users, e) => {
        e.preventDefault();
        
        const user = users.find((u) => u.email === signInUser.email);

        if ( !user ) {
            return console.log("User not found")
        }

        if ( user.password === signInUser.password ) {
            toggleAuthUser();
            setActiveUser(user);
            console.log(user)
            navigate('/challenages');
        }
        
    }

    return (
        <div className=" bg-white p-8 rounded-xl drop-shadow-xl font-noto">
            <h3 className="text-center text-2xl text-cla-primary mb-5 ">Join Coders Now!</h3>
            <form action="" className="flex flex-col">
                <input
                    type="email"
                    name="email"
                    placeholder="Email" 
                    className="bg-cla-main-body p-3 font-noto text-white w-96 h-12 text-sm rounded-lg mb-4"
                    onChange={(e) => {updateSignInUser("email", e.target.value)}}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="bg-cla-main-body p-3 font-noto text-white w-96 h-12 text-sm rounded-lg mb-4"
                    onChange={(e) => {updateSignInUser("password", e.target.value)}}
                />
                <button 
                    type="submit" 
                    className="bg-blue-500 h-12 rounded-lg text-white"
                    onClick={(e) => handleSubmit(signInUser, users, e)}
                >
                    Sign Up
                </button>
            </form>
            <p className="text-center text-black">New to CodeCLA? <Link to='/signup' className="text-cla-primary">Signup</Link></p>
        </div>
    )
}