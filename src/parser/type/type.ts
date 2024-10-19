import { ComplexType } from "../../expr/expr-def";
import { TokenScanner } from "../../token-scanner";
import { getIdentiferValue } from "../../token-tools";

export function parseType(scanner: TokenScanner): ComplexType {
  console.warn("Stubbed parseType")
  return {
    variant: "TPath",
    p: {
      pack: [],
      name: getIdentiferValue(scanner.next()),
      params: undefined,
      sub: undefined,
    },
  };
}
