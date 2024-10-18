import { Position } from "./position";

export enum ReservedWord {
  Break = "break",
  Case = "case",
  Cast = "cast",
  Catch = "catch",
  Class = "class",
  Continue = "continue",
  Def = "def",
  Default = "default",
  Do = "do",
  End = "end",
  Else = "else",
  Elsif = "elsif",
  Enum = "enum",
  Export = "export",
  Extends = "extends",
  Extern = "extern",
  False = "false",
  Final = "final",
  For = "for",
  Function = "function",
  If = "if",
  Implements = "implements",
  Import = "import",
  In = "in",
  Interface = "interface",
  Let = "let",
  New = "new",
  Null = "null",
  Operator = "operator",
  Override = "override",
  Package = "package",
  Private = "private",
  Public = "public",
  Print = "print",
  Return = "return",
  Static = "static",
  Super = "super",
  Switch = "switch",
  This = "this",
  Throw = "throw",
  True = "true",
  Try = "try",
  Typedef = "typedef",
  Untyped = "untyped",
  Using = "using",
  While = "while"
}

export enum Operator {
  BitwiseNot = "~",
  LogicalNot = "!",
  Increment = "++",
  Decrement = "--",
  Addition = "+",
  Subtraction = "-",
  Multiplication = "*",
  Division = "/",
  Modulus = "%",
  LeftShift = "<<",
  RightShift = ">>",
  UnsignedRightShift = ">>>",
  BitwiseAnd = "&",
  BitwiseOr = "|",
  BitwiseXor = "^",
  LogicalAnd = "&&",
  LogicalOr = "||",
  ModulusAssignment = "%=",
  MultiplicationAssignment = "*=",
  DivisionAssignment = "/=",
  AdditionAssignment = "+=",
  SubtractionAssignment = "-=",
  LeftShiftAssignment = "<<=",
  RightShiftAssignment = ">>=",
  UnsignedRightShiftAssignment = ">>>=",
  BitwiseAndAssignment = "&=",
  BitwiseOrAssignment = "|=",
  BitwiseXorAssignment = "^=",
  Equality = "==",
  Inequality = "!=",
  LessThan = "<",
  LessThanOrEqual = "<=",
  GreaterThan = ">",
  GreaterThanOrEqual = ">=",
  Range = "...",
  Lambda = "->",
  Coalescer = "??",
  Equals = "=",
  Dot = ".",
  QuestionMark = "?",
  Colon = ":",
}
export type OperatorValue = typeof Operator[keyof typeof Operator];

export enum Delimiter {
  LeftBracket = "[",
  RightBracket = "]",
  LeftParen = "(",
  RightParen = ")",
  LeftBrace = "{",
  RightBrace = "}",
  Comma = ",",
  Semicolon = ";",
}

export interface OperatorToken {
  variant: "OperatorToken";
  value: Operator;
}

export interface DelimiterToken {
  variant: "DelimiterToken";
  value: Delimiter;
}

export interface IdentToken {
  variant: "IdentToken";
  value: string;
}

export interface WhitespaceToken {
  variant: "WhitespaceToken";
}

export interface KeywordToken {
  variant: "KeywordToken";
  value: ReservedWord;
}

export interface LiteralToken {
  variant: "LiteralToken";
  type: "Numeric" | "String" | "Boolean"
  value: string;
}



// Punctuators
// Comments

export type TokenType =
  | DelimiterToken // Delimiters
  | OperatorToken // Operators
  | IdentToken // Identifiers
  | WhitespaceToken // Whitespace
  | KeywordToken // Keywords
  | LiteralToken; // Literals

export type TokenTypeVariant = TokenType extends { variant: infer V }
  ? V
  : never;

export class Token {
  public type: TokenType;
  public pos: Position;

  constructor(type: TokenType, pos: Position) {
    this.type = type;
    this.pos = pos;
  }
}
