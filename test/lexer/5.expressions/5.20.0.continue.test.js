import { lex, getCode } from "../../util";

test("5.20.0.continue", async () => {
  const code = await getCode("./manual/5.expressions/5.20.0.continue.elias");
  expect(lex(code)).toEqual([
    { variant: 'KeywordToken', value: 'while' },
    { variant: 'KeywordToken', value: 'true' },
    { variant: 'IdentToken', value: 'expr1' },
    { variant: 'KeywordToken', value: 'if' },
    { variant: 'IdentToken', value: 'condition' },
    { variant: 'KeywordToken', value: 'continue' },
    { variant: 'DelimiterToken', value: ';' },
    { variant: 'KeywordToken', value: 'end' },
    { variant: 'IdentToken', value: 'expr2' },
    { variant: 'KeywordToken', value: 'end' }
  ]);
});
