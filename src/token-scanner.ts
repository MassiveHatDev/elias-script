import { Token } from "./token";

/**
 * Class to scan through an array of tokens produced by a lexer.
 * Provides methods to iterate through tokens and perform token-specific actions.
 */
export class TokenScanner {
  public tokens: Token[];
  public curIndex: number;

  /**
   * Constructor for the TokenScanner class.
   * Initializes the scanner with an array of tokens and sets the current index to 0.
   * @param tokens The array of tokens to scan through.
   */
  public constructor(tokens: Token[]) {
    this.tokens = tokens;
    this.curIndex = 0;
  }

  /**
   * Checks if there are more tokens to be scanned.
   * @return True if the current index is less than the total number of tokens, false otherwise.
   */
  public hasNext(): boolean {
    return this.curIndex < this.tokens.length;
  }

  /**
   * Advances the scanner to the next token and returns it.
   * @return The next token in the sequence.
   */
  public next(): Token {
    return this.tokens[this.curIndex++];
  }

  /**
   * Peeks at the current token without advancing the scanner's index.
   * @return The token at the current index.
   */
  public peek(): Token {
    return this.tokens[this.curIndex];
  }

  /**
   * Consumes tokens while a given condition is met.
   * Iterates through the tokens as long as the provided function returns true for the current token.
   * @param fn A function that takes a token as input and returns a boolean indicating whether to continue consuming tokens.
   */
  public consumeWhile(fn: (t: Token) => boolean): void {
    while (this.hasNext() && fn(this.peek())) {
      this.next();
    }
  }

  /**
   * Consumes all whitespace tokens.
   * Uses the consumeWhile method to iterate through tokens while the current token is of type "WhitespaceToken".
   */
  public consumeWhitespace(): void {
    this.consumeWhile((token) => {
      return token.type.variant === "WhitespaceToken";
    });
  }
}
