import { generateRandomHorse } from "@/utils/horse-generator";

export default {
  GENERATE_HORSES(state) {
    state.allHorses = Array.from({ length: 20 }, (_, i) =>
      generateRandomHorse(i + 1)
    );
  },
};
