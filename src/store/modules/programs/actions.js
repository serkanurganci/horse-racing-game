export default {
  generateRaces({ commit, rootState }) {
    const horses = rootState.horses.allHorses;
    const races = [];

    for (let i = 0; i < 6; i++) {
      const shuffled = [...horses].sort(() => Math.random() - 0.5);
      const race = shuffled.slice(0, 10).map((horse, index) => ({
        position: index + 1,
        name: horse.name,
      }));
      races.push(race);
    }

    commit("SET_RACES", races);
  },
};
