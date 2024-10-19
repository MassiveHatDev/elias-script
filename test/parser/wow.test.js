import { getCode } from "../util";
import { Lexer } from "../../src/lexer/lexer";
import { Parser } from "../../src/parser/parser";
import { TokenScanner } from "../../src/token-scanner";

test("2.1.0.basic-types", async () => {
  const code = await getCode("./manual/2.types/2.1.0.basic-types.elias");
  const scanner = new TokenScanner(Lexer.lex(code).filter(token => token.type.variant !== "WhitespaceToken"));
  const expr = Parser.parse(-1, scanner);
  console.log(JSON.stringify(expr, null, "  "));
});
