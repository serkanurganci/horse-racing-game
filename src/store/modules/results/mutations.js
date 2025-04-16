export default {
  SET_RACE_RESULT(state, { raceLength, positions }) {
    state.raceResults[raceLength] = [...positions];
  },
};
