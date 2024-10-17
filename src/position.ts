/**
 * Class representing a range of positions in a source file.
 * Used to track the starting and ending positions (lines and characters) of tokens or segments in the input content.
 */
export class Position {
  public minLine: number;
  public min: number;
  public maxLine: number;
  public max: number;

  /**
   * Constructor to initialize a Position object.
   * Represents a range between a minimum line/character and a maximum line/character.
   * @param minLine The starting line number of the position range.
   * @param min The starting character index within the line.
   * @param maxLine The ending line number of the position range.
   * @param max The ending character index within the line.
   */
  constructor(minLine: number, min: number, maxLine: number, max: number) {
    this.minLine = minLine;
    this.min = min;
    this.maxLine = maxLine;
    this.max = max;
  }

  /**
   * Static method to create a union of two Position objects.
   * The result is a new Position that spans the range from the smallest starting position to the largest ending position.
   * @param a The first Position object.
   * @param b The second Position object.
   * @return A new Position representing the combined range.
   */
  public static union(a: Position, b: Position): Position {
    return new Position(
      a.minLine < b.minLine ? a.minLine : b.minLine,
      a.min < b.min ? a.min : b.min,
      a.maxLine > b.maxLine ? a.maxLine : b.maxLine,
      a.max > b.max ? a.max : b.max
    );
  }

  /**
   * Static method to create a Position from an array of Position objects.
   * The result is a new Position that spans the range from the first to the last position in the array.
   * @param positions An array of Position objects.
   * @return A new Position representing the range from the first to last position in the array.
   */
  public static minMax(positions: Position[]): Position {
    if (positions.length === 0) {
      return Position.identity();
    }
    const first = positions[0];
    const min = first.min;
    const minLine = first.minLine;
    const last = positions[positions.length - 1];
    const max = last.max;
    const maxLine = last.maxLine;
    return new Position(minLine, min, maxLine, max);
  }

  /**
   * Static method to create a default Position object.
   * The identity Position represents a range from (0, 0) to (0, 0), used as a default value.
   * @return A Position object representing the default (0, 0) range.
   */
  public static identity(): Position {
    return new Position(0, 0, 0, 0);
  }

  /**
   * Static method to create a new Position object from an existing one.
   * This creates a clone of the given Position object.
   * @param pos The Position object to clone.
   * @return A new Position object with the same values as the original.
   */
  public static from(pos: Position): Position {
    return new Position(pos.minLine, pos.min, pos.maxLine, pos.max);
  }

  /**
   * Static method to update a Position's max values with another Position's values.
   * This modifies the original Position's maximum line and character values to match the 'last' Position.
   * @param pos The Position object to update.
   * @param last The Position object providing the new maxLine and max values.
   * @return The updated Position object.
   */
  public static lastFrom(pos: Position, last: Position): Position {
    pos.maxLine = last.maxLine;
    pos.max = last.max;
    return pos;
  }
}
