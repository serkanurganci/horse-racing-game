import { createStore } from "vuex";
import horses from "./modules/horses";
import programs from "./modules/programs";
import results from "./modules/results";

export default createStore({
  modules: {
    horses,
    programs,
    results,
  },
});
