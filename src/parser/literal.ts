import { Expr } from "../expr";
import { Constant, StringLiteralKind } from "../expr/expr-def";
import { Position } from "../position";
import { LiteralToken, Token } from "../token";
import { TokenScanner } from "../token-scanner";

function getConstant(token: Token): Constant {
  const tokenType = token.type as LiteralToken;
  if (tokenType.type === "Boolean") {
    return {
      variant: "CIdent",
      s: tokenType.value,
    };
  } else if (tokenType.type === "Numeric") {
    return {
      variant: "CInt",
      v: tokenType.value,
    };
  } else if (tokenType.type === "String") {
    return {
      variant: "CString",
      s: tokenType.value,
      kind: StringLiteralKind.DoubleQuotes,
    };
  } else {
    throw new Error("Token type not valid: " + tokenType.type);
  }
}

export function literal(scanner: TokenScanner): Expr {
  return {
    pos: new Position(0, 0, 0, 0),
    expr: {
      variant: "EConst",
      c: getConstant(scanner.next()),
    },
  };
}
