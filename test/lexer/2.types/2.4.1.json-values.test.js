import { lex, getCode } from "../../util";

test("2.4.1.json-values", async () => {
  const code = await getCode("./manual/2.types/2.4.1.json-values.elias");
  expect(lex(code)).toEqual([
    { variant: "KeywordToken", value: "let" },
    { variant: "IdentToken", value: "point" },
    { variant: "DelimiterToken", value: "=" },
    { variant: "DelimiterToken", value: "{" },
    { variant: "StringToken", value: "x" },
    { variant: "DelimiterToken", value: ":" },
    { variant: "IntToken", value: "10" },
    { variant: "DelimiterToken", value: "," },
    { variant: "StringToken", value: "y" },
    { variant: "DelimiterToken", value: ":" },
    { variant: "IntToken", value: "10" },
    { variant: "DelimiterToken", value: "}" },
    { variant: "DelimiterToken", value: ";" },
  ]);
});
