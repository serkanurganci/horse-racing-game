export default {
  SET_RACES(state, races) {
    state.races = races;
  },
  SET_RACE_STATUS(state) {
    state.isRaceRunning = !state.isRaceRunning;
  },
  SET_NEXT_RACE(state) {
    if (state.currentRaceIndex < state.races.length - 1) {
      state.currentRaceIndex++;
    } else {
      state.isRaceRunning = false;
    }
  },
  SET_RACE_RESULT(state, result) {
    state.raceResults.push(result);
  },
};
