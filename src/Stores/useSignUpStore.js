import { create } from "zustand";

const useSignUpStore = create((set) => ({
    users:[],
    signUpUser: {
        first_name: "",
        last_name: "",
        password: "",
        email: "",
    },

    authorised: false,

    updateUserData: (field, value) =>
        set((state) => ({
            signUpUser: {
                ...state.signUpUser,
                [field]: value
            },
            
        })),

    createUser: (newUser) => 
        set((state) => ({
            users: [...state.users, newUser]
        })),
    
}))

export default useSignUpStore;