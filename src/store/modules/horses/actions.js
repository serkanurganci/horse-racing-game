import { generateRandomHorse } from "@/utils/horse-generator";

export default {
  generateHorses({ commit, state }) {
    const numberOfHorses = Math.floor(Math.random() * 20) + 1;
    const horses = Array.from({ length: numberOfHorses }, (_, i) =>
      generateRandomHorse(i + 1)
    );

    commit("GENERATE_HORSES", horses);
  },
};
