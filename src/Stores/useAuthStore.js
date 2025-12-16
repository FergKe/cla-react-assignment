import { create } from "zustand";

const useAuthStore = create((set) => ({
    users:[],
    signUp: (username, password) => set({}),
    user: null,
    isAuthenticated: false,
    setUser: (userData) => set({ user:userData, isAuthenticated: true}),
}))

export default useAuthStore;