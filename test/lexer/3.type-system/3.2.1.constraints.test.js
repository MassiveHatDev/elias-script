import { lex, getCode } from "../../util";

test("3.2.1.constraints", async () => {
  const code = await getCode("./manual/3.type-system/3.2.1.constraints.elias");
  expect(lex(code)).toEqual([
    { variant: "KeywordToken", value: "typedef" },
    { variant: "IdentToken", value: "Car" },
    { variant: "IdentToken", value: "model" },
    { variant: "OperatorToken", value: ":" },
    { variant: "IdentToken", value: "String" },
    { variant: "DelimiterToken", value: ";" },
    { variant: "IdentToken", value: "year" },
    { variant: "OperatorToken", value: ":" },
    { variant: "IdentToken", value: "Int" },
    { variant: "DelimiterToken", value: ";" },
    { variant: "KeywordToken", value: "end" },
    { variant: "KeywordToken", value: "class" },
    { variant: "IdentToken", value: "Garage" },
    { variant: "OperatorToken", value: "<" },
    { variant: "IdentToken", value: "T" },
    { variant: "OperatorToken", value: ":" },
    { variant: "IdentToken", value: "Car" },
    { variant: "OperatorToken", value: ">" },
    { variant: "KeywordToken", value: "public" },
    { variant: "IdentToken", value: "cars" },
    { variant: "OperatorToken", value: ":" },
    { variant: "IdentToken", value: "Array" },
    { variant: "OperatorToken", value: "<" },
    { variant: "IdentToken", value: "T" },
    { variant: "OperatorToken", value: ">" },
    { variant: "DelimiterToken", value: ";" },
    { variant: "KeywordToken", value: "end" },
  ]);
});
