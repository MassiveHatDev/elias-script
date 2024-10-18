import { lex, getCode } from "../../util";

test("4.3.2.override", async () => {
  const code = await getCode("./manual/4.class-fields/4.3.2.override.elias");
  expect(lex(code)).toEqual([
    { variant: "KeywordToken", value: "class" },
    { variant: "IdentToken", value: "MyClass" },
    { variant: "KeywordToken", value: "extends" },
    { variant: "IdentToken", value: "MyBaseClass" },
    { variant: "KeywordToken", value: "override" },
    { variant: "KeywordToken", value: "public" },
    { variant: "KeywordToken", value: "def" },
    { variant: "IdentToken", value: "myMethod" },
    { variant: "DelimiterToken", value: "(" },
    { variant: "DelimiterToken", value: ")" },
    { variant: "OperatorToken", value: ":" },
    { variant: "IdentToken", value: "Void" },
    { variant: "KeywordToken", value: "print" },
    { variant: "DelimiterToken", value: "(" },
    { variant: "LiteralToken", type: "String", value: "Hello, world from myMethod!" },
    { variant: "DelimiterToken", value: ")" },
    { variant: "DelimiterToken", value: ";" },
    { variant: "KeywordToken", value: "end" },
    { variant: "KeywordToken", value: "end" },
  ]);
});
