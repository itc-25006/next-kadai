import { Character } from "@/types/character";

export const groupByTier = (characters: Character[]) => {
  const grouped: Record<string, Character[]> = {};

  characters.forEach((char) => {
    if (!grouped[char.tier]) {
      grouped[char.tier] = [];
    }
    grouped[char.tier].push(char);
  });

  return grouped;
};
