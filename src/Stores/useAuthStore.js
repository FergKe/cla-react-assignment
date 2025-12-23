import { create } from 'zustand';

const useAuthStore = create((set) => ({
    isAuthorised: false,

    toggleAuthUser: () => set((state) => ({isAuthorised: !state.isAuthorised})),

    activeUser: {
        firstName: "",
        lastName: "",
        password: "",
        email: ""
    },
    
    setActiveUser: (user) => 
        set((state) => ({
            activeUser: {...state.activeUser, ...user}
    }))

}))

export default useAuthStore