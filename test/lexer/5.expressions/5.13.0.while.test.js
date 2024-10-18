import { lex, getCode } from "../../util";

test("5.13.0.while", async () => {
  const code = await getCode("./manual/5.expressions/5.13.0.while.elias");
  expect(lex(code)).toEqual([
    { variant: "KeywordToken", value: "while" },
    { variant: "IdentToken", value: "condition" },
    { variant: "KeywordToken", value: "print" },
    { variant: "DelimiterToken", value: "(" },
    { variant: "LiteralToken", type: "String", value: "Hello, world!" },
    { variant: "DelimiterToken", value: ")" },
    { variant: "DelimiterToken", value: ";" },
    { variant: "KeywordToken", value: "end" },
  ]);
});
