import { create } from 'zustand';

const useUserStore = create((set) => ({
    user: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    },

    setUser: (userData) => 
        set({
            user: userData,
        }),
}))

export default useUserStore;