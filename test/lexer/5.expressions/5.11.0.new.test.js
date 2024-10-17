import { lex, getCode } from "../../util";

test("5.11.0.new", async () => {
  const code = await getCode("./manual/5.expressions/5.11.0.new.elias");
  expect(lex(code)).toEqual([
    { variant: "KeywordToken", value: "let" },
    { variant: "IdentToken", value: "myObject" },
    { variant: "DelimiterToken", value: "=" },
    { variant: "KeywordToken", value: "new" },
    { variant: "IdentToken", value: "MyClass" },
    { variant: "DelimiterToken", value: "(" },
    { variant: "DelimiterToken", value: ")" },
    { variant: "DelimiterToken", value: ";" },
  ]);
});
