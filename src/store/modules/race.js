const horseNames = [
  "Bold Pilot",
  "Karayel",
  "Turbo",
  "Serhanbey",
  "Yavuzca",
  "Ribella",
  "Haberbatur",
  "Altıntaş",
  "Bartrobel",
  "Kafkaslı",
  "Tamerinoğlu",
  "Dedemir",
  "Sabanur",
  "Özgünhan",
  "Ateştopu",
  "Sakarya",
  "Yelhan",
  "Demirkır",
  "Kırat",
  "Gökhan",
];

const horseColors = [
  "Red",
  "Blue",
  "Green",
  "Yellow",
  "Purple",
  "Orange",
  "Black",
  "Pink",
  "Gray",
  "Brown",
];

function generateRandomHorse(id) {
  return {
    id,
    name: horseNames[id - 1],
    condition: Math.floor(Math.random() * 100) + 1,
    color: horseColors[id % horseColors.length],
  };
}

export default {
  namespaced: true,
  state: () => ({
    allHorses: [],
    raceRounds: [],
    currentRound: 0,
    results: [],
  }),
  mutations: {
    GENERATE_HORSES(state) {
      state.allHorses = Array.from({ length: 20 }, (_, i) =>
        generateRandomHorse(i + 1)
      );
    },
    GENERATE_RACE_PROGRAM(state) {
      const lengths = [1200, 1400, 1600, 1800, 2000, 2200];
      state.raceRounds = lengths.map(() => {
        const shuffled = [...state.allHorses].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 10);
      });
      state.results = [];
      state.currentRound = 0;
    },
    ADD_ROUND_RESULT(state, result) {
      state.results.push(result);
      state.currentRound++;
    },
    RESET_RACE(state) {
      state.raceRounds = [];
      state.results = [];
      state.currentRound = 0;
    },
  },
  actions: {
    generateHorses({ commit }) {
      commit("GENERATE_HORSES");
    },
    generateRaceProgram({ commit }) {
      commit("GENERATE_RACE_PROGRAM");
    },
    addRoundResult({ commit }, result) {
      commit("ADD_ROUND_RESULT", result);
    },
    resetRace({ commit }) {
      commit("RESET_RACE");
    },
  },
  getters: {
    horses: (state) => state.allHorses,
    roundHorses: (state) => (round) => state.raceRounds[round],
    currentRound: (state) => state.currentRound,
    raceResults: (state) => state.results,
  },
};
