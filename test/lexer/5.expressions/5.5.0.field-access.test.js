import { lex, getCode } from "../../util";

test("5.5.0.field-access", async () => {
  const code = await getCode("./manual/5.expressions/5.5.0.field-access.elias");
  expect(lex(code)).toEqual([
    { variant: "KeywordToken", value: "class" },
    { variant: "IdentToken", value: "MyClass" },
    { variant: "KeywordToken", value: "public" },
    { variant: "IdentToken", value: "field" },
    { variant: "OperatorToken", value: "?" },
    { variant: "OperatorToken", value: ":" },
    { variant: "IdentToken", value: "String" },
    { variant: "OperatorToken", value: "=" },
    { variant: "LiteralToken", type: "String", value: "Hello, world!" },
    { variant: "DelimiterToken", value: ";" },
    { variant: "KeywordToken", value: "end" },
    { variant: "KeywordToken", value: "let" },
    { variant: "IdentToken", value: "myObject" },
    { variant: "OperatorToken", value: "=" },
    { variant: "KeywordToken", value: "new" },
    { variant: "IdentToken", value: "MyClass" },
    { variant: "DelimiterToken", value: "(" },
    { variant: "DelimiterToken", value: ")" },
    { variant: "DelimiterToken", value: ";" },
    { variant: "KeywordToken", value: "let" },
    { variant: "IdentToken", value: "myField" },
    { variant: "OperatorToken", value: "=" },
    { variant: "IdentToken", value: "myObject" },
    { variant: "OperatorToken", value: "." },
    { variant: "IdentToken", value: "field" },
    { variant: "OperatorToken", value: "?" },
    { variant: "OperatorToken", value: "." },
    { variant: "IdentToken", value: "toUpperCase" },
    { variant: "DelimiterToken", value: "(" },
    { variant: "DelimiterToken", value: ")" },
    { variant: "DelimiterToken", value: ";" },
  ]);
});
