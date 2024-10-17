import { lex, getCode } from "../../util";

test("5.18.0.return", async () => {
  const code = await getCode("./manual/5.expressions/5.18.0.return.elias");
  expect(lex(code)).toEqual([
    { variant: 'KeywordToken', value: 'return' },
    { variant: 'IdentToken', value: 'expression' },
    { variant: 'DelimiterToken', value: ';' }
  ]);
});
