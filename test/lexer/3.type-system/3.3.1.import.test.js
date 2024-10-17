import { lex, getCode } from "../../util";

test("3.3.1.import", async () => {
  const code = await getCode("./manual/3.type-system/3.3.1.import.elias");
  expect(lex(code)).toEqual([
    { variant: "KeywordToken", value: "import" },
    { variant: "IdentToken", value: "yourpackage" },
    { variant: "DelimiterToken", value: "." },
    { variant: "IdentToken", value: "yourmodule" },
    { variant: "DelimiterToken", value: "." },
    { variant: "IdentToken", value: "Person" },
    { variant: "DelimiterToken", value: ";" },
    { variant: "KeywordToken", value: "class" },
    { variant: "IdentToken", value: "Main" },
    { variant: "KeywordToken", value: "static" },
    { variant: "KeywordToken", value: "public" },
    { variant: "KeywordToken", value: "function" },
    { variant: "IdentToken", value: "main" },
    { variant: "DelimiterToken", value: "(" },
    { variant: "DelimiterToken", value: ")" },
    { variant: "KeywordToken", value: "new" },
    { variant: "IdentToken", value: "Person" },
    { variant: "DelimiterToken", value: "(" },
    { variant: "DelimiterToken", value: ")" },
    { variant: "DelimiterToken", value: ";" },
    { variant: "KeywordToken", value: "end" },
    { variant: "KeywordToken", value: "end" },
  ]);
});
