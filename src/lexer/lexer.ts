import { Position } from "../position";
import {
  Token,
  Operator,
  TokenTypeVariant,
  ReservedWord,
  Delimiter,
} from "../token";
import { LexerScanner } from "./lexer-scanner";

export class Lexer {
  /**
   * Static method to tokenize a given string content.
   * The content is scanned character by character, creating a series of tokens.
   * @param content The input string to be tokenized.
   * @return An array of tokens representing the lexical structure of the input.
   * @throws Error if the scanner's index does not progress, indicating a parsing error.
   */
  public static lex(content: string): Token[] {
    const scanner = new LexerScanner(content);
    const tokens: Token[] = [];
    let last = scanner.curIndex;
    while (scanner.hasNext()) {
      const token = Lexer.createToken(scanner);
      tokens.push(token);
      if (scanner.curIndex === last) {
        throw new Error("Parsing error");
      }
      last = scanner.curIndex;
    }
    return tokens;
  }

  /**
   * Helper method to check if a character represents whitespace.
   * Whitespace includes spaces, tabs, new lines, and carriage returns.
   * @param token The character to be checked.
   * @return True if the character is a whitespace character, false otherwise.
   */
  private static isWhiteSpace(token: string) {
    return /\s/.test(token); // Matches any whitespace character
  }

  /**
   * Helper method to check if a character is an operator.
   * @param char The character to check.
   * @return True if the character is an operator, false otherwise.
   */
  private static isOpertator(char: string) {
    const ops = Object.values(Operator);
    for (let index = 0; index < ops.length; index++) {
      const op = ops[index];
      if (char === op.charAt(0)) {
        return true;
      }
    }
    return false;
  }

  /**
   * Helper method to check if a character is a delimiter.
   * @param char The character to check.
   * @return True if the character is a delimiter, false otherwise.
   */
  private static isDelimiter(char: string) {
    const delimiters = Object.values(Delimiter);
    for (let index = 0; index < delimiters.length; index++) {
      const delimiter = delimiters[index];
      if (char === delimiter.charAt(0)) {
        return true;
      }
    }
    return false;
  }
  /**
   * Helper method to check if a character is a quote (").
   * Used to identify the start and end of string literals.
   * @param token The character to check.
   * @return True if the character is a quote, false otherwise.
   */
  private static isQuote(token: string) {
    return token === '"';
  }

  /**
   * Helper method to check if a character is a numeric digit.
   * @param character The character to check.
   * @return True if the character is a digit (0-9), false otherwise.
   */
  private static isNumber(character: string) {
    return /^[0-9]$/.test(character);
  }

  /**
   * Determines the type of a numeric string.
   * Returns "int" for integers, "float" for floating-point numbers, and "string" for non-numeric input.
   * @param input The string to be analyzed.
   * @return The type of the input as a string ("int", "float", or "string").
   */
  private static getStringType(input: string) {
    if (/^-?\d+$/.test(input)) {
      return "int";
    } else if (/^-?\d*\.\d+$/.test(input)) {
      return "float";
    } else {
      return "string";
    }
  }

  /**
   * Compares a given operator string with the start of another string.
   * Used to determine if a string begins with a specific operator.
   * @param operator The operator string to compare.
   * @param peeked The string to be checked.
   * @return True if the operator matches the start of the peeked string, false otherwise.
   */
  private static compareOperator(operator: string, peeked: string): boolean {
    return operator === peeked.substring(0, operator.length);
  }

  /**
   * Compares a list of operators with the start of a string.
   * Finds the longest matching operator at the start of the string.
   * @param operators An array of operator strings.
   * @param peeked The string to be checked.
   * @return The matched operator string or undefined if no match is found.
   */
  private static compareOperators(
    operators: string[],
    peeked: string
  ): string | undefined {
    const clone = operators.slice();
    const sortedOps = clone.sort((a, b) => {
      return b.length - a.length;
    });
    for (let index = 0; index < sortedOps.length; index++) {
      const op = sortedOps[index];
      if (this.compareOperator(op, peeked)) {
        return op;
      }
    }
    return undefined;
  }

  /**
   * Helper method to create a Token object from a scanner input.
   * Applies a given function to extract token data and position information.
   * @param scanner The LexerScanner instance used to scan the input.
   * @param fn A function that processes the scanner to determine the token variant and value.
   * @return A new Token object with the specified variant, value, and position.
   */
  private static createTokenHelper(
    scanner: LexerScanner,
    fn: (scanner: LexerScanner) => { variant: TokenTypeVariant; value?: string }
  ): Token {
    const minLine = scanner.curLine;
    const min = scanner.charIndex;
    const data = fn(scanner);
    const maxLine = scanner.curLine;
    const max = scanner.charIndex;
    const position = new Position(minLine, min, maxLine, max);
    if (data.value) {
      return new Token(
        {
          variant: data.variant as any,
          value: data.value,
        },
        position
      );
    } else {
      return new Token(
        {
          variant: data.variant as any,
        },
        position
      );
    }
  }

  /**
   * Recursively creates a word token by combining characters that are not operators or whitespace.
   * @param scanner The LexerScanner instance used to scan the input.
   * @return A string representing the word token.
   */
  private static createWord(scanner: LexerScanner): string {
    if (
      scanner.hasNext() &&
      !this.isOpertator(scanner.peek()) &&
      !this.isDelimiter(scanner.peek()) &&
      !this.isWhiteSpace(scanner.peek())
    ) {
      return scanner.next() + Lexer.createWord(scanner);
    }
    return "";
  }

  /**
   * Recursively creates a number token by combining numeric characters.
   * @param scanner The LexerScanner instance used to scan the input.
   * @return A string representing the numeric token.
   */
  private static createNumber(scanner: LexerScanner, current: string): string {
    const isValid = this.isNumber(scanner.peek()) || scanner.peek() === ".";
    const isRange = scanner.peek() + scanner.peekDouble() === "..";
    if (
      scanner.hasNext() &&
      isValid &&
      !isRange &&
      !this.isWhiteSpace(scanner.peek())
    ) {
      const next = scanner.next();
      const str = current + next;
      return next + Lexer.createNumber(scanner, str);
    }
    return "";
  }

  /**
   * Creates a whitespace token by scanning and skipping over all whitespace characters.
   * @param scanner The LexerScanner instance used to scan the input.
   * @return A Token object representing the whitespace.
   */
  private static createTokenWhitespace(scanner: LexerScanner): Token {
    return this.createTokenHelper(scanner, (scanner) => {
      while (scanner.hasNext() && this.isWhiteSpace(scanner.peek())) {
        scanner.next();
      }
      return {
        variant: "WhitespaceToken",
      };
    });
  }

  /**
   * Creates a word token, determining whether it is a keyword, identifier, or number.
   * @param scanner The LexerScanner instance used to scan the input.
   * @return A Token object representing the word, keyword, or number.
   * @throws Error if an invalid number format is encountered.
   */
  private static createWordToken(scanner: LexerScanner): Token {
    return this.createTokenHelper(scanner, (scanner) => {
      const reserves = Object.values(ReservedWord);
      if (this.isNumber(scanner.peek())) {
        const number = Lexer.createNumber(scanner, "");
        const type = this.getStringType(number);
        if (type === "int") {
          return {
            value: number,
            variant: "IntToken",
          };
        } else if (type === "float") {
          return {
            value: number,
            variant: "FloatToken",
          };
        } else {
          throw new Error("Invalid number");
        }
      } else {
        const word = Lexer.createWord(scanner);
        if (reserves.includes(word as ReservedWord)) {
          return {
            value: word,
            variant: "KeywordToken",
          };
        } else {
          return {
            value: word,
            variant: "IdentToken",
          };
        }
      }
    });
  }

  /**
   * Creates an operator token by scanning a specific number of characters.
   * The operator length is determined by the matched operator.
   * @param scanner The LexerScanner instance used to scan the input.
   * @param length The length of the operator to scan.
   * @return A Token object representing the operator.
   */
  private static createTokenOperator(
    scanner: LexerScanner,
    length: number
  ): Token {
    return this.createTokenHelper(scanner, (scanner) => {
      let value = "";
      for (let index = 0; index < length; index++) {
        value += scanner.next();
      }
      return {
        value,
        variant: "OperatorToken",
      };
    });
  }

  private static createTokenDelimiter(scanner: LexerScanner): Token {
    return this.createTokenHelper(scanner, (scanner) => {
      return {
        value: scanner.next(),
        variant: "DelimiterToken",
      };
    });
  }

  /**
   * Creates a string token by scanning characters between quotes.
   * The string is scanned until a closing quote is encountered or an error is thrown for an incomplete string.
   * @param scanner The LexerScanner instance used to scan the input.
   * @param length The length of the string token, including the quotes.
   * @return A Token object representing the string.
   * @throws Error if the string is incomplete and no closing quote is found.
   */
  private static createTokenString(
    scanner: LexerScanner,
    length: number
  ): Token {
    return this.createTokenHelper(scanner, (scanner) => {
      scanner.next();
      let value = "";
      while (scanner.hasNext() && !this.isQuote(scanner.peek())) {
        value += scanner.next();
      }
      if (scanner.hasNext()) {
        scanner.next();
      } else {
        throw new Error("Incomplete string");
      }
      return {
        value,
        variant: "StringToken",
      };
    });
  }

  /**
   * Main method to create a token from the input.
   * Determines the type of token (whitespace, string, operator, or word) based on the current character.
   * @param scanner The LexerScanner instance used to scan the input.
   * @return A Token object representing the identified token.
   */
  private static createToken(scanner: LexerScanner): Token {
    const operators = Object.values(Operator);
    const peek = scanner.peek();
    const peeked = [scanner.peek(), scanner.peekDouble(), scanner.peekTriple()]
      .filter((char) => char)
      .join("")
      .split(" ")[0];

    if (this.isWhiteSpace(peek)) {
      return this.createTokenWhitespace(scanner);
    } else if (peek === '"') {
      return this.createTokenString(scanner, peeked.length);
    } else {
      const op = this.compareOperators(operators, peeked);
      if (op !== undefined) {
        return this.createTokenOperator(scanner, op.length);
      } else if (this.isDelimiter(peek)) {
        return this.createTokenDelimiter(scanner);
      } else {
        return this.createWordToken(scanner);
      }
    }
  }
}
