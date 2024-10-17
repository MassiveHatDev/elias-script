export class LexerScanner {
  public content: string;
  public curLine: number;
  public charIndex: number;
  public curIndex: number;

  /**
   * Constructor for the LexerScanner class.
   * Initializes the scanner with the input content and sets the current line, character index, and current index to 0.
   * @param content The input string to be scanned.
   */
  public constructor(content: string) {
    this.content = content;
    this.curLine = 0;
    this.charIndex = 0;
    this.curIndex = 0;
  }

  /**
   * Checks whether there are more characters left to scan in the input content.
   * @return True if the current index is less than the length of the content, indicating that more characters are available.
   */
  public hasNext(): boolean {
    return this.curIndex < this.content.length;
  }

  /**
   * Advances the scanner by one character and returns it.
   * If a newline is encountered, the current line is incremented and the character index is reset to 0.
   * @return The next character in the content string.
   */
  public next(): string {
    const c = this.content.charAt(this.curIndex++);
    this.charIndex++;
    if (c === "\n") {
      this.curLine += 1;
      this.charIndex = 0;
    }
    return c;
  }

  /**
   * Peeks at the current character without advancing the scanner's index.
   * @return The character at the current index.
   */
  public peek(): string {
    return this.content.charAt(this.curIndex);
  }

  /**
   * Peeks at the character that comes after the current character, without advancing the index.
   * @return The character immediately after the current one.
   */
  public peekDouble(): string {
    return this.content.charAt(this.curIndex + 1);
  }

  /**
   * Peeks at the character that is two positions ahead of the current character, without advancing the index.
   * @return The character two positions ahead.
   */
  public peekTriple(): string {
    return this.content.charAt(this.curIndex + 2);
  }
}
