import { lex, getCode } from "../../util";

test("5.9.0.let-and-final", async () => {
  const code = await getCode(
    "./manual/5.expressions/5.9.0.let-and-final.elias"
  );
  expect(lex(code)).toEqual([
    { variant: "KeywordToken", value: "let" },
    { variant: "IdentToken", value: "myVariable" },
    { variant: "DelimiterToken", value: ":" },
    { variant: "IdentToken", value: "Int" },
    { variant: "DelimiterToken", value: "=" },
    { variant: "IntToken", value: "10" },
    { variant: "DelimiterToken", value: ";" },
    { variant: "KeywordToken", value: "final" },
    { variant: "IdentToken", value: "myFinalVariable" },
    { variant: "DelimiterToken", value: ":" },
    { variant: "IdentToken", value: "Int" },
    { variant: "DelimiterToken", value: "=" },
    { variant: "IntToken", value: "10" },
    { variant: "DelimiterToken", value: ";" },
  ]);
});
