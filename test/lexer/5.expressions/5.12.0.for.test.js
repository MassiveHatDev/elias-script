import { lex, getCode } from "../../util";

test("5.12.0.for", async () => {
  const code = await getCode("./manual/5.expressions/5.12.0.for.elias");
  expect(lex(code)).toEqual([
    { variant: "KeywordToken", value: "for" },
    { variant: "IdentToken", value: "i" },
    { variant: "KeywordToken", value: "in" },
    { variant: "LiteralToken", type: "Numeric", value: "0" },
    { variant: "OperatorToken", value: "..." },
    { variant: "LiteralToken", type: "Numeric", value: "10" },
    { variant: "KeywordToken", value: "print" },
    { variant: "DelimiterToken", value: "(" },
    { variant: "IdentToken", value: "i" },
    { variant: "DelimiterToken", value: ")" },
    { variant: "DelimiterToken", value: ";" },
    { variant: "KeywordToken", value: "end" },
    { variant: "KeywordToken", value: "for" },
    { variant: "IdentToken", value: "item" },
    { variant: "KeywordToken", value: "in" },
    { variant: "IdentToken", value: "collection" },
    { variant: "KeywordToken", value: "print" },
    { variant: "DelimiterToken", value: "(" },
    { variant: "IdentToken", value: "item" },
    { variant: "DelimiterToken", value: ")" },
    { variant: "DelimiterToken", value: ";" },
    { variant: "KeywordToken", value: "end" },
  ]);
});
