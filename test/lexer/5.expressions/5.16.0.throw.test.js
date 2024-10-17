import { lex, getCode } from "../../util";

test("5.16.0.throw", async () => {
  const code = await getCode("./manual/5.expressions/5.16.0.throw.elias");
  expect(lex(code)).toEqual([
    { variant: "KeywordToken", value: "throw" },
    { variant: "KeywordToken", value: "new" },
    { variant: "IdentToken", value: "Error" },
    { variant: "DelimiterToken", value: "(" },
    { variant: "StringToken", value: "Hello, world!" },
    { variant: "DelimiterToken", value: ")" },
    { variant: "DelimiterToken", value: ";" },
  ]);
});
