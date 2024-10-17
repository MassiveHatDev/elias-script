import { lex, getCode } from "../../util";

test("5.15.0.switch", async () => {
  const code = await getCode("./manual/5.expressions/5.15.0.switch.elias");
  expect(lex(code)).toEqual([
    { variant: "KeywordToken", value: "switch" },
    { variant: "IdentToken", value: "expression" },
    { variant: "KeywordToken", value: "case" },
    { variant: "IdentToken", value: "value1" },
    { variant: "DelimiterToken", value: ":" },
    { variant: "KeywordToken", value: "print" },
    { variant: "DelimiterToken", value: "(" },
    { variant: "StringToken", value: "Hello, value1!" },
    { variant: "DelimiterToken", value: ")" },
    { variant: "DelimiterToken", value: ";" },
    { variant: "KeywordToken", value: "case" },
    { variant: "IdentToken", value: "value2" },
    { variant: "DelimiterToken", value: ":" },
    { variant: "KeywordToken", value: "print" },
    { variant: "DelimiterToken", value: "(" },
    { variant: "StringToken", value: "Hello, value2!" },
    { variant: "DelimiterToken", value: ")" },
    { variant: "DelimiterToken", value: ";" },
    { variant: "KeywordToken", value: "default" },
    { variant: "DelimiterToken", value: ":" },
    { variant: "KeywordToken", value: "print" },
    { variant: "DelimiterToken", value: "(" },
    { variant: "StringToken", value: "Hello, default!" },
    { variant: "DelimiterToken", value: ")" },
    { variant: "DelimiterToken", value: ";" },
    { variant: "KeywordToken", value: "end" },
  ]);
});
