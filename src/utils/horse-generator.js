import { horseNames, horseColors } from "./constants/horses";

export function generateRandomHorse(id) {
  return {
    id,
    name: horseNames[id - 1],
    condition: Math.floor(Math.random() * 100) + 1,
    color: horseColors[id % horseColors.length],
  };
}
