import { lex, getCode } from "../../util";

test("2.1.0.basic-types", async () => {
  const code = await getCode("./manual/2.types/2.1.0.basic-types.elias")
  expect(lex(code)).toEqual([
    { variant: "KeywordToken", value: "let" },
    { variant: "IdentToken", value: "a" },
    { variant: "OperatorToken", value: ":" },
    { variant: "IdentToken", value: "Int" },
    { variant: "OperatorToken", value: "=" },
    { variant: "LiteralToken", type: "Numeric", value: "10" },
    { variant: "DelimiterToken", value: ";" },
    { variant: "KeywordToken", value: "let" },
    { variant: "IdentToken", value: "b" },
    { variant: "OperatorToken", value: ":" },
    { variant: "IdentToken", value: "Float" },
    { variant: "OperatorToken", value: "=" },
    { variant: "LiteralToken", type: "Numeric", value: "10.0" },
    { variant: "DelimiterToken", value: ";" },
    { variant: "KeywordToken", value: "let" },
    { variant: "IdentToken", value: "c" },
    { variant: "OperatorToken", value: ":" },
    { variant: "IdentToken", value: "Bool" },
    { variant: "OperatorToken", value: "=" },
    { variant: "KeywordToken", value: "true" },
    { variant: "DelimiterToken", value: ";" },
  ]);
});
