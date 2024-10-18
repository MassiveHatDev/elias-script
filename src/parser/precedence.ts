import { OperatorToken, OperatorValue } from "../token";
import { TokenScanner } from "../token-scanner";

const postfixUnaryOperators = ["!", "++", "--"] as OperatorValue[];
const prefixUnaryOperators = ["~", "!", "-", "++", "--"] as OperatorValue[];
const modulo = ["%"] as OperatorValue[];
const multiplicationDivision = ["*", "/"] as OperatorValue[];
const additionSubtraction = ["+", "-"] as OperatorValue[];
const bitwiseShifts = ["<<", ">>", ">>>"] as OperatorValue[];
const bitwiseOperators = ["&", "|", "^"] as OperatorValue[];
const comparison = ["==", "!=", "<", "<=", ">", ">="] as OperatorValue[];
const interval = ["..."] as OperatorValue[];
const logicalAnd = ["&&"] as OperatorValue[];
const logicalOr = ["||"] as OperatorValue[];
const ternary = ["?"] as OperatorValue[]; // ?:
const compoundAssignment = [
  "%=",
  "*=",
  "/=",
  "+=",
  "-=",
  "<<=",
  ">>=",
  ">>>=",
  "&=",
  "|=",
  "^=",
] as OperatorValue[];
const arrow = ["->"] as OperatorValue[];

function hasOperator(token: OperatorToken, ops: OperatorValue[]): boolean {
  for (let index = 0; index < ops.length; index++) {
    const op = ops[index];
    if (op === token.value) {
      return true;
    }
  }
  return false;
}

export default class Precedence {
  public static get(scanner: TokenScanner, prefix: boolean): number {
    const token = scanner.peek();
    const operator = token.type;

    if (operator.variant === "OperatorToken") {
      if (prefix && hasOperator(operator, prefixUnaryOperators)) {
        return 13;
      } else if (hasOperator(operator, postfixUnaryOperators)) {
        return 14;
      } else if (hasOperator(operator, modulo)) {
        return 12;
      } else if (hasOperator(operator, multiplicationDivision)) {
        return 11;
      } else if (hasOperator(operator, additionSubtraction)) {
        return 10;
      } else if (hasOperator(operator, bitwiseShifts)) {
        return 9;
      } else if (hasOperator(operator, bitwiseOperators)) {
        return 8;
      } else if (hasOperator(operator, comparison)) {
        return 7;
      } else if (hasOperator(operator, interval)) {
        return 6;
      } else if (hasOperator(operator, logicalAnd)) {
        return 5;
      } else if (hasOperator(operator, logicalOr)) {
        return 4;
      } else if (hasOperator(operator, ternary)) {
        return 3;
      } else if (hasOperator(operator, compoundAssignment)) {
        return 2;
      } else if (hasOperator(operator, arrow)) {
        return 1;
      }
    }
    return -1;
  }
}
