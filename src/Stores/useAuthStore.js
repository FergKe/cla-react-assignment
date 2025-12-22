import { create } from 'zustand';

const useAuthStore = create((set) => ({
    isAuthorised: false,

    toggleAuthUser: () => set((state) => ({isAuthorised: !state.isAuthorised})),

    signInUser: {
        email: "",
        passowrd: "",
    },

    activeUser: {
        first_name: "",
        last_name: "",
        password: "",
        email: ""
    },

    updateSignInUser: (field, value) =>
        set((state) => ({
            signInUser: {
                ...state.signInUser,
                [field]: value
            },
            
        })),
    
    setActiveUser: (user) => 
        set((state) => ({
            activeUser: {...state.activeUser, ...user}
    }))

}))

export default useAuthStore