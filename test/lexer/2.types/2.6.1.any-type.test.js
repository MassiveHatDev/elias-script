import { lex, getCode } from "../../util";

test("2.6.1.any-type", async () => {
  const code = await getCode("./manual/2.types/2.6.1.any-type.elias");
  expect(lex(code)).toEqual([
    { variant: "KeywordToken", value: "let" },
    { variant: "IdentToken", value: "anyValue" },
    { variant: "OperatorToken", value: ":" },
    { variant: "IdentToken", value: "Any" },
    { variant: "OperatorToken", value: "=" },
    { variant: "LiteralToken", type: "Numeric", value: "10" },
    { variant: "DelimiterToken", value: ";" },
    { variant: "IdentToken", value: "anyValue" },
    { variant: "OperatorToken", value: "=" },
    { variant: "LiteralToken", type: "String", value: "Hello, world!" },
    { variant: "DelimiterToken", value: ";" },
  ]);
});
