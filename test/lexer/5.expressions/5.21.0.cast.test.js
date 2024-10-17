import { lex, getCode } from "../../util";

test("5.21.0.cast", async () => {
  const code = await getCode("./manual/5.expressions/5.21.0.cast.elias");
  expect(lex(code)).toEqual([
    { variant: 'KeywordToken', value: 'let' },
    { variant: 'IdentToken', value: 'myInt' },
    { variant: 'DelimiterToken', value: ':' },
    { variant: 'IdentToken', value: 'Int' },
    { variant: 'DelimiterToken', value: '=' },
    { variant: 'IntToken', value: '10' },
    { variant: 'DelimiterToken', value: ';' },
    { variant: 'KeywordToken', value: 'let' },
    { variant: 'IdentToken', value: 'myFloat' },
    { variant: 'DelimiterToken', value: ':' },
    { variant: 'IdentToken', value: 'Float' },
    { variant: 'DelimiterToken', value: '=' },
    { variant: 'KeywordToken', value: 'cast' },
    { variant: 'IdentToken', value: 'myInt' },
    { variant: 'DelimiterToken', value: ';' }
  ]);
});
