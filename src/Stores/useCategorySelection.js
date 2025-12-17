import { create } from 'zustand';
import challenagesArray from '../data/challenagesArray';

const useCategorySelection = create((set) => ({
    unchangedList: challenagesArray,

    challenageList: challenagesArray,
    
    chanageCategory: (category) => set((state) => ({ challenageList: state.unchangedList.filter((item) => item.category === category)})),
}))

export default useCategorySelection