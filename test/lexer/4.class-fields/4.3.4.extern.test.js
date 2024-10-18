import { lex, getCode } from "../../util";

test("4.3.4.extern", async () => {
  const code = await getCode("./manual/4.class-fields/4.3.4.extern.elias");
  expect(lex(code)).toEqual([
    { variant: "KeywordToken", value: "extern" },
    { variant: "KeywordToken", value: "class" },
    { variant: "IdentToken", value: "NativeRubyClass" },
    { variant: "KeywordToken", value: "public" },
    { variant: "KeywordToken", value: "def" },
    { variant: "IdentToken", value: "myMethod" },
    { variant: "DelimiterToken", value: "(" },
    { variant: "DelimiterToken", value: ")" },
    { variant: "OperatorToken", value: ":" },
    { variant: "IdentToken", value: "Void" },
    { variant: "KeywordToken", value: "end" },
  ]);
});
