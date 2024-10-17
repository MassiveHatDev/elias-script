import { lex, getCode } from "../../util";

test("2.4.2.struct-type-notation", async () => {
  const code = await getCode("./manual/2.types/2.4.2.struct-type-notation.elias")
  expect(lex(code)).toEqual([
    { variant: 'KeywordToken', value: 'typedef' },
    { variant: 'IdentToken', value: 'Point' },
    { variant: 'DelimiterToken', value: '=' },
    { variant: 'DelimiterToken', value: '{' },
    { variant: 'IdentToken', value: 'x' },
    { variant: 'DelimiterToken', value: ':' },
    { variant: 'IdentToken', value: 'Int' },
    { variant: 'DelimiterToken', value: ';' },
    { variant: 'IdentToken', value: 'y' },
    { variant: 'DelimiterToken', value: ':' },
    { variant: 'IdentToken', value: 'Int' },
    { variant: 'DelimiterToken', value: ';' },
    { variant: 'DelimiterToken', value: '}' }
  ]);
});
