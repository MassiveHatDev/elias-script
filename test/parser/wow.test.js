import { lex, getCode } from "../util";

test("5.1.0.blocks", async () => {
  const code = await getCode("./manual/5.expressions/5.1.0.blocks.elias");
  expect(lex(code)).toEqual([
    { variant: "DelimiterToken", value: "{" },
    { variant: "KeywordToken", value: "let" },
    { variant: "IdentToken", value: "a" },
    { variant: "OperatorToken", value: "=" },
    { variant: "LiteralToken", type: "Numeric", value: "10" },
    { variant: "DelimiterToken", value: ";" },
    { variant: "KeywordToken", value: "let" },
    { variant: "IdentToken", value: "b" },
    { variant: "OperatorToken", value: "=" },
    { variant: "LiteralToken", type: "Numeric", value: "20" },
    { variant: "DelimiterToken", value: ";" },
    { variant: "IdentToken", value: "a" },
    { variant: "OperatorToken", value: "+" },
    { variant: "IdentToken", value: "b" },
    { variant: "DelimiterToken", value: ";" },
    { variant: "DelimiterToken", value: "}" },
  ]);
});
