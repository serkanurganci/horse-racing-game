export default {
  SET_RACE_RESULT(state, { raceLength, positions }) {
    state.raceResults[raceLength] = [...positions];
  },
  CLEAR_RESULTS(state) {
    state.raceResults = {};
  },
};
