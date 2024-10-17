import { lex, getCode } from "../../util";

test("2.1.0.basic-types", async () => {
  const code = await getCode("./manual/2.types/2.1.0.basic-types.elias")
  expect(lex(code)).toEqual([
    { variant: "KeywordToken", value: "let" },
    { variant: "IdentToken", value: "a" },
    { variant: "DelimiterToken", value: ":" },
    { variant: "IdentToken", value: "Int" },
    { variant: "DelimiterToken", value: "=" },
    { variant: "IntToken", value: "10" },
    { variant: "DelimiterToken", value: ";" },
    { variant: "KeywordToken", value: "let" },
    { variant: "IdentToken", value: "b" },
    { variant: "DelimiterToken", value: ":" },
    { variant: "IdentToken", value: "Float" },
    { variant: "DelimiterToken", value: "=" },
    { variant: "FloatToken", value: "10.0" },
    { variant: "DelimiterToken", value: ";" },
    { variant: "KeywordToken", value: "let" },
    { variant: "IdentToken", value: "c" },
    { variant: "DelimiterToken", value: ":" },
    { variant: "IdentToken", value: "Bool" },
    { variant: "DelimiterToken", value: "=" },
    { variant: "KeywordToken", value: "true" },
    { variant: "DelimiterToken", value: ";" },
  ]);
});
