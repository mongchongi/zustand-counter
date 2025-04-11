import { create } from 'zustand';

const counterStore = create((set) => ({
  count: 0,
  reset: () => set(() => ({ count: 0 })),
  increase: (number) => set((state) => ({ count: state.count + number })),
  decrease: (number) => set((state) => ({ count: state.count - number })),
}));

export default counterStore;
