import { lex, getCode } from "../../util";

test("5.4.1.unary-operators", async () => {
  const code = await getCode(
    "./manual/5.expressions/5.4.1.unary-operators.elias"
  );
  expect(lex(code)).toEqual([
    { variant: "OperatorToken", value: "/" },
    { variant: "OperatorToken", value: "/" },
    { variant: "IdentToken", value: "Unary" },
    { variant: "IdentToken", value: "Operators" },
    { variant: "OperatorToken", value: "/" },
    { variant: "OperatorToken", value: "/" },
    { variant: "IdentToken", value: "Bitwise" },
    { variant: "IdentToken", value: "NOT" },
    { variant: "KeywordToken", value: "let" },
    { variant: "IdentToken", value: "a" },
    { variant: "DelimiterToken", value: ":" },
    { variant: "IdentToken", value: "Int" },
    { variant: "DelimiterToken", value: "=" },
    { variant: "IntToken", value: "5" },
    { variant: "DelimiterToken", value: ";" },
    { variant: "KeywordToken", value: "let" },
    { variant: "IdentToken", value: "bitwiseNotA" },
    { variant: "DelimiterToken", value: ":" },
    { variant: "IdentToken", value: "Int" },
    { variant: "DelimiterToken", value: "=" },
    { variant: "OperatorToken", value: "~" },
    { variant: "IdentToken", value: "a" },
    { variant: "DelimiterToken", value: ";" },
    { variant: "OperatorToken", value: "/" },
    { variant: "OperatorToken", value: "/" },
    { variant: "IdentToken", value: "Logical" },
    { variant: "IdentToken", value: "NOT" },
    { variant: "KeywordToken", value: "let" },
    { variant: "IdentToken", value: "b" },
    { variant: "DelimiterToken", value: ":" },
    { variant: "IdentToken", value: "Bool" },
    { variant: "DelimiterToken", value: "=" },
    { variant: "KeywordToken", value: "true" },
    { variant: "DelimiterToken", value: ";" },
    { variant: "KeywordToken", value: "let" },
    { variant: "IdentToken", value: "logicalNotB" },
    { variant: "DelimiterToken", value: ":" },
    { variant: "IdentToken", value: "Bool" },
    { variant: "DelimiterToken", value: "=" },
    { variant: "OperatorToken", value: "!" },
    { variant: "IdentToken", value: "b" },
    { variant: "DelimiterToken", value: ";" },
    { variant: "OperatorToken", value: "/" },
    { variant: "OperatorToken", value: "/" },
    { variant: "IdentToken", value: "Negation" },
    { variant: "KeywordToken", value: "let" },
    { variant: "IdentToken", value: "c" },
    { variant: "DelimiterToken", value: ":" },
    { variant: "IdentToken", value: "Int" },
    { variant: "DelimiterToken", value: "=" },
    { variant: "IntToken", value: "10" },
    { variant: "DelimiterToken", value: ";" },
    { variant: "KeywordToken", value: "let" },
    { variant: "IdentToken", value: "negatedC" },
    { variant: "DelimiterToken", value: ":" },
    { variant: "IdentToken", value: "Int" },
    { variant: "DelimiterToken", value: "=" },
    { variant: "OperatorToken", value: "-" },
    { variant: "IdentToken", value: "c" },
    { variant: "DelimiterToken", value: ";" },
    { variant: "KeywordToken", value: "let" },
    { variant: "IdentToken", value: "d" },
    { variant: "DelimiterToken", value: ":" },
    { variant: "IdentToken", value: "Float" },
    { variant: "DelimiterToken", value: "=" },
    { variant: "FloatToken", value: "3.14" },
    { variant: "DelimiterToken", value: ";" },
    { variant: "KeywordToken", value: "let" },
    { variant: "IdentToken", value: "negatedD" },
    { variant: "DelimiterToken", value: ":" },
    { variant: "IdentToken", value: "Float" },
    { variant: "DelimiterToken", value: "=" },
    { variant: "OperatorToken", value: "-" },
    { variant: "IdentToken", value: "d" },
    { variant: "DelimiterToken", value: ";" },
    { variant: "OperatorToken", value: "/" },
    { variant: "OperatorToken", value: "/" },
    { variant: "IdentToken", value: "Increment" },
    { variant: "DelimiterToken", value: "(" },
    { variant: "IdentToken", value: "prefix" },
    { variant: "IdentToken", value: "and" },
    { variant: "IdentToken", value: "postfix" },
    { variant: "DelimiterToken", value: ")" },
    { variant: "KeywordToken", value: "let" },
    { variant: "IdentToken", value: "e" },
    { variant: "DelimiterToken", value: ":" },
    { variant: "IdentToken", value: "Int" },
    { variant: "DelimiterToken", value: "=" },
    { variant: "IntToken", value: "7" },
    { variant: "DelimiterToken", value: ";" },
    { variant: "OperatorToken", value: "++" },
    { variant: "IdentToken", value: "e" },
    { variant: "DelimiterToken", value: ";" },
    { variant: "IdentToken", value: "e" },
    { variant: "OperatorToken", value: "++" },
    { variant: "DelimiterToken", value: ";" },
    { variant: "OperatorToken", value: "/" },
    { variant: "OperatorToken", value: "/" },
    { variant: "IdentToken", value: "Decrement" },
    { variant: "DelimiterToken", value: "(" },
    { variant: "IdentToken", value: "prefix" },
    { variant: "IdentToken", value: "and" },
    { variant: "IdentToken", value: "postfix" },
    { variant: "DelimiterToken", value: ")" },
    { variant: "KeywordToken", value: "let" },
    { variant: "IdentToken", value: "f" },
    { variant: "DelimiterToken", value: ":" },
    { variant: "IdentToken", value: "Float" },
    { variant: "DelimiterToken", value: "=" },
    { variant: "FloatToken", value: "5.5" },
    { variant: "DelimiterToken", value: ";" },
    { variant: "OperatorToken", value: "++" },
    { variant: "IdentToken", value: "f" },
    { variant: "DelimiterToken", value: ";" },
    { variant: "IdentToken", value: "f" },
    { variant: "OperatorToken", value: "++" },
    { variant: "DelimiterToken", value: ";" },
  ]);
});
