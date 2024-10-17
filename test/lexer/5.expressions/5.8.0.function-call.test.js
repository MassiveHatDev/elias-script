import { lex, getCode } from "../../util";

test("5.8.0.function-call", async () => {
  const code = await getCode(
    "./manual/5.expressions/5.8.0.function-call.elias"
  );
  expect(lex(code)).toEqual([
    { variant: "KeywordToken", value: "let" },
    { variant: "IdentToken", value: "myFunction" },
    { variant: "DelimiterToken", value: "=" },
    { variant: "DelimiterToken", value: "(" },
    { variant: "IdentToken", value: "a" },
    { variant: "DelimiterToken", value: ":" },
    { variant: "IdentToken", value: "Int" },
    { variant: "DelimiterToken", value: "," },
    { variant: "IdentToken", value: "b" },
    { variant: "DelimiterToken", value: ":" },
    { variant: "IdentToken", value: "Int" },
    { variant: "DelimiterToken", value: ")" },
    { variant: "OperatorToken", value: "->" },
    { variant: "IdentToken", value: "Int" },
    { variant: "KeywordToken", value: "return" },
    { variant: "IdentToken", value: "a" },
    { variant: "OperatorToken", value: "+" },
    { variant: "IdentToken", value: "b" },
    { variant: "DelimiterToken", value: ";" },
    { variant: "KeywordToken", value: "end" },
    { variant: "KeywordToken", value: "let" },
    { variant: "IdentToken", value: "myResult" },
    { variant: "DelimiterToken", value: "=" },
    { variant: "IdentToken", value: "myFunction" },
    { variant: "DelimiterToken", value: "(" },
    { variant: "IntToken", value: "1" },
    { variant: "DelimiterToken", value: "," },
    { variant: "IntToken", value: "2" },
    { variant: "DelimiterToken", value: ")" },
    { variant: "DelimiterToken", value: ";" },
  ]);
});
