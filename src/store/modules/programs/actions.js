import { raceLengths } from "@/utils/constants/horses";
import { generateRandomizedHorse } from "@/utils/horse-generator";

export default {
  generateRaces({ commit, rootState }) {
    const horses = rootState.horses.allHorses;
    const races = {};

    raceLengths.forEach((length) => {
      const selectedHorses = [...horses]
        .sort(() => Math.random() - 0.5)
        .slice(0, 10);

      races[length] = selectedHorses.map((horse, index) => {
        const raceHorse = generateRandomizedHorse(horse.id);
        return {
          position: index + 1,
          name: horse.name,
          color: horse.color,
          condition: raceHorse.condition,
        };
      });
    });

    commit("SET_RACES", races);
  },
};
