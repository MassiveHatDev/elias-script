import { lex, getCode } from "../../util";

test("4.3.1.visibility", async () => {
  const code = await getCode("./manual/4.class-fields/4.3.1.visibility.elias");
  expect(lex(code)).toEqual([
    { variant: "KeywordToken", value: "class" },
    { variant: "IdentToken", value: "MyClass" },
    { variant: "KeywordToken", value: "public" },
    { variant: "IdentToken", value: "field" },
    { variant: "DelimiterToken", value: ":" },
    { variant: "IdentToken", value: "Int" },
    { variant: "DelimiterToken", value: "=" },
    { variant: "IntToken", value: "10" },
    { variant: "DelimiterToken", value: ";" },
    { variant: "KeywordToken", value: "private" },
    { variant: "IdentToken", value: "field" },
    { variant: "DelimiterToken", value: ":" },
    { variant: "IdentToken", value: "Int" },
    { variant: "DelimiterToken", value: "=" },
    { variant: "IntToken", value: "10" },
    { variant: "DelimiterToken", value: ";" },
    { variant: "KeywordToken", value: "end" },
  ]);
});
