export default {
  SET_RACES(state, races) {
    state.races = races;
  },
  SET_RACE_STATUS(state) {
    state.isRaceRunning = !state.isRaceRunning;
    if (!state.isRaceRunning) {
      state.isPaused = true;
    } else {
      state.isPaused = false;
    }
  },
  SET_NEXT_RACE(state) {
    if (state.currentRaceIndex < Object.keys(state.races).length - 1) {
      state.currentRaceIndex++;
      state.isPaused = false;
    } else {
      state.isRaceRunning = false;
      state.isPaused = false;
    }
  },
  RESET_STATE(state) {
    state.races = {};
    state.currentRaceIndex = 0;
    state.isRaceRunning = false;
    state.isPaused = false;
  },
};
