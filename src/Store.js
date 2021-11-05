import create from "zustand";
import {devtools} from "zustand/middleware";

const useStore = create(devtools((set) => ({
  dresseur: {},
  team: [],
  connected: false,
  register: (person) => set((state) => ({ dresseur: person })),
  connection: () => set((state) => ({ connected: true })),
  addToTeam: (pokemon) => set((state) => (state.team.push(pokemon)))
})));

export default useStore;
