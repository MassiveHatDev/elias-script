import { lex, getCode } from "../../util";

test("5.9.0.let-and-final", async () => {
  const code = await getCode(
    "./manual/5.expressions/5.9.0.let-and-final.elias"
  );
  expect(lex(code)).toEqual([
    { variant: "KeywordToken", value: "let" },
    { variant: "IdentToken", value: "myVariable" },
    { variant: "OperatorToken", value: ":" },
    { variant: "IdentToken", value: "Int" },
    { variant: "OperatorToken", value: "=" },
    { variant: "LiteralToken", type: "Numeric", value: "10" },
    { variant: "DelimiterToken", value: ";" },
    { variant: "KeywordToken", value: "final" },
    { variant: "IdentToken", value: "myFinalVariable" },
    { variant: "OperatorToken", value: ":" },
    { variant: "IdentToken", value: "Int" },
    { variant: "OperatorToken", value: "=" },
    { variant: "LiteralToken", type: "Numeric", value: "10" },
    { variant: "DelimiterToken", value: ";" },
  ]);
});
