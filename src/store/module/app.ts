import { defineStore } from "pinia"
import { store } from '/@/store'

interface AppState {
  count: number
}
export const useAppStore = defineStore({
  id: 'app',
  state: (): AppState => ({
    count: 0
  }),
  actions: {
    setCount(value: number): void{
      this.count = value
    }
  },
});

// Need to be used outside the setup
export function useAppStoreWithOut() {
  return useAppStore(store);
}
