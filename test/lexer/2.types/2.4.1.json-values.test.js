import { lex, getCode } from "../../util";

test("2.4.1.json-values", async () => {
  const code = await getCode("./manual/2.types/2.4.1.json-values.elias");
  expect(lex(code)).toEqual([
    { variant: "KeywordToken", value: "let" },
    { variant: "IdentToken", value: "point" },
    { variant: "OperatorToken", value: "=" },
    { variant: "DelimiterToken", value: "{" },
    { variant: "LiteralToken", type: "String", value: "x" },
    { variant: "OperatorToken", value: ":" },
    { variant: "LiteralToken", type: "Numeric", value: "10" },
    { variant: "DelimiterToken", value: "," },
    { variant: "LiteralToken", type: "String", value: "y" },
    { variant: "OperatorToken", value: ":" },
    { variant: "LiteralToken", type: "Numeric", value: "10" },
    { variant: "DelimiterToken", value: "}" },
    { variant: "DelimiterToken", value: ";" },
  ]);
});
