import { create } from "zustand";

const useSignUpStore = create((set) => ({
    users:[],

    authorised: false,

    createUser: (newUser) => 
        set((state) => ({
            users: [...state.users, newUser]
        })),
    
}))

export default useSignUpStore;