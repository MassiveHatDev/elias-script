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
  // Unary Operators
  BitwiseNot = "~",
  LogicalNot = "!",
  Negation = "-",
  Increment = "++",
  Decrement = "--",

  // Binary Operators
  // Arithmetic operators
  Addition = "+",
  Subtraction = "-",
  Multiplication = "*",
  Division = "/",
  Modulus = "%",

  // String concatenation operators
  StringConcatenation = "+",
  StringConcatenationAssignment = "+=",

  // Bitwise operators
  LeftShift = "<<",
  RightShift = ">>",
  BitwiseAnd = "&",
  BitwiseOr = "|",
  BitwiseXor = "^",

  // Logical operators
  LogicalAnd = "&&",
  LogicalOr = "||",

  // Compound assignment operators
  ModulusAssignment = "%=",
  MultiplicationAssignment = "*=",
  DivisionAssignment = "/=",
  AdditionAssignment = "+=",
  SubtractionAssignment = "-=",
  LeftShiftAssignment = "<<=",
  RightShiftAssignment = ">>=",
  BitwiseAndAssignment = "&=",
  BitwiseOrAssignment = "|=",
  BitwiseXorAssignment = "^=",

  // Numeric comparison operators
  Equality = "==",
  Inequality = "!=",
  LessThan = "<",
  LessThanOrEqual = "<=",
  GreaterThan = ">",
  GreaterThanOrEqual = ">=",

  // String comparison operators
  StringEquality = "==",
  StringInequality = "!=",
  StringLessThan = "<",
  StringLessThanOrEqual = "<=",
  StringGreaterThan = ">",
  StringGreaterThanOrEqual = ">=",

  // Equality operators
  GeneralEquality = "==",
  GeneralInequality = "!=",

  // Miscellaneous operators
  Range = "...",
  Lambda = "->",
  Coalescer = "??",

  // Ternary operator
  // Conditional = "?:",
}

export enum Delimiter {
  LeftBracket = "[",
  RightBracket = "]",
  LeftParen = "(",
  RightParen = ")",
  LeftBrace = "{",
  RightBrace = "}",
  Comma = ",",
  Semicolon = ";",
  Colon = ":",
  QuestionMark = "?",
  Hash = "#",
  Dot = ".",
  Equals = "=",
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

export interface StringToken {
  variant: "StringToken";
  value: string;
}

export interface IntToken {
  variant: "IntToken";
  value: string;
}

export interface FloatToken {
  variant: "FloatToken";
  value: string;
}

export type TokenType =
  | DelimiterToken
  | OperatorToken
  | IdentToken
  | WhitespaceToken
  | KeywordToken
  | StringToken
  | IntToken
  | FloatToken;

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
