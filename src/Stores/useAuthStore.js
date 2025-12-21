import { create } from 'zustand';

const useAuthStore = create((set) => ({
    isAuthorised: false,

    toggleAuthUser: () => set((state) => ({isAuthorised: !state.isAuthorised})),

    signInUser: {
        email: "",
        passowrd: "",
    },

    updateSignInUser: (field, value) =>
        set((state) => ({
            signInUser: {
                ...state.signInUser,
                [field]: value
            },
            
        })),

}))

export default useAuthStore