import { horseNames, horseColors } from "./constants/horses";

function generateRandomCondition() {
  return Math.floor(Math.random() * 100) + 1;
}

export function generateHorse(id) {
  return {
    id,
    name: horseNames[id - 1],
    condition: generateRandomCondition(),
    color: horseColors[id - 1],
  };
}

export function generateFixedHorse(id) {
  return generateHorse(id, false);
}

export function generateRandomizedHorse(id) {
  return generateHorse(id, true);
}
