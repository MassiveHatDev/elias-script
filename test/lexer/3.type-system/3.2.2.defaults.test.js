import { lex, getCode } from "../../util";

test("3.2.2.defaults", async () => {
  const code = await getCode("./manual/3.type-system/3.2.2.defaults.elias");
  expect(lex(code)).toEqual([
    { variant: "KeywordToken", value: "class" },
    { variant: "IdentToken", value: "Example" },
    { variant: "OperatorToken", value: "<" },
    { variant: "IdentToken", value: "T" },
    { variant: "DelimiterToken", value: "=" },
    { variant: "IdentToken", value: "Int" },
    { variant: "DelimiterToken", value: "," },
    { variant: "IdentToken", value: "U" },
    { variant: "DelimiterToken", value: "=" },
    { variant: "IdentToken", value: "Int" },
    { variant: "OperatorToken", value: ">" },
    { variant: "KeywordToken", value: "public" },
    { variant: "IdentToken", value: "a" },
    { variant: "DelimiterToken", value: ":" },
    { variant: "IdentToken", value: "T" },
    { variant: "DelimiterToken", value: ";" },
    { variant: "KeywordToken", value: "public" },
    { variant: "IdentToken", value: "b" },
    { variant: "DelimiterToken", value: ":" },
    { variant: "IdentToken", value: "U" },
    { variant: "DelimiterToken", value: ";" },
    { variant: "KeywordToken", value: "public" },
    { variant: "KeywordToken", value: "function" },
    { variant: "KeywordToken", value: "new" },
    { variant: "DelimiterToken", value: "(" },
    { variant: "DelimiterToken", value: ")" },
    { variant: "KeywordToken", value: "end" },
    { variant: "KeywordToken", value: "end" },
  ]);
});
