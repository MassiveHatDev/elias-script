import { Expr } from "../expr";
import { ReservedWord, Token } from "../token";
import { TokenScanner } from "../token-scanner";
import { let_ } from "./keyword/let";
import { literal } from "./literal";
import { Precedence } from "./precedence";

export class Parser {
  public static parse(precedence: number, scanner: TokenScanner): Expr {
    if (scanner.hasNext()) {
      let isPrefix = true;
      let left = Parser.parseExpressionPrefix(scanner);

      while (
        scanner.hasNext() &&
        precedence < Precedence.get(scanner, isPrefix)
      ) {
        left = Parser.parseExpressionInfix(left, scanner);
        isPrefix = false;
      }

      return left;
    } else {
      throw new Error("err");
    }
  }

  private static throwToken(token: Token): Error {
    return new Error(
      `Token: ${JSON.stringify(token.type, null, "  ")} is not supported!`
    );
  }

  private static parseExpressionPrefix(scanner: TokenScanner): Expr {
    const peek = scanner.peek();
    switch (peek.type.variant) {
      case "DelimiterToken": {
        throw this.throwToken(peek);
      }
      case "IdentToken": {
        throw this.throwToken(peek);
      }
      case "KeywordToken": {
        switch (peek.type.value) {
          case ReservedWord.Break:
            throw this.throwToken(peek);
          case ReservedWord.Case:
            throw this.throwToken(peek);
          case ReservedWord.Cast:
            throw this.throwToken(peek);
          case ReservedWord.Catch:
            throw this.throwToken(peek);
          case ReservedWord.Class:
            throw this.throwToken(peek);
          case ReservedWord.Continue:
            throw this.throwToken(peek);
          case ReservedWord.Def:
            throw this.throwToken(peek);
          case ReservedWord.Default:
            throw this.throwToken(peek);
          case ReservedWord.Do:
            throw this.throwToken(peek);
          case ReservedWord.Else:
            throw this.throwToken(peek);
          case ReservedWord.Elsif:
            throw this.throwToken(peek);
          case ReservedWord.End:
            throw this.throwToken(peek);
          case ReservedWord.Enum:
            throw this.throwToken(peek);
          case ReservedWord.Export:
            throw this.throwToken(peek);
          case ReservedWord.Extends:
            throw this.throwToken(peek);
          case ReservedWord.Extern:
            throw this.throwToken(peek);
          case ReservedWord.False:
            throw this.throwToken(peek);
          case ReservedWord.Final:
            throw this.throwToken(peek);
          case ReservedWord.For:
            throw this.throwToken(peek);
          case ReservedWord.Function:
            throw this.throwToken(peek);
          case ReservedWord.If:
            throw this.throwToken(peek);
          case ReservedWord.Implements:
            throw this.throwToken(peek);
          case ReservedWord.Import:
            throw this.throwToken(peek);
          case ReservedWord.In:
            throw this.throwToken(peek);
          case ReservedWord.Interface:
            throw this.throwToken(peek);
          case ReservedWord.Let:
            return let_(scanner);
          case ReservedWord.New:
            throw this.throwToken(peek);
          case ReservedWord.Null:
            throw this.throwToken(peek);
          case ReservedWord.Operator:
            throw this.throwToken(peek);
          case ReservedWord.Override:
            throw this.throwToken(peek);
          case ReservedWord.Package:
            throw this.throwToken(peek);
          case ReservedWord.Print:
            throw this.throwToken(peek);
          case ReservedWord.Private:
            throw this.throwToken(peek);
          case ReservedWord.Public:
            throw this.throwToken(peek);
          case ReservedWord.Return:
            throw this.throwToken(peek);
          case ReservedWord.Static:
            throw this.throwToken(peek);
          case ReservedWord.Super:
            throw this.throwToken(peek);
          case ReservedWord.Switch:
            throw this.throwToken(peek);
          case ReservedWord.This:
            throw this.throwToken(peek);
          case ReservedWord.Throw:
            throw this.throwToken(peek);
          case ReservedWord.True:
            throw this.throwToken(peek);
          case ReservedWord.Try:
            throw this.throwToken(peek);
          case ReservedWord.Typedef:
            throw this.throwToken(peek);
          case ReservedWord.Untyped:
            throw this.throwToken(peek);
          case ReservedWord.Using:
            throw this.throwToken(peek);
          case ReservedWord.While:
            throw this.throwToken(peek);
        }
      }
      case "LiteralToken": {
        return literal(scanner);
      }
      case "OperatorToken": {
        throw this.throwToken(peek);
      }
      case "WhitespaceToken": {
        throw this.throwToken(peek);
      }
    }
  }

  private static parseExpressionInfix(left: Expr, scanner: TokenScanner): Expr {
    const peek = scanner.peek();
    switch (peek.type.variant) {
      case "DelimiterToken": {
        throw this.throwToken(peek);
      }
      case "IdentToken": {
        throw this.throwToken(peek);
      }
      case "KeywordToken": {
        throw this.throwToken(peek);
      }
      case "LiteralToken": {
        throw this.throwToken(peek);
      }
      case "OperatorToken": {
        throw this.throwToken(peek);
      }
      case "WhitespaceToken": {
        throw this.throwToken(peek);
      }
    }
  }
}
