import { generateFixedHorse } from "@/utils/horse-generator";

export default {
  generateHorses({ commit }) {
    const horses = Array.from({ length: 20 }, (_, i) =>
      generateFixedHorse(i + 1)
    );

    commit("GENERATE_HORSES", horses);
  },
};
