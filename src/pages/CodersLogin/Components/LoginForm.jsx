import { Link, useNavigate } from 'react-router-dom';
import useAuthStore from '../../../Stores/useAuthStore';
import useSignUpStore from '../../../Stores/useSignUpStore';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '../../../forms/loginSchema';

export default function SignUpForm () {
    const users = useSignUpStore((state) => state.users);
    const toggleAuthUser = useAuthStore((state) => state.toggleAuthUser);
    const activeUser = useAuthStore((state) => state.activeUser)
    const setActiveUser = useAuthStore((state) => state.setActiveUser);
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm({resolver: zodResolver(loginSchema)})
    const onSubmit = (data) => {
        console.log(data);
        const findUser = users.find((u) => u.email === data.email);

        if ( !findUser ) {
            return console.log("User not found");
        };

        if ( findUser.password === data.password ) {
            toggleAuthUser();
            setActiveUser(findUser);
            console.log(findUser, activeUser);
            navigate('/challenages');
        };

    };

    return (
        <div className=" bg-white p-8 rounded-xl drop-shadow-xl font-noto">
            <h3 className="text-center text-2xl text-cla-primary">Join Coders Now!</h3>
            <form action="" className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
                <input
                    {...register('email')}
                    type="email"
                    name="email"
                    placeholder="Email" 
                    className="bg-cla-main-body p-3 font-noto text-white w-96 h-12 text-sm rounded-lg mt-4"
                />
                {errors.email && (<p className="text-red-500 text-sm px-4">{errors.email.message}</p>)}
                <input
                {...register('password')}
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="bg-cla-main-body p-3 font-noto text-white w-96 h-12 text-sm rounded-lg mt-4"
                />
                {errors.password && (<p className="text-red-500 text-sm px-4">{errors.password.message}</p>)}
                <button 
                    type="submit" 
                    className="bg-blue-500 h-12 rounded-lg text-white mt-4"
                >
                    Sign Up
                </button>
            </form>
            <p className="text-center text-black">New to CodeCLA? <Link to='/signup' className="text-cla-primary">Signup</Link></p>
        </div>
    )
}