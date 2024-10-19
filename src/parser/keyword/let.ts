import { Expr } from "../../expr";
import { ComplexType } from "../../expr/expr-def";
import { Position } from "../../position";
import { Operator } from "../../token";
import { TokenScanner } from "../../token-scanner";
import { getIdentiferValue } from "../../token-tools";
import { Parser } from "../parser";
import { parseType } from "../type/type";

export function let_(scanner: TokenScanner): Expr {
  scanner.next(); // consume let
  const name = getIdentiferValue(scanner.next());
  let type: ComplexType | undefined;
  const colonOrDelim = scanner.next();
  switch (colonOrDelim.type.variant) {
    case "OperatorToken": {
      switch (colonOrDelim.type.value) {
        case Operator.Colon:
          type = parseType(scanner);
          scanner.next(); // consume =
          break;
        case Operator.Equals:
          break;
        default:
          throw new Error(`Invalid operator: ${colonOrDelim.type.value}`);
      }
      break;
    }
    default:
      throw new Error(`Invalid token: ${colonOrDelim.type.variant}`);
  }
  return {
    pos: new Position(0, 0, 0, 0),
    expr: {
      variant: "ELet",
      let_: {
        type,
        namePos: undefined,
        name,
        isStatic: false,
        isFinal: false,
        expr: Parser.parse(-1, scanner),
      },
    },
  };
}
