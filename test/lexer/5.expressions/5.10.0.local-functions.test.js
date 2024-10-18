import { lex, getCode } from "../../util";

test("5.10.0.local-functions", async () => {
  const code = await getCode(
    "./manual/5.expressions/5.10.0.local-functions.elias"
  );
  expect(lex(code)).toEqual([
    { variant: "KeywordToken", value: "class" },
    { variant: "IdentToken", value: "MyClass" },
    { variant: "KeywordToken", value: "public" },
    { variant: "KeywordToken", value: "def" },
    { variant: "IdentToken", value: "myMethod" },
    { variant: "DelimiterToken", value: "(" },
    { variant: "DelimiterToken", value: ")" },
    { variant: "OperatorToken", value: ":" },
    { variant: "IdentToken", value: "Void" },
    { variant: "KeywordToken", value: "def" },
    { variant: "IdentToken", value: "myLocalFunction" },
    { variant: "DelimiterToken", value: "(" },
    { variant: "DelimiterToken", value: ")" },
    { variant: "OperatorToken", value: ":" },
    { variant: "IdentToken", value: "Void" },
    { variant: "KeywordToken", value: "print" },
    { variant: "DelimiterToken", value: "(" },
    {
      variant: "LiteralToken", type: "String",
      value: "Hello, world from myLocalFunction!",
    },
    { variant: "DelimiterToken", value: ")" },
    { variant: "DelimiterToken", value: ";" },
    { variant: "KeywordToken", value: "end" },
    { variant: "KeywordToken", value: "end" },
    { variant: "KeywordToken", value: "end" },
  ]);
});
