import { lex, getCode } from "../../util";

test("5.17.0.try-catch", async () => {
  const code = await getCode("./manual/5.expressions/5.17.0.try-catch.elias");
  expect(lex(code)).toEqual([
    { variant: "KeywordToken", value: "try" },
    { variant: "KeywordToken", value: "throw" },
    { variant: "KeywordToken", value: "new" },
    { variant: "IdentToken", value: "Error" },
    { variant: "DelimiterToken", value: "(" },
    { variant: "StringToken", value: "Hello, world!" },
    { variant: "DelimiterToken", value: ")" },
    { variant: "DelimiterToken", value: ";" },
    { variant: "KeywordToken", value: "catch" },
    { variant: "IdentToken", value: "e" },
    { variant: "DelimiterToken", value: ":" },
    { variant: "IdentToken", value: "Error" },
    { variant: "KeywordToken", value: "print" },
    { variant: "DelimiterToken", value: "(" },
    { variant: "IdentToken", value: "e" },
    { variant: "DelimiterToken", value: "." },
    { variant: "IdentToken", value: "message" },
    { variant: "DelimiterToken", value: ")" },
    { variant: "DelimiterToken", value: ";" },
    { variant: "KeywordToken", value: "end" },
  ]);
});
