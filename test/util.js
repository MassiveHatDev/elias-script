import { Lexer } from "../src/lexer/lexer";
import { promises } from "fs";

export function shuffleArray(array) {
  const shuffledArray = [...array]; // Create a copy of the array
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

export function lex(input) {
  return Lexer.lex(input)
    .map((t) => {
      return t.type
    })
    .filter((t) => t.variant !== "WhitespaceToken");
}

export async function getCode(path) {
  return await promises.readFile(path).then((data) => {
    return data.toString();
  });
}
