import { lex, getCode } from "../../util";

test("2.5.2.default-values", async () => {
  const code = await getCode("./manual/2.types/2.5.2.default-values.elias")
  expect(lex(code)).toEqual([
    { variant: 'KeywordToken', value: 'typedef' },
    { variant: 'IdentToken', value: 'MyFunction' },
    { variant: 'DelimiterToken', value: '=' },
    { variant: 'DelimiterToken', value: '(' },
    { variant: 'IdentToken', value: 'a' },
    { variant: 'DelimiterToken', value: ':' },
    { variant: 'IdentToken', value: 'Int' },
    { variant: 'DelimiterToken', value: ',' },
    { variant: 'IdentToken', value: 'b' },
    { variant: 'DelimiterToken', value: ':' },
    { variant: 'IdentToken', value: 'Int' },
    { variant: 'DelimiterToken', value: '=' },
    { variant: 'IntToken', value: '10' },
    { variant: 'DelimiterToken', value: ')' },
    { variant: 'OperatorToken', value: '->' },
    { variant: 'IdentToken', value: 'Int' },
    { variant: 'DelimiterToken', value: ';' }
  ]);
});
