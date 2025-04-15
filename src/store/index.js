import { createStore } from "vuex";
import horses from "./modules/horses";
import programs from "./modules/programs";

export default createStore({
  modules: {
    horses,
    programs,
  },
});
