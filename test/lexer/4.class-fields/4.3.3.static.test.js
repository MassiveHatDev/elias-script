import { lex, getCode } from "../../util";

test("4.3.3.static", async () => {
  const code = await getCode("./manual/4.class-fields/4.3.3.static.elias");
  expect(lex(code)).toEqual([
    { variant: "KeywordToken", value: "class" },
    { variant: "IdentToken", value: "MyClass" },
    { variant: "KeywordToken", value: "static" },
    { variant: "KeywordToken", value: "public" },
    { variant: "IdentToken", value: "field" },
    { variant: "OperatorToken", value: ":" },
    { variant: "IdentToken", value: "Int" },
    { variant: "OperatorToken", value: "=" },
    { variant: "LiteralToken", type: "Numeric", value: "10" },
    { variant: "DelimiterToken", value: ";" },
    { variant: "KeywordToken", value: "end" },
  ]);
});
