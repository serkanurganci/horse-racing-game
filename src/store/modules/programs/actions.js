import { raceLengths } from "@/utils/constants/horses";

export default {
  generateRaces({ commit, rootState }) {
    const horses = rootState.horses.allHorses;
    const races = {};

    raceLengths.forEach((length) => {
      const shuffled = [...horses].sort(() => Math.random() - 0.5);
      races[length] = shuffled.slice(0, 10).map((horse, index) => ({
        position: index + 1,
        name: horse.name,
        color: horse.color,
      }));
    });

    commit("SET_RACES", races);
  },
};
