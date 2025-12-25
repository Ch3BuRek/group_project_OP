// src/logic/matchLogic.js

export function checkMatch(chance = 0.6) {
  return Math.random() > chance;
}
