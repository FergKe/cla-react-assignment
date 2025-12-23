import { Link, useNavigate } from "react-router-dom";
import useSignUpStore from "../../../Stores/useSignUpStore";
import { signUpSchema } from '../../../forms/signUpSchema';
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";



export default function SignUpForm () {
    const createUser = useSignUpStore((state) => state.createUser);
    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm({resolver: zodResolver(signUpSchema)});
    const onSubmit = (data) => {
        console.log(data);
        createUser(data)
        navigate('/')
    }

    return (
        <div className=" bg-white p-8 rounded-xl drop-shadow-xl font-noto">
            <h3 className="text-center text-2xl text-cla-primary ">Join Coders Now!</h3>
            <form action="" className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
                <input
                    {...register("firstName")}
                    type="text"
                    name="firstName"
                    placeholder="First name"
                    className="bg-cla-main-body p-3 font-noto text-white w-96 h-12 text-sm rounded-lg mt-5"
                />
                {errors.firstName && (<p className="text-red-500 text-sm px-4">{errors.firstName.message}</p>)}
                <input
                    {...register("lastName")}
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    className="bg-cla-main-body p-3 font-noto text-white w-96 h-12 text-sm rounded-lg mt-4"
                />
                {errors.lastName && (<p className="text-red-500 text-sm px-4">{errors.lastName.message}</p>)}
                <input
                    {...register("email")}
                    type="email"
                    name="email"
                    placeholder="Email" 
                    className="bg-cla-main-body p-3 font-noto text-white w-96 h-12 text-sm rounded-lg mt-4"
                />
                {errors.email && (<p className="text-red-500 text-sm px-4">{errors.email.message}</p>)}
                <input
                    {...register("password")}
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="bg-cla-main-body p-3 font-noto text-white w-96 h-12 text-sm rounded-lg mt-4"
                />
                {errors.password && (<p className="text-red-500 text-sm px-4">{errors.password.message}</p>)}
                <button 
                    type=""
                    className="bg-blue-500 h-12 rounded-lg text-white mt-4"
                >
                    Sign Up
                </button>
            </form>
            <p className="text-center text-black">Already have an Account? <Link to='/' className="text-cla-primary">Login</Link></p>
        </div>
    )
}