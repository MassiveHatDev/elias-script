import { lex, getCode } from "../../util";

test("2.6.1.any-type", async () => {
  const code = await getCode("./manual/2.types/2.6.1.any-type.elias");
  expect(lex(code)).toEqual([
    { variant: "KeywordToken", value: "let" },
    { variant: "IdentToken", value: "anyValue" },
    { variant: "DelimiterToken", value: ":" },
    { variant: "IdentToken", value: "Any" },
    { variant: "DelimiterToken", value: "=" },
    { variant: "IntToken", value: "10" },
    { variant: "DelimiterToken", value: ";" },
    { variant: "IdentToken", value: "anyValue" },
    { variant: "DelimiterToken", value: "=" },
    { variant: "StringToken", value: "Hello, world!" },
    { variant: "DelimiterToken", value: ";" },
  ]);
});
