// src/logic/chatLogic.js
import botPhrases from "../data/botPhrases.json";

function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const affectionImpact = {
  greeting: 2,
  compliment: 8,
  play: 5,
  question: 3,
  random: 1,
  tease: -3
};

function getMood(affection) {
  if (affection > 70) return "happy";
  if (affection > 40) return "neutral";
  if (affection > 20) return "sleepy";
  return "grumpy";
}

export function getBotReply(hiddenState, intent) {
  const newAffection = Math.max(
    0,
    Math.min(100, hiddenState.affection + (affectionImpact[intent] || 0))
  );

  const mood = getMood(newAffection);

  const phrases =
    botPhrases[intent]?.[mood] ||
    botPhrases[intent]?.neutral ||
    botPhrases.default[mood] ||
    botPhrases.default.neutral;

  return {
    text: random(phrases),
    hiddenState: {
      affection: newAffection,
      mood
    }
  };
}
